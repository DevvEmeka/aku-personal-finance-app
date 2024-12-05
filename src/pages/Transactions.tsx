import { useEffect, useState } from "react";
import TransactionTable from "../components/TransactionTable";

export default function Transactions() {
  const options = ["Oldest", "A to Z", "Z to A", "Highest", "Lowest"];

  // const handleNavChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedOption(event.target.value);
  //   // setPickedOption(event.target.value);
  // };

  type Bill = {
    id: number;
    title: string;
    transactionDate: string;
    amount: number;
    category: string;
    name: string;
  };

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [bills, setBills] = useState<Bill[]>([]);
  const [values, setValues] = useState<string>(""); //the video example that collects data from the form
  const [selectedOption, setSelectedOption] = useState<string>(""); // collects data from the select options
    // const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch("/data/TransactionBill.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setBills(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchBills();
  }, []);

  return (
    <section className="p-8">
      <div className="font-bold text-[32px] text-[#201F24] mb-7">
        Transactions
      </div>
      <div className="bg-[#FFFFFF] p-8 rounded-xl min-w-[1555px]">
        <div className="flex items-center justify-between">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input
                className="border border-[#98908B] py-3 px-5 text-[#98908B] font-semibold rounded-lg"
                type="text"
                placeholder="Search transaction"
                value={values}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setValues(event.target.value)
                }
                // onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute text-xl bottom-[10px] left-[241px]"
              >
                <i className="ph ph-magnifying-glass"></i>
              </button>
            </div>
          </form>

          {/* Sort by */}
          <div className="mb-10 flex items-center justify-center">
            <div className="ml-[200px] flex items-center gap-3">
              <div className="text-[#696868] font-normal mt-10 text-base">
                Sort by
              </div>
              <div className="flex flex-col items-center mt-10">
                <form>
                  <select
                    className="border border-gray-300 rounded-md py-3 px-4 text-gray-700 bg-white focus:outline-none focus:border-[#201F24]"
                    id="dropdown"
                    onChange={(e) => setSelectedOption(e.target.value)}
                    value={selectedOption || ""}
                    // onChange={handleNavChange}
                  >
                    <option
                      className="font-bold border-b border-b-gray-300"
                      disabled
                    >
                      Latest
                    </option>
                    {options.map((option, index) => (
                      <option
                        className="border-b border-b-gray-300 "
                        key={index}
                        value={option}
                      >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
            </div>

            {/* Category */}
            <div className="flex items-center gap-3 ml-7">
              <div className="text-[#696868] font-normal mt-10 text-base">
                Category
              </div>
              <div className="flex flex-col items-center mt-10">
                <select
                  className="border border-gray-300 rounded-md py-3 px-4 text-gray-700 bg-white focus:outline-none focus:border-[#201F24]"
                  id="dropdown"
                  // value={selectedOption || ""}
                >
                  <option
                    className="font-bold border-b border-b-gray-300"
                    disabled
                  >
                    All Transactions
                  </option>
                  {options.map((option) => (
                    <option
                      className="border-b border-b-gray-300 "
                      key={option}
                      value={option}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* {selectedOption && (
                  <p className="mt-4 text-green-600 font-medium">
                    You selected: {selectedOption}
                  </p>
                )} */}
        </div>

        {/* Bill  Table */}
        <TransactionTable
          bills={bills}
          error={error}
          values={values}
          loading={loading}
          selectedOption={selectedOption}
        />
      </div>
    </section>
  );
}
