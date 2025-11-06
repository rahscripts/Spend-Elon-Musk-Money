"use client";
import Image from "next/image";
import { useState } from "react";
import products from "../products/products";

export default function ElonNetWorth() {
  const [amount, setAmount] = useState(490000000000);
  const [quantity, setQuantity] = useState(0);

  // format number with commas
  const format = (x) => x.toLocaleString("en-US");

  // handle buy click
  const handleBuy = (item) => {
    if (amount >= item.price) {
      setAmount((prev) => prev - quantity*item.price);
    } else {
      alert("Elon doesn’t have enough money left for that 😅");
    }
  };

  const handleSell = (item) => {
    if (amount >= item.price) {
      setAmount((prev) => prev + quantity*item.price);

    } else {
      alert("Can't sell")
    }
  }

  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-center justify-center sticky top-0 z-50 bg-yellow-400">
        <Image
          src="/elon-funny.webp"
          width={200}
          height={200}
          alt="Elon Musk"
          className="rounded m-2"
        />
        <h1 className="font-semibold mt-2 text-2xl">Elon Musk's Money</h1>

        <div className="text-3xl text-green-400 font-bold bg-gray-700  rounded p-2 mt-3 shadow-md">
          ${format(amount)}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-xl shadow-md flex flex-col items-center bg-green-500 hover:scale-105 transition"
          >
            <Image
              src='/elon-funny.webp'
              alt={item.name}
              width={250}
              height={200}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-3">{item.name}</h2>
            <p className="text-black-400 text-xl mb-3">
              ${item.price.toLocaleString("en-US")}
            </p>


            {/*buttons */}
            <div className="flex flex-row items-center justify-center">
            <button 
            onClick={() => handleSell(item)}
            className="bg-red-500 rounded-lg text-white p-2 transition font-medium cursor-pointer">
              Sell
            </button>
            <input 
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="bg-gray-300 rounded-lg items-center p-2 m-2"/>
            <button
              onClick={() => handleBuy(item)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 cursor-pointer rounded-lg shadow-md transition"
            >
              Buy
            </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
