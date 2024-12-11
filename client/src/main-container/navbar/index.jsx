import React from 'react';
import { BellDot, ChevronDown, Menu, MessageSquareText, Search } from 'lucide-react';
import profile from '../../assets/profile.jpg';
const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-2 w-full">
      
      {/* Search Bar */}
      <div className=" hidden sm:flex items-center  gap-4 border rounded-md flex-grow max-w-[60%]">
        <input
          className="w-full p-2 border-none outline-none "
          placeholder="Search"
        />
        <Search className="h-4 w-4 mr-4" />
      </div>

      <div className=' flex md:hidden items-center gap-2'>

        <Menu className="h-9 w-9 mr-4" />

      <Search className="h-9 w-9 mr-4" />




      </div>

      {/* Icons */}
      <div className="flex items-center gap-4 p-4">
        <BellDot className="h-5 w-5" />
        <MessageSquareText className="h-5 w-5" />
        <div className='flex items-center p-3'>
          <img
            className="h-7 w-7 rounded-full cursor-pointer"
            src={profile}
          />
        <ChevronDown className="h-7 w-7 cursor-pointer" />
        </div>
      </div>

    </div>
  );
};

export default NavBar;
