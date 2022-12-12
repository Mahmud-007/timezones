import { useState } from "react";

interface PropsType {
  timezone: string;
}
export default function CurrentTime(props: PropsType) {
  const { timezone } = props;
  console.log({ timezone });
  const [time, setTime] = useState(",");
  const timezoneToCurrentTime = () => {
    let date = new Date();
    let strTime = date.toLocaleString("en-US", {
      timeZone: `${timezone || ","}`,
    });
    setTime(strTime.split(",")[1]);
  };
  setInterval(timezoneToCurrentTime, 1000);
  return <>{time}</>;
}
