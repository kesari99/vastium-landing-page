import React from 'react';

const ProgressCard = ({ name, number, men, women, percentageNumber }) => {
  return (
    <div className="rounded-md p-[20px] flex flex-row  mt-5 justify-between border-[0.5px] bg-white">
      
      <div className="flex flex-col gap-[32px] p-4">
        <h1 className="text-[16px] leading-[28px] text-black">Total {name}</h1>
        <p className="text-[42px] leading-[28px] text-black font-[400]">{number}</p>

        <div className="flex flex-col sm:flex-row gap-[4px]">
          <p className="text-[#686868]">{men} Men</p>
          <p className="text-[#686868]">{women} Women</p>
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <p className="text-[#686868]">Percentage: {percentageNumber}%</p>

        <p className="bg-[#FFEFE7] p-2 rounded">{percentageNumber} Past Month</p>
      </div>

    </div>
  );
};

export default ProgressCard;
