import React from "react";

const ContactHeader = () => {
  return (
    <div className="w-full font-[Nunito]">
      <div
        className="w-full grid grid-cols-1 bg-cover bg-no-repeat bg-center h-[300px] lg:h-[500px]"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/HoneyJoe/freewill%20technologies%20assetss/young-stylish-asian-woman-talking-phone-calling-friend-smiling-standing-with-smartphone-again.jpg?updatedAt=1744995334715')",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full bg-black/50 text-white text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            Contact
          </h2>
          <p className="text-base md:text-lg mt-2 text-white/80">
            <span className="text-secondary font-medium">Home</span> / Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
