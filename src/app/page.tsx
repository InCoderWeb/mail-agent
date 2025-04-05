import MidMainPage from "./middlepanel/MidMainPage";
import SearchMainPage from "./SearchBar/SearchMainPage";
import  AppSideMain  from "./sidepanel/AppSideMain";
import LandingPage from "@/app/LandingPage/page";
export default function Home() {
  return (
    <div className="flex"> 
      <LandingPage/>
      <AppSideMain />  
      <div className="flex-1 flex flex-col">
        <SearchMainPage /> 
        <MidMainPage /> 
      </div>
  );
}
