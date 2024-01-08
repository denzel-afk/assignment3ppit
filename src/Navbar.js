import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi"
import { FaHouse } from "react-icons/fa6";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdDoneAll } from "react-icons/io";
import { useState } from 'react';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const menus=[
        {name:"Home", link:'/', icon:FaHouse},
        {name:"New", link:"/Create", icon: CiCirclePlus},
        {name:"Completed", link:"/Completed", icon:IoMdDoneAll}
    ]
    return (
        <nav className="flex gap-6">
            <div className={`bg-black min-h-screen justify-end ${open ? 'w-72':'w-16'} duration-500 text-gray-100 px-4`}>
                <div className="py-3 justify-end flex">
                    <HiMenuAlt3 size={32} className="cursor-pointer" onClick={(() => setOpen(!open))}></HiMenuAlt3>
                </div>
                <div className="mt-4 flex flex-col gap-4 relative ">
                    <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Navigate</h2>
                    {menus?.map((menu, i) => (
                        <Link to={menu?.link} key={i} className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
                            <div>
                                {React.createElement(menu?.icon, { size: "20" })}
                            </div>
                            <h2 style={{transitionDelay:`${i+3}00ms`,}}  className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;