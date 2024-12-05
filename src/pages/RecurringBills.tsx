import { useState } from "react";
import RecurringBillsTable from "../components/RecurringBillsTable";

const RecurringBills = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = ["Oldest", "A to Z", "Z to A", "Highest", "Lowest"];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <section className="p-8">
      <div className="font-bold text-[32px] text-[#201F24] mb-7">
        Recurring Bills
      </div>
      <div className="flex gap-6">
        <div className="">
          <div className="bg-[#201F24] p-6 gap-8 rounded-xl min-w-[500px]">
            <i className="ph ph-receipt text-4xl text-[#FFFFFF]"></i>
            <div className="text-xs mt-5">
              <p className="text-[#696868] font-normal text-base mb-4">
                Total Bills
              </p>
              <div className="text-[#FFFFFF] font-bold text-[32px]">
                $384.98
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-5 rounded-xl min-w-[500px] mt-6">
            <div className="text-base text-[#201F24] font-bold mb-3">
              Summary
            </div>
            <div className="flex justify-between text-xs py-3 border-b border-b-[#69686826]">
              <div className="text-[#696868] font-normal">Paid Bills</div>
              <div className="text-[#201F24] font-bold">4($190.00)</div>
            </div>
            <div className="flex justify-between text-xs py-3 border-b border-b-[#69686826]">
              <div className="text-[#696868] font-normal">Due Soon</div>
              <div className="text-[#201F24] font-bold">2($59.98.00)</div>
            </div>
            <div className="flex justify-between text-xs pt-3">
              <div className="font-normal text-[#C94736]">Due Soon</div>
              <div className="font-bold text-[#C94736]">2($59.98.00)</div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] p-8 rounded-xl min-w-[1029px]">
          <div className="flex justify-between items-center">
            <div className="relative">
              <input
                className="border border-[#98908B] py-3 px-5 text-[#98908B] font-semibold rounded-lg"
                type="text"
                placeholder="Search bills"
              />
              <i className="ph ph-magnifying-glass absolute text-xl bottom-[10px] left-[241px]"></i>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-[#696868] font-normal mt-10 text-base">Sort by</div>
              <div className="flex flex-col items-center mt-10">
                <select
                  className="border border-gray-300 rounded-md py-3 px-4 text-gray-700 bg-white focus:outline-none focus:border-[#201F24]"
                  id="dropdown"
                  value={selectedOption || ""}
                  onChange={handleChange}
                >
                  <option className="font-bold border-b border-b-gray-300" disabled>
                    Latest
                  </option>
                  {options.map((option) => (
                    <option className="border-b border-b-gray-300 " key={option} value={option}>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* {selectedOption && (
                  <p className="mt-4 text-green-600 font-medium">
                    You selected: {selectedOption}
                  </p>
                )} */}
          </div>
          <RecurringBillsTable />
        </div>
      </div>
    </section>
  );
};

export default RecurringBills;







