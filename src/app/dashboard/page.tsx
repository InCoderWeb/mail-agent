import React from 'react'
import MidMainPage from "@/app/middlepanel/MidMainPage"
import SearchMainPage from "@/app/SearchBar/SearchMainPage";
import  AppSideMain  from "@/app/sidepanel/AppSideMain";

const Dashboard = () => {
  return (
    <div className="flex"> 
    <AppSideMain />  
      <div className="flex-1 flex flex-col">
        <SearchMainPage /> 
        <MidMainPage /> 
      </div>
    </div>
  )
}

export default Dashboard;