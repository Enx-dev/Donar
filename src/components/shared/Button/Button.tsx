import React from "react";

type Props = {
  variant: "outlined" | "contained";
  children: React.ReactNode;
};

const Button = ({ children, variant }: Props) => {
  if (variant === "outlined") {
    return (
      <div className="bg-gradient-to-r max-w-sm w-60  flex items-center justify-center  from-dark-accent to-dark-accent2 p-0.5 rounded-lg">
        <div className="text-white px-7 py-3 rounded-md">
          <button className="bg-gradient-to-r text-center text-text from-dark-accent to-dark-accent2 bg-clip-text text-transparent text-white">
            {children}
          </button>
        </div>
      </div>
    );
  }
  return (
    <button
      className="
       px-4 md:px-6 py-4 w-full md:py-4 text-center rounded-md font-semibold text-sm md:text-text text-dark-primary bg-gradient-to-r text-text from-dark-accent  to-dark-accent2">

      {children}
    </button>
  );
};

export default Button;
