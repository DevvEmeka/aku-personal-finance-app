import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type DonutChartProps = {
  data: { name: string; value: number; color: string }[];
  label: string;
  width?: number;
  height?: number;
  RADIAN?: number;
};

const DonutChart: React.FC<DonutChartProps> = ({
  data,
  label,
  width = 400,
  height = 400,
}) => {
  const RADIAN = Math.PI / 180;

  // Calculate total of all values
  const total = data.reduce((acc, item) => acc + item.value, 0);
  const limit = 975;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <ResponsiveContainer width={width} height={height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={84}
              outerRadius={130}
              dataKey="value"
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-[32px] font-bold text-[#201F24]">${total}</p>
          <p className="text-sm font-normal text-[#98908B]">of ${limit} limit</p>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
