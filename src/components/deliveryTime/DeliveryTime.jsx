import React, { useEffect, useState } from "react";
import { useDigitalClock } from '@/hooks/useDigitalClock'
import { formatDate, getNextBusinessDay } from "@/utils";

const DeliveryTime = ({title,desc}) => {
  const [resultDate, setResultDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    // Check if the current time is between 9 am and 11 pm
    const currentHour = currentDate.getHours();
    const isWorkingHours = currentHour >= 9 && currentHour <= 23;

    const newDate = getNextBusinessDay(currentDate, isWorkingHours ? 5 : 6);
    setResultDate(formatDate(newDate));
  }, []);

  const { hours, minutes } = useDigitalClock();

  return (
    <>
      <div className="border p-6 mt-8 md:max-w-[420px] shadow rounded-md text-sm">
        <div className="flex justify-between items-center">
          <h6 className="font-semibold">{title}</h6>
          <img src="/images/dpd.png" alt="icon" width={45} height={45} />
        </div>
        <p className="mt-2 max-w-[300px]">{desc}</p>
        <p className="my-1">
          Arrives
          <span className="font-semibold text-secondary"> {resultDate}</span>
        </p>
        <p>
          Order within <span className="text-secondary"> {hours}hrs {minutes}mins</span>
        </p>
      </div>
    </>
  );
};

export default DeliveryTime;
