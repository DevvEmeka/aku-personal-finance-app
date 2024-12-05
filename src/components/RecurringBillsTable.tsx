export default function RecurringBillsTable() {
  type Bill = {
    title: string;
    dueDate: string;
    amount: number;
  };

  const bills: Bill[] = [
    {
      title: "Spark Electrity Solutions",
      dueDate: "Monthly-2nd",
      amount: 100,
    },
    {
      title: "Elevate Education",
      dueDate: "Monthly-3rd",
      amount: 200,
    },
    {
      title: "ByteWise",
      dueDate: "Monthly-4th",
      amount: 400,
    },
  ];
  return (
    <div className="mt-5">
      <table className="min-w-full">
        <thead className="">
          <tr className="text-[#696868] font-normal text-left space-x-10 text-xs font-public_sans">
            <th className="pb-4">Bill Title</th>
            <th className="">Due Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="">
          {bills.map((bill, index) => (
            <tr key={index} className="border-t border-[#F2F2F2]">
              <td className="py-5">
                <div className="flex items-center gap-2">
                  <div>Icon</div>
                  <span>{bill.title}</span>
                </div>
              </td>
              <td className="py-2">
                <div className="flex items-center gap-2">
                  {bill.dueDate}
                  <div>Icon</div>
                </div>
              </td>
              <td className="py-2"><span></span>{bill.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
