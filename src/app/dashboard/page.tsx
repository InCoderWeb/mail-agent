"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import {
  MailIcon,
  TrashIcon,
  ArchiveIcon,
  ReplyIcon,
  ForwardIcon,
  PlusIcon,
  Inbox,
  FileText,
  Send,
  Trash2,
  Archive,
  Users,
  Tag,
  MessageSquare,
  ShoppingCart,
  Bell,
  AlertTriangle,
  Circle,
  CircleCheck,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const folders = [
  "Inbox",
  "Drafts",
  "Sent",
  "Junk",
  "Trash",
  "Archive",
  "Social",
  "Updates",
  "Forums",
  "Shopping",
  "Promotions",
];

const folderIcons: Record<string, JSX.Element> = {
  Inbox: <Inbox className="w-4 h-4" />,
  Drafts: <FileText className="w-4 h-4" />,
  Sent: <Send className="w-4 h-4" />,
  Junk: <AlertTriangle className="w-4 h-4" />,
  Trash: <Trash2 className="w-4 h-4" />,
  Archive: <Archive className="w-4 h-4" />,
  Social: <Users className="w-4 h-4" />,
  Updates: <Bell className="w-4 h-4" />,
  Forums: <MessageSquare className="w-4 h-4" />,
  Shopping: <ShoppingCart className="w-4 h-4" />,
  Promotions: <Tag className="w-4 h-4" />,
};

const userEmails = [
  "alicia@example.com",
  "workmail@example.com",
  "personal@example.com",
];

interface Email {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  tags: string[];
  time: string;
  body: string;
  read: boolean;
  folder: string;
}

const initialEmails: Email[] = [
  {
    id: 1,
    sender: "William Smith",
    subject: "Meeting Tomorrow",
    preview: "Hi, let's have a meeting tomorrow to discuss the project...",
    tags: ["work", "important"],
    time: "Oct 22, 2023, 9:00 AM",
    body: `Hi, let's have a meeting tomorrow to discuss the project.\n\nPlease come prepared with insights. Looking forward to our meeting.\n\nBest, William`,
    read: false,
    folder: "Inbox",
  },
  {
    id: 2,
    sender: "Jane Doe",
    subject: "Lunch Plans",
    preview: "Are you free for lunch today at 1pm?",
    tags: ["personal"],
    time: "Oct 22, 2023, 10:30 AM",
    body: `Are you free for lunch today at 1pm? Let me know.\n\nCheers,\nJane`,
    read: false,
    folder: "Social",
  },
  {
    id: 3,
    sender: "GitHub",
    subject: "New Commit in your repo",
    preview: "A new commit has been pushed to your repo...",
    tags: ["dev", "github"],
    time: "Oct 21, 2023, 4:00 PM",
    body: `A new commit has been pushed to your repo.\n\nYou can review the changes in the pull request.`,
    read: true,
    folder: "Updates",
  },
  
  {
    id: 4,
    sender: "Amazon",
    subject: "Your order has shipped!",
    preview: "Your order #123-4567890 has shipped...",
    tags: ["shopping"],
    time: "Oct 20, 2023, 6:00 PM",
    body: `Your order #123-4567890 has shipped.\n\nTrack your shipment here: [link]`,
    read: false,
    folder: "Shopping",
  },
  {
    id: 5,
    sender: "LinkedIn",
    subject: "You appeared in 10 searches this week",
    preview: "See who's been viewing your profile...",
    tags: ["social", "career"],
    time: "Oct 19, 2023, 8:00 AM",
    body: `Hi there, your profile was viewed 10 times this week.\n\nVisit LinkedIn to check out more insights.`,
    read: true,
    folder: "Social",
  },
  {
    id: 6,
    sender: "Stack Overflow",
    subject: "Your answer was accepted!",
    preview: "Congrats! Your answer to 'How to fix async errors' was accepted...",
    tags: ["dev"],
    time: "Oct 18, 2023, 2:30 PM",
    body: `Your answer to the question "How to fix async errors" has been accepted!\n\nGreat job and keep contributing!`,
    read: true,
    folder: "Updates",
  },
  {
    id: 7,
    sender: "HR Department",
    subject: "Annual Leave Policy Updated",
    preview: "Please review the updated leave policy effective immediately...",
    tags: ["work"],
    time: "Oct 17, 2023, 11:00 AM",
    body: `Hi team,\n\nThe annual leave policy has been updated.\n\nPlease review the attached document for changes.\n\nThanks, HR`,
    read: false,
    folder: "Inbox",
  },
  {
    id: 8,
    sender: "Amazon",
    subject: "Your order has shipped!",
    preview: "Your order #123-4567890 has shipped...",
    tags: ["shopping"],
    time: "Oct 20, 2023, 6:00 PM",
    body: `Your order #123-4567890 has shipped.\n\nTrack your shipment here: [link]`,
    read: false,
    folder: "Shopping",
  },
  {
    id: 9,
    sender: "LinkedIn",
    subject: "You appeared in 10 searches this week",
    preview: "See who's been viewing your profile...",
    tags: ["social", "career"],
    time: "Oct 19, 2023, 8:00 AM",
    body: `Hi there, your profile was viewed 10 times this week.\n\nVisit LinkedIn to check out more insights.`,
    read: true,
    folder: "Social",
  },
  {
    id: 10,
    sender: "Stack Overflow",
    subject: "Your answer was accepted!",
    preview: "Congrats! Your answer to 'How to fix async errors' was accepted...",
    tags: ["dev"],
    time: "Oct 18, 2023, 2:30 PM",
    body: `Your answer to the question "How to fix async errors" has been accepted!\n\nGreat job and keep contributing!`,
    read: true,
    folder: "Updates",
  },
];

const Dashboard: React.FC = () => {
  const [emails, setEmails] = useState<Email[]>(initialEmails);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [replyText, setReplyText] = useState<string>("");
  const [selectedUserEmail, setSelectedUserEmail] = useState(userEmails[0]);
  const [selectedFolder, setSelectedFolder] = useState<string>("Inbox");

  const handleSelectEmail = (email: Email) => {
    const updated = emails.map((e) =>
      e.id === email.id ? { ...e, read: true } : e
    );
    setEmails(updated);
    setSelectedEmail({ ...email, read: true });
  };

  const toggleReadStatus = (emailId: number) => {
    setEmails((prev) =>
      prev.map((email) =>
        email.id === emailId ? { ...email, read: !email.read } : email
      )
    );
  };

  const filteredEmails = emails.filter(
    (email) => email.folder === selectedFolder
  );

  return (
    <div className="grid grid-cols-12 min-h-screen bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <aside className="col-span-2 border-r border-gray-700 p-4 space-y-4">
        <Select
          onValueChange={(val) => setSelectedUserEmail(val)}
          defaultValue={selectedUserEmail}
        >
          <SelectTrigger className="bg-gray-800 text-gray-200 border-gray-600 focus:ring-2 focus:ring-[#810cab]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-gray-200 border-gray-600">
            {userEmails.map((email) => (
              <SelectItem
                key={email}
                value={email}
                className="hover:bg-gray-700"
              >
                {email}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button className="bg-[#810cab] hover:bg-purple-700 text-gray-100 w-full">
          <PlusIcon className="w-4 h-4 mr-2" />
          Compose
        </Button>

        <ul className="space-y-2 text-sm">
          {folders.map((folder) => (
            <li
              key={folder}
              onClick={() => setSelectedFolder(folder)}
              className={`hover:bg-gray-700 rounded px-2 py-1 cursor-pointer flex items-center gap-2 ${
                selectedFolder === folder ? "bg-gray-700" : ""
              }`}
            >
              {folderIcons[folder] || <MailIcon className="w-4 h-4" />}
              {folder}
            </li>
          ))}
        </ul>
      </aside>

      {/* Email List */}
      <section className="col-span-4 border-r border-gray-700 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-200">{selectedFolder}</h2>
        </div>
        <Input
          placeholder="Search"
          className="mb-4 bg-gray-800 border-gray-600 text-gray-200"
        />
        <ScrollArea className="h-[calc(100vh-160px)] pr-2">
          {filteredEmails.map((email) => (
            <Card
              key={email.id}
              onClick={() => handleSelectEmail(email)}
              className={`mb-2 cursor-pointer border ${
                selectedEmail?.id === email.id
                  ? "border-[#810cab] bg-gray-800"
                  : "bg-gray-700 hover:bg-gray-600 border-transparent"
              }`}
            >
              <CardContent className="p-3 relative">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-gray-300">
                    {email.sender}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleReadStatus(email.id);
                    }}
                    className="text-gray-400 hover:text-white"
                    title={email.read ? "Mark as unread" : "Mark as read"}
                  >
                    {email.read ? (
                      <CircleCheck className="w-4 h-4" />
                    ) : (
                      <Circle className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div
                  className={`text-sm ${
                    email.read ? "text-gray-400" : "text-white font-semibold"
                  }`}
                >
                  {email.subject}
                </div>
                <div className="text-xs text-gray-500">{email.preview}</div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {email.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#810cab] text-xs px-2 py-0.5 rounded-full text-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </section>

      {/* Email Detail */}
      <section className="col-span-6 p-6 overflow-auto">
        {selectedEmail ? (
          <div>
            <div className="mb-2">
              <div className="text-xl font-bold text-gray-300">
                {selectedEmail.sender}
              </div>
              <div className="text-base text-[#810cab]">
                {selectedEmail.subject}
              </div>
              <div className="text-xs text-gray-500 mb-4">
                {selectedEmail.time}
              </div>
            </div>
            <div className="mb-6 whitespace-pre-wrap text-sm text-gray-400">
              {selectedEmail.body}
            </div>
            <div className="flex gap-4 mb-4">
              <Button
                variant="outline"
                className="border-gray-600 text-gray-500 hover:border-[#810cab]"
              >
                <ReplyIcon className="w-4 h-4 mr-2" />
                Reply
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-500 hover:border-[#810cab]"
              >
                <ForwardIcon className="w-4 h-4 mr-2" />
                Forward
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-500 hover:border-[#810cab]"
              >
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-500 hover:border-[#810cab]"
              >
                <ArchiveIcon className="w-4 h-4 mr-2" />
                Archive
              </Button>
            </div>
            <Input
              placeholder="Write your reply..."
              className="bg-gray-800 border-gray-600 text-gray-200"
              value={replyText}     
               onChange={(e) => setReplyText(e.target.value)}
              />
              <div className="mt-4 flex justify-end">
                <Button
                  className="bg-[#810cab] hover:bg-purple-700 text-gray-100"
                  onClick={() => {
                    // Placeholder: Handle reply submission
                    console.log("Reply sent:", replyText);
                    setReplyText("");
                  }}
                >
                  Send Reply
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-gray-500 text-center mt-20 text-lg">
              Select an email to view its content.
            </div>
          )}
        </section>
      </div>
    );
  };
  
  export default Dashboard;
  
