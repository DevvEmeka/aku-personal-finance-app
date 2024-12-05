export default function Bills() {
    const billsData: Bills[] = [
      { content: "Paid Bills", amount: 1940 },
      { content: "Total Upcoming", amount: 198 },
      { content: "Due Soon", amount: 598 },
    ];
  
    type Bills = {
      content: string;
      amount: number;
    };
  
    const borderColors = [
      "#277C78", // Color for Paid Bills
      "#F2CDAC", // Color for Total Upcoming
      "#82C9D7", // Color for Due Soon
    ];
  
    return (
      <div className="p-8 bg-white rounded-xl">
        <div className="flex justify-between">
          <p className="text-[#201F24] text-xl font-bold">Budgets</p>
          <div className="flex gap-3 items-center">
            <p className="text-[#98908B]">See Details</p>
            <i className="ph ph-caret-right text-[#98908B]"></i>
          </div>
        </div>
  
        <ul className="mt-4 space-y-4">
          {billsData.map((data, index) => (
            <li key={index}>
              <div
                className={`flex justify-between items-center bg-[#F8F4F0] rounded-[4px] py-5 px-4 border-l-4`}
                style={{ borderColor: borderColors[index] }}  // Correctly applying dynamic border color
              >
                <div>{data.content}</div>
                <div>{data.amount.toFixed(2)}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  