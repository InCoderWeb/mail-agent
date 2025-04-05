import React from "react";
import "../style.css";


const MiddlePanel = () => {
  return (
    <div className="border-r-2 p-4 h-screen">
      <div className="main mt-20 flex flex-col sm:flex-row justify-center items-center sm:items-start w-full sm:w-[76%] mx-auto">
        <div className="select flex flex-wrap sm:flex-nowrap gap-2 border-2 p-4 rounded-xl">
          <p className="btn-category ">All</p>
          <p className="btn-category ">Important</p>
          <p className="btn-category ">Urgent</p>
        </div>
        <div className="msg w-full sm:w-auto mt-4 sm:mt-0"></div>
      </div>
    </div>
  );
};

export default MiddlePanel;
