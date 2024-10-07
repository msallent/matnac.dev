"use client";

import { useEffect, useState } from "react";

const createDate = () => {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "America/Buenos_Aires" }));
};

export function Time() {
  const [date, setDate] = useState(createDate);

  const updateDate = (previous: Date) => {
    const current = createDate();

    if (current.getMinutes() !== previous.getMinutes()) {
      return current;
    }

    return previous;
  };

  useEffect(() => {
    const interval = setInterval(() => setDate(updateDate), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span suppressHydrationWarning>
      {`${date.getHours()}`.padStart(2, "0")}:{`${date.getMinutes()}`.padStart(2, "0")} (GMT-3)
    </span>
  );
}
