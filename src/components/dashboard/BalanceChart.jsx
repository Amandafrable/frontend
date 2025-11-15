import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "01", balance: 20000 },
  { day: "05", balance: 22000 },
  { day: "10", balance: 21000 },
  { day: "15", balance: 23000 },
  { day: "20", balance: 25000 },
  { day: "25", balance: 27000 },
  { day: "30", balance: 28450 },
];

export default function BalanceChart() {
  return (
    <div style={{ width: "100%", height: 180 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#2563eb" strokeWidth={2} dot={{ r: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
