import Link from "next/link";
import React, { useState } from "react";
import BrandLogo from "../../shared/BrandLogo";
import Button from "../../shared/Button/Button";
import Popup from "./Popup";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  console.log(toogle);

  return (
    <nav className="flex z-30 justify-between py-8 contain items-center">
      <BrandLogo />
      <ul className="hidden lg:flex space-x-6 items-center text-text tracking-tight font-head text-light-text">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Campaigns</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
      </ul>
      <Link href="/connet" className="hidden lg:flex max-w-lg">
        <Button variant="outlined">Connect wallet</Button>
      </Link>
      <div onClick={() => setToogle((prev) => !prev)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 lg:hidden cursor-pointer">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {toogle && <Popup setToogle={setToogle} />}
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