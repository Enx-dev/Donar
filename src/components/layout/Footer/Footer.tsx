import React from "react";
import BrandLogo from "../../shared/BrandLogo";
import twitter from "../../../asset/twitter.svg";
import discord from "../../../asset/Vector.svg";
import CTA from "./CTA";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="contain space-y-20">
      <CTA />
      <div className="flex flex-col md:flex-row mb-[100px]  justify-between items-center">
        <div className="ml-[-12px] sm:ml-0  md:ml-0">

        <BrandLogo />
        </div>
        <ul className="flex  px-12 flex-col mt-3     md:mt-0  xl:justify-between space-y-2 text-text xl:items-center ">
          <li className="text-light-text">
            <Link href="#">Explore</Link>
          </li>
          <li className="text-light-text">
            <Link href="#">How It works</Link>
          </li>
          <li className="text-light-text">
            <Link href="#">Privacy Policy</Link>
          </li>
          <li className="text-light-text">
            <Link href="#">Community</Link>
          </li>
        </ul>
        <div className="flex space-x-20 items-center justify-center  flex-row  mt-4  md:mt-0  ">
          <Image src={discord} alt="discord logo" width={100} height={100} />
          <Image src={twitter} alt="twitter logo" width={100} height={100}  />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
