import Image from "next/image";
import React from "react";
import phImg from "../../../asset/robert-collins-tvc5imO5pXk-unsplash(1).jpg";
import mapIcon from "../../../asset/map-pin.svg";
import Button from "../../shared/Button/Button";
import Avater1 from "../../../asset/Ellipse 3.png";
import Avater2 from "../../../asset/Ellipse 4.png";
import Avater3 from "../../../asset/Ellipse 5.png";
import Avater4 from "../../../asset/Ellipse 6.png";
type Props = {};

const Campaigns = (props: Props) => {
  return (
    <div className="contain grid grid-cols-1 md:grid-cols-2 justify-center items-center ml-6 sm:ml-32 lg:ml-12 md:ml-0   sm:gap-4  px-8 lg:gap-6 my-20 ">
      <Card/>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <div className="w-[375px] bg-light-accent3 p-4 rounded-lg  ml-0">
      <div>
        <Image className="rounded-lg" src={phImg} alt="kids" />
        <div className="py-4 space-y-4">
          <p className="text-[24px] font-medium text-light-text">
            AIDS foundation funding Africa
          </p>
          <div className="flex  text-light-text justify-between">
            <div className="flex space-x-2">
              <Image src={mapIcon} alt="icon" />
              <p>Mozambique</p>
            </div>
            <span className="bg-light-primary p-2 rounded-lg">Health Care</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex text-light-text py-8 justify-between items-center">
        <div>
          <div className="rounded-full w-12 h-12 bg-light-accent2 p-2 grid place-content-center">
            <div className="rounded-full w-10 h-10 grid place-content-center bg-light-accent3">
              30%
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <p className="bg-gradient-to-tr from-light-accent to-light-accent2 bg-clip-text text-transparent">
            Goal: $50,000
          </p>
          <p>Raised: $15, 000</p>
        </div>
        <div className="space-y-4">
          <p>Donating to this project</p>
          <div className="flex justify-end">
            <span>
              <Image src={Avater1} alt="image" />
            </span>
            <span className="-ml-3">
              {" "}
              <Image src={Avater2} alt="image" />
            </span>
            <span className="-ml-3">
              {" "}
              <Image src={Avater3} alt="image" />
            </span>
            <span className="-ml-3">
              {" "}
              <Image src={Avater4} alt="image" />
            </span>
          </div>
        </div>
      </div>
      <div className="ml-16 ">

      <Button variant="contained " >Donate</Button>
      </div>
    </div>
  );
};

export default Campaigns;
