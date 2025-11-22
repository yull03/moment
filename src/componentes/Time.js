import { useEffect, useState } from "react";

const Time = () => {
  const [remain, setRemain] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-02-28T00:00:00"); // 원하는 날짜로 변경

    const intervalID = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        // 이미 날짜가 지난 경우 0으로 고정
        setRemain({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setRemain({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="time">
      D-day : {remain.days}-D {remain.hours}H {remain.minutes}M {remain.seconds}S
    </div>
  );
};

export default Time;