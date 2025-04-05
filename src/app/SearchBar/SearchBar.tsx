import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function SearchBar() {
  return (
    <div className="w-full flex justify-center p-4 fixed top-0 z-10 bg-[#fff] border-b-2" >
    <SidebarTrigger />
      <div className="relative flex-1 max-w-md sm:max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="Search emails..."
          className="pl-12 md:w-100 w-full text-black border border-gray-600 focus:ring-2 focus:ring-blue-500 rounded-md"
        />
      </div>
    </div>
  );
}
