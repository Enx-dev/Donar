import Link from "next/link";
import React,{useState} from "react";
import { Nav } from "./Model";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  navList: Nav[];
  icon: any;
  open:boolean
  setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerNav: React.FC<Props> = ({ navList, icon,open,setOpen }) => {
  return (
    <div className="flex absolute top-14 right-0 rounded-md h-50 justify-between   bg-red-600 lg:hidden">
      <div className="   py-4 space-y-3 w-40 justify-start  ">
        {navList.map((index) => (
         <div className={open === true ? "display" : "none"}>
          <Link className="  flex flex-col ml-2 border-b-2  " href={`${index.a}`}>{index.name}</Link>
         </div>
         ))}
      </div>
         <div>
           <GiHamburgerMenu onClick={()=>{setOpen(false)}} fontSize={30} className="cursor-pointer" />
         </div>

    </div>
  );
};

export default BurgerNav;
