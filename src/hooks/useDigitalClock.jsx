import { useEffect, useState } from "react";

export const useDigitalClock = () => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  function calculateRemainingTime() {
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setHours(23, 0, 0, 0); // Set target time to 11 PM

    let timeDifference = targetTime.getTime() - now.getTime();

    if (timeDifference < 0) {
      // If the target time has already passed, calculate the remaining time for the next day
      const nextDay = new Date(now);
      nextDay.setDate(now.getDate() + 1);
      nextDay.setHours(23, 0, 0, 0);

      timeDifference = nextDay.getTime() - now.getTime();
    }

    const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const remSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remSeconds,
    };
  }

  return remainingTime;
};