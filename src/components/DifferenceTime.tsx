import { useState } from "react";

interface PropsType {
  timezone: string;
}
export default function DifferenceTime(props: PropsType) {
  const { timezone } = props;
  const [time, setTime] = useState(",");
  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }
  const getTimeDiff = (t0: number, t1: number) => {
    let milliseconds = Math.abs(t0 - t1);
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    console.log({ seconds });
    seconds = seconds % 60;
    minutes = seconds >= 30 ? minutes + 1 : minutes;
    minutes = minutes % 60;
    hours = hours % 24;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds
    )}`;
  };
  const timezoneToCurrentTime = () => {
    let date = new Date();
    let strTime = date.toLocaleString("en-US", {
      timeZone: `${timezone || ","}`,
    });
    const temp = strTime.split(",")[1];
    var r =
      (Number(temp.split(":")[0]) * 60 * 60 * 60 +
        Number(temp.split(":")[1]) * 60 +
        Number(temp.split(":")[2].split(" ")[0])) *
      1000;
    console.log("time", getTimeDiff(r, date.getTime()));

    setTime(temp);
  };
  setInterval(timezoneToCurrentTime, 1000);
  return <>{time}</>;
}
