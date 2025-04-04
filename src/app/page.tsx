import MidMainPage from "./middlepanel/MidMainPage";
import SearchMainPage from "./SearchBar/SearchMainPage";
import AppSideMain from "./sidepanel/AppSideMain";

export default function Home() {
  return (
    <div className="flex"> 
      <AppSideMain />  
      <div className="flex-1 flex flex-col">
        <SearchMainPage /> 
        <MidMainPage /> 
      </div>
    </div>
  );
}
