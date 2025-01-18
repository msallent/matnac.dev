import { useEffect, useState } from "react";
import { formatInTimeZone } from "date-fns-tz";

export function Time() {
  const [date, setDate] = useState<string>();

  const createDate = () => {
    return formatInTimeZone(new Date(), "America/Buenos_Aires", "HH:mm");
  };

  useEffect(() => {
    const interval = setInterval(() => setDate(createDate), 1000);
    return () => clearInterval(interval);
  }, []);

  return <span suppressHydrationWarning>{date || "--:--"} (GMT-3)</span>;
}
