import Navbar from "../src/components/Navbar";
import TimezoneRecord from "../src/components/TimezoneRecord";
import { useState } from "react";
import { Record } from "../src/type";

export default function Home() {
  return (
    <div>
      <Navbar />
      <TimezoneRecord />
    </div>
  );
}
