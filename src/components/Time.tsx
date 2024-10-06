"use client";

import { useEffect, useState } from "react";

export function Time() {
  const [time, setTime] = useState(new Date());

  const updateTime = (previous: Date) => {
    const current = new Date();

    if (current.getMinutes() !== previous.getMinutes()) {
      return current;
    }

    return previous;
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(updateTime), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span suppressHydrationWarning>
      {`${time.getHours()}`.padStart(2, "0")}:{`${time.getMinutes()}`.padStart(2, "0")} (GMT-3)
    </span>
  );
}
