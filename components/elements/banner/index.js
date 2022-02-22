import React from "react";

export default function Banner(props) {
  return (
    <div className="text-white text-[40px] h-full min-h-screen md:min-h-[400px]  font-bold  flex flex-col items-start justify-center ">
      <h1 className="flex flex-col md:flex-row leading-9 mb-5">
        <span className="mb-2 md:mr-3 md:mb-0">Coffee </span>
        <span className="text-blue-800">Connoisseur</span>
      </h1>
      <h2 className="text-[25px] font-semibold mb-5">Discover your local coffee shops!</h2>
      <button
        onClick={props.onClick}
        className="text-[20px] font-semibold  bg-blue-800 p-4 rounded-lg hover:bg-blue-500 hover:shadow-sm"
      >
        {props.bottonText}
      </button>
    </div>
  );
}
