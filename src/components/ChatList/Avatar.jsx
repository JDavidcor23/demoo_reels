import React from "react";

export const Avatar = ({ image, isOnline }) => {
  return (
    <div className="w-10 h-10 mr-5 relative rounded-[50%]">
      <div className="overflow-hidden w-full h-full rounded-[50%]">
        <img src={image} alt="#" className="max-w-full object-cover" />
      </div>
    </div>
  );
};
