import React from "react";
import Search from "@material-ui/icons/Search";
import Home from "@material-ui/icons/Home";

const Header = () => {
  return (
    <header className="py-5 px-5 flex justify-between items-center border-b-[3px] border-disabled shadow-lg">
      <div className="bg-disabled rounded-md px-2 flex justify-between items-center w-[40%]">
        <Search className="text-lightGrey font-bold" />
        <input
          className="bg-transparent text-lightGrey outline-none px-2 py-2 font-bold w-full"
          type="text"
          placeholder="Search"
        />
      </div>
      <Home className="text-black font-medium cursor-pointer" />
    </header>
  );
};

export default Header;
