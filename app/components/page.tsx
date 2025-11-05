"use client";
import Image from "next/image";

import { useState } from "react";

export default function ElonNetWorth() {
  const [amount, setAmount] = useState(490000000000);

  const format = (x) => x.toLocaleString('en-US'); // 3-digit groups

  // If you use an input that shows commas:
  const handleChange = (e) => {
    const raw = e.target.value.replace(/,/g, "");
    const num = Number(raw);
    if (!Number.isNaN(num)) setAmount(num);
  };

  return (
    <div className="flex flex-col items-center justify-center">
        <Image 
        src={"/elon-funny.webp"}
        width={200}
        height={200}
        alt="ElonMuskPhoto"/>
        <h1>Elon Musk's Money</h1>
      <div>{format(amount)}</div>
    </div>
  );
}
