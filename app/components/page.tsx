"use client";
import Image from "next/image";
import { useState } from "react";
import products from "../products/products";


export default function ElonNetWorth() {
  const [amount, setAmount] = useState(490000000000);

  const format = (x) => x.toLocaleString('en-US'); // 3-digit groups

  const handleOnClick = (item) => {
    const newAmount = item.price;
    setAmount(amount-newAmount);
  }

  // If you use an input that shows commas:
 
  return (
    <>
    <div className="flex flex-col items-center justify-center">
        <Image 
        src={"/elon-funny.webp"}
        width={200}
        height={200}
        alt="ElonMuskPhoto"
        className="rounded m-2 "/>
        <h1 className="font-semibold">Elon Musk's Money</h1>

      <div className="text-3xl text-green-400 font-bold bg-gray-700 rounded p-1 ">${format(amount)}</div>

    </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
      {products.map((item) => (
        <div key={item.id} onClick={handleOnClick}  className="p-4 border rounded-xl shadow-md cursor-poi">
          <image
            src={item.image}
            alt={item.name}
            width={300}
            height={200}
            className="rounded-lg"
          />
          <h2 className="text-xl cursor-pointer font-semibold mt-2">{item.name}</h2>
          <p className="text-gray-500">
            ₹{item.price.toLocaleString("en-IN")}
          </p>
        </div>
      ))}
    </div>
    </>
  );
}
