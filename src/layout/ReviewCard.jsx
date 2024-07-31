import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.240)_0px_3px_8px] transition-all">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt optio
          provident error quibusdam, modi voluptatum ad? Similique obcaecati
          voluptatibus fugit iure rem quos, atque temporibus!
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <img className="rounded-full w-1/4 " src={props.img} alt="" />
      </div>
    </div>
  );
};

export default ReviewCard;
