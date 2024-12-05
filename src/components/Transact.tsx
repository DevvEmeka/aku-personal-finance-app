import { useEffect, useState } from "react";

type TransactionData = {
  id: number;
  image: string;
  title: string;
  amount: number;
  date: string;
  ok: boolean;
};
export default function Transact() {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);

  const fetchTransaction = () => {
    fetch("../data/TransactionData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        setTransactions(data);
      })
      .catch((e) => console.log("Error fetching data:", e.message));
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <div className="p-8 bg-[#FFFFFF] rounded-xl">
      <div className="flex justify-between">
        <p className="text-[#201F24] text-[20px] font-bold">Transactions</p>
        <div className="gap-3 flex items-center justify-center cursor-pointer">
          <p className="text-[#98908B]">View All</p>
          <i className="ph ph-caret-right text-[#98908B]"></i>
        </div>
      </div>
      <div className="mt-4">
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className="flex justify-between border-b-[#F2F2F2] py-5">
              <div className="flex gap-4 items-center justify-center">
                <div className=""><img className="rounded-[50%] w-10" src={transaction.image} alt="transaction image" /></div>
                <div className="text-[#201F24] font-bold text-sm">{transaction.title}</div>
              </div>
              <div className="flex gap-4 flex-col items-end">
                <p className="text-sm font-bold text-[#277C78]">{transaction.amount}</p>
                <p className="text-[#98908B] font-normal text-xs">{transaction.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
