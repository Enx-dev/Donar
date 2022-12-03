import React from "react";
import Button from "../../shared/Button/Button";
import sectionImg from "../../../asset/donate.png";
import Image from "next/image";

type Props = {};

const Donate = (props: Props) => {
  return (
    <section className="contain my-20 grid grid-cols-1  md:grid-cols-2 items-center justify-between">
      <div className="w-full">
        <Image src={sectionImg} className="scale-75 md:scale-75  lg:scale-80" alt="img" />
      </div>
      <div className="text-light-text w-full flex justify-center">
        <div className="max-w-sm mt-2 md:mt-0 scale-75 md:scale-90 lg:scale-100 ">
          <h1 className="text-[36px] mb-4 leading-[42px]">
            Reaching out to communities in need
          </h1>
          <p className="text-text text-light-text/90 mb-8 leading-8 ">
            We connect organizations with people who want to lend a hand. Help
            grant life-changing wishes for children with critical illnesses.
            During this uncertain time, more children need your help. Lend a
            hand, and earn rewards while at it.
          </p>
          <div className="max-w-sm">
            <Button variant="contained">Donate</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
