import React from 'react';

const Card = ({ backgroundColor, Heading, number, description, desColor }) => {
  return (
    <div className={`p-3 flex flex-col flex-1 gap-[16px] border rounded-md`} style={{ backgroundColor: backgroundColor }}>
      <h1 className="text-[18px] leading-[28px] text-black ">{Heading}</h1>
      <p className="text-[36px] leading-[28px] text-black font-[400]">{number}</p>
      <p className={`text-[16px] leading-[24px] `} style={{ color: desColor }}>
        {description}
      </p>
    </div>
  );
};

export default Card;
