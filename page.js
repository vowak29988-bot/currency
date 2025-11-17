'use client'
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center">Currency Calculator</h1>

      <div className="flex flex-col space-y-2">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="p-2 rounded-xl border dark:border-gray-700"
        />
        <input
          type="number"
          placeholder="Rate (example: 1300)"
          value={rate}
          onChange={e => setRate(e.target.value)}
          className="p-2 rounded-xl border dark:border-gray-700"
        />

        <button
          onClick={() => setResult(amount && rate ? amount * rate : null)}
          className="p-3 bg-blue-500 text-white rounded-2xl shadow-lg"
        >
          Convert
        </button>
      </div>

      {result !== null && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl text-center text-xl font-semibold">
          Result: {result}
        </div>
      )}
    </div>
  );
}
