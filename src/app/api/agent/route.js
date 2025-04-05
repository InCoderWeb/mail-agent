import { NextResponse } from 'next/server'
import { ChatGoogleGenerativeAI } from '@langchain/google-genai'
import * as dotenv from 'dotenv'
dotenv.config()

import { START, END, MessagesAnnotation, StateGraph, MemorySaver } from '@langchain/langgraph'
import fs from 'fs'
import { HumanMessage, AIMessage, SystemMessage } from '@langchain/core/messages'

async function callModel(state) {
    const response = await model.invoke(state.messages)
    return { messages: [response] }
}

const workflow = new StateGraph(MessagesAnnotation)
    .addNode('model', callModel)
    .addEdge(START, 'model')
    .addEdge('model', END)

const memory = new MemorySaver()
const app = workflow.compile({ checkpointer: memory })

const model = new ChatGoogleGenerativeAI({
    model: 'gemini-2.0-flash',
    temperature: 0,
    maxTokens: 1000
})

function createThread() {
    const threadId = Math.floor(Math.random() * 1000000)
    if (fs.existsSync(`./${threadId}`)) {
        return createThread()
    }
    return threadId
}

function loadThread(threadId) {
    try{
        if (fs.existsSync(`./${threadId}.json`)) {
            let data = fs.readFileSync(`./${threadId}.json`, 'utf8')
            data = JSON.parse(data)
            let msgs = []
            data.messages.forEach((msg) => {
                if (msg.role == 'user') {
                    msgs.push(new HumanMessage(msg.content))
                }
                else if (msg.role == 'assistant') {
                    msgs.push(new AIMessage(msg.content))
                }
                else if (msg.role == 'system') {
                    msgs.push(new SystemMessage(msg.content))
                }
            })
            return msgs
        }
        else{
            fs.writeFileSync(`./${threadId}.json`, JSON.stringify({ messages: [] }), 'utf8')
            return []
        }
    }
    catch (error) {
        console.error(error)
        return "error"
    }
}

function saveThread(threadId, data) {
    try {
        let msgs = []
        data.messages.forEach((msg) => {
            if (msg._getType() == 'human') {
                msgs.push({
                    role: 'user',
                    content: msg.text
                })
            }
            else if (msg._getType() == 'ai') {
                msgs.push({
                    role: 'assistant',
                    content: msg.text
                })
            }
            else if (msg._getType() == 'system') {
                msgs.push({
                    role: 'system',
                    content: msg.text
                })
            }
        })
        msgs = {
            messages: msgs
        }
        fs.writeFileSync(`./${threadId}.json`, JSON.stringify(msgs), 'utf8')
        return true
    }
    catch (error) {
        console.error(error)
        return false
    }
}


export async function POST(request) {
    const body = await request.json()
    if (body && body?.status == "start") {
        // console.log('passed ok')
        const threadId = createThread()
        return NextResponse.json({ status: 200, thread: threadId })
    }
    else if (body && body?.status == "send") {
        try {
            const threadId = body.thread;
            const inp = body.message;
            const oldMessages = loadThread(threadId)
            if (oldMessages == "error") {
                return NextResponse.json({status: 400})
            }
            oldMessages.push(new HumanMessage(inp))
            const config = { configurable: { thread_id: threadId } }
            let res = await app.invoke(
                { messages: oldMessages },
                config
            )
            // console.log(res)
            oldMessages.push(res.messages[0])
            const saved = saveThread(threadId, res)
            if (saved) {
                // console.log(res.messages[res.messages.length-1].content)
                return NextResponse.json({ status: 200, reply: res.messages[res.messages.length-1].content })
            }
            else {
                return NextResponse.json({ status: 400 })
            }
        }
        catch (error) {
            console.error(error)
            return NextResponse.json({ status: 400 })
        }
    }
    return NextResponse.json({ status: 400 })
}