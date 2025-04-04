"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Star,
  AlarmClock,
  FileText,
  Send,
  Inbox,
  Settings,
  Clock,
  MessageSquare,
  Mail,
  Trash2,
  Folder,
  AlertTriangle,
  Tag,
  Flame, // Urgent
  Calendar, // Meetings
  Reply, // Follow-ups
  CheckCircle, // Approvals
  Pencil,
} from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

// Main menu items (always visible)
const mainItems = [
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Starred", url: "#", icon: Star },
  { title: "Snoozed", url: "#", icon: AlarmClock },
  { title: "Sent", url: "#", icon: Send },
  { title: "Drafts", url: "#", icon: FileText },
  { title: "Urgent", url: "#", icon: Flame },
  { title: "Meetings", url: "#", icon: Calendar },
  { title: "Follow Ups", url: "#", icon: Reply },
  { title: "Approvals", url: "#", icon: CheckCircle },
];

// More items (hidden under "More" collapsible section)
const moreItems = [
  { title: "Important", url: "#", icon: Tag },
  { title: "Chats", url: "#", icon: MessageSquare },
  { title: "Scheduled", url: "#", icon: Clock },
  { title: "All Mail", url: "#", icon: Mail },
  { title: "Spam", url: "#", icon: AlertTriangle },
  { title: "Bin", url: "#", icon: Trash2 },
  { title: "Categories", url: "#", icon: Folder },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const [isOpen, setIsOpen] = useState(false); // ✅ Moved inside the component

  return (
    <Sidebar
      collapsible="icon"
      variant="floating"
      className="w-64 min-h-screen border-r shadow-lg"
    >
      {/*Sidebar Header with Gmail Dropdown */}
      <SidebarHeader className="p-4 border-b flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center w-full p-2 text-sm font-medium rounded-md">
              <span className={`${state === "collapsed" ? "hidden" : "block"}`}>
                Your Gmail Accounts
              </span>
              <ChevronDown
                className={`w-4 h-4 text-black transition-transform ${
                  state === "collapsed"
                    ? "rotate-90 opacity-100"
                    : "opacity-100 ms-4"
                }`}
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="bottom" className="w-full">
            <DropdownMenuItem>
              <span>john@gmail.com</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>steve@gmail.com</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      {/* ✅ Compose Button */}
      <Button
        variant="outline"
        className={`${
          state === "collapsed"
            ? "ml-2 mt-2 mr-2"
            : "flex items-center gap-2 p-4 text-black bg-dark mt-4 ml-6 mr-6 hover:!bg-[#810cab] hover:!text-[white]"
        }`}
      >
        <Pencil />
        <span
          className={`${
            state === "collapsed" ? "hidden" : "opacity-100 w-auto"
          }`}
        >
          Compose
        </span>
      </Button>

      {/* ✅ Sidebar Content */}
      <SidebarContent className={`${state === "collapsed" ? "ml-0" : "ml-4"}`}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Main Items */}
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
                    >
                      <item.icon className="w-5 h-5" />
                      <span
                        className={`${
                          state === "collapsed"
                            ? "opacity-0 w-0"
                            : "opacity-100 w-auto"
                        }`}
                      >
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* ✅ Collapsible "More" Section */}
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 p-2 rounded-md"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    <span
                      className={`${
                        state === "collapsed" ? "hidden" : "opacity-100 w-auto"
                      }`}
                    >
                      {isOpen ? "Less" : "More"}
                    </span>
                  </CollapsibleTrigger>
                </SidebarMenuItem>

                <CollapsibleContent>
                  {moreItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a
                          href={item.url}
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
                        >
                          <item.icon className="w-5 h-5" />
                          <span
                            className={`${
                              state === "collapsed"
                                ? "opacity-0 w-0"
                                : "opacity-100 w-auto"
                            }`}
                          >
                            {item.title}
                          </span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
