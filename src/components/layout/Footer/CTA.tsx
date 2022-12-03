import React from "react";
import Button from "../../shared/Button/Button";

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className="w-full flex  flex-wrap items-center justify-between bg-dark-accent px-9 py-12 md:px-12  md:py-12 rounded-md">
      <div className="space-y-2">
        <p className="text-lg md:text-3xl tracking-tight font-semibold text-dark-primary">
          Running a charity organization?
        </p>
        <p className=" text-sm md:text-base font-normal tracking-tight text-dark-primary">
          Let’s connect you to the community
        </p>
      </div>
      <div className="max-w-lg mt-4 flex items-center justify-center md:items-left md:justify-start">
        <Button variant="contained">Start Fundraising</Button>
      </div>
    </div>
  );
};

/*
//styleName: BodyText3/16/Manrope/regular;
font-family: Manrope;
font-size: 16px;
font-weight: 400;
line-height: 43px;
letter-spacing: -0.022em;
text-align: left;

 */

export default CTA;
