import React from "react";

const OurServiceCard = ({ title, icon, des }) => {
  return (
    <div>
      <p className=" text-black">{title}</p>
      <img src={icon} alt="" />
      <p>{des}</p>
    </div>
  );
};

export default OurServiceCard;
