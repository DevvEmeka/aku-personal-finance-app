import DonutCharts from '../components/DonutCharts'; // Adjust path as needed

const budgetData = [
  { name: 'Savings', value: 400, color: '#277C78' },
  { name: 'Gift', value: 100, color: '#82C9D7' },
  { name: 'Concert Tickets', value: 100, color: '#626070' },
  { name: 'New Laptop', value: 200, color: '#F2CDAC' },
];

export default function Budget() {
  return (
    <div className="p-8 bg-white rounded-xl">
      <div className="flex justify-between">
        <p className="text-[#201F24] text-xl font-bold">Budgets</p>
        <div className="flex gap-3 items-center">
          <p className="text-[#98908B]">See Details</p>
          <i className="ph ph-caret-right text-[#98908B]"></i>
        </div>
      </div>

      <div className="flex gap-5 mt-5 items-center">
        {/* Pie Chart */}
        <div className="">
          <DonutCharts data={budgetData} label="Expenses" />
        </div>

        {/* Budget List */}
        <div className="w-1/2 flex flex-col gap-4">
          {budgetData.map((item) => (
            <div key={item.name} className="flex flex-col gap-2 border-l-4 pl-4" style={{ borderColor: item.color }}>
              <span className="text-xs text-[#98908B]">{item.name}</span>
              <span className="text-sm font-bold text-[#201F24]">${item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
