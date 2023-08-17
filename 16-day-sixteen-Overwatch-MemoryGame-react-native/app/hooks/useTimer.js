import { useState, useEffect } from "react";

export const useTimer = (isGameComplete) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let intervalId;

    if (!isGameComplete) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isGameComplete]);

  return timer;
};
