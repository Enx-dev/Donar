import Link from "next/link";
import React, { useState } from "react";
import BrandLogo from "../../shared/BrandLogo";
import Button from "../../shared/Button/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import BurgerNav from "./BurgerNav";

const Navbar = () => {
   const NavList = [
    {
      a: "#",
      name: "Home",
    },
    {
      a: "#",
      name: "About",
    },
    {
      a: "#",
      name: "Campaigns",
    },
    {
      a: "#",
      name: "Blog",
    },
  ];

  const [open, setOpen] = useState<boolean>(false);
  return (

    <nav className="grid grid-cols-3 relative  justify-between items-center py-16 contain ">
      <div className="md:ml-20 lg:ml-0">
        <BrandLogo />
      </div>
      <ul className="lg:flex space-x-2 lg:space-x-4 hidden w-80 lg:flex-1   items-center text-text tracking-tight font-head text-light-text">
        {/* 

        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Campaigns</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li> */}
        {NavList.map((index) => (
          <li>
            <Link href={`${index.a}`}>{index.name}</Link>
          </li>
        ))}
      </ul>
      <Link
        href="/connet"
        className="max-w-lg ml-9 flex-1 md:ml-[140px] lg:ml-[62px] xl:ml-9"
      >
        <Button variant="outlined">Connect wallet</Button>
      </Link>
      <GiHamburgerMenu fontSize={40}   onClick={()=>{setOpen(true)}} className="cursor-pointer lg:hidden" />
      <div className=" lg:hidden ">
         <BurgerNav navList ={NavList} icon={GiHamburgerMenu} open={open} setOpen={setOpen}/>
      </div>
    </nav>
  );
};

export default Navbar;

/**font-family: Play;
font-size: 20px;
font-weight: 400;
line-height: 48px;
letter-spacing: -0.022em;
text-align: center;
 */
