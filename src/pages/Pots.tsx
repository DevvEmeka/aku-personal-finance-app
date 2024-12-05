import ProgressLine from "../components/ProgressLine";

const Pots = () => {
  type DashboardItem = {
    id: number;
    title: string;
    count: number;
    color: string;
  };

  const dashboardData: DashboardItem[] = [
    { id: 1, title: "Total Sales", count: 345, color: "bg-blue-500" },
    { id: 2, title: "New Users", count: 92, color: "bg-green-500" },
    { id: 3, title: "Revenue", count: 8700, color: "bg-yellow-500" },
    { id: 4, title: "Products Sold", count: 156, color: "bg-red-500" },
    // { id: 5, title: "Pending Orders", count: 18, color: "bg-purple-500" },
  ];
  return (
    <section className="p-8 max-w-[1360px]">
      <div className="min-w-[1550px] grid grid-cols-1 lg:grid-cols-2 gap-8">
        {dashboardData.map((item) => (
          <div
            key={item.id}
            className=" p-6 rounded-xl gap-8 flex flex-col bg-[#FFFFFF]"
          >
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <div className="w-4 h-4 rounded-full bg-[#277C78]"></div>
                <div>Savings</div>
              </div>
              <div>
                <i className="ph ph-dots-three"></i>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between items-center mb-[2px]">
                <div className="text-[#696868] font-normal">Total Saved</div>
                <div className="text-[#201F24] font-bold text-[32px]">
                  $159.00
                </div>
              </div>
              <div className="">
                <ProgressLine />
              </div>
              <div className="flex justify-between items-center mt-[8px]">
                <div className="text-[#696868] text-xs font-bold">7.95%</div>
                <div>Target of 2,0000</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="py-4 whitespace-nowrap px-[135px] rounded-lg bg-[#F8F4F0] text-[#201F24] text-sm font-bold">
                + Add Money
              </div>
              <div className="py-4 px-[135px] rounded-lg bg-[#F8F4F0] text-[#201F24] text-sm font-bold">
                Withdraw
              </div>
            </div>
          </div>
        ))}

        {/* <div className="w-[700px] p-6 rounded-xl gap-8 flex flex-col bg-[#FFFFFF]">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-4 h-4 rounded-full bg-[#277C78]"></div>
              <div>Savings</div>
            </div>
            <div>
              <i className="ph ph-dots-three"></i>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="text-[#696868] font-normal">Total Saved</div>
              <div className="text-[#201F24] font-bold text-[32px]">
                $159.00
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[#696868] text-xs font-bold">7.95%</div>
              <div>Target of 2,0000</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-4 rounded-lg bg-[#F8F4F0] text-[#201F24] text-sm font-bold">
              + Add Money
            </div>
            <div className="p-4 rounded-lg bg-[#F8F4F0] text-[#201F24] text-sm font-bold">
              Withdraw
            </div>
          </div>
        </div>

        <div className="w-[700px] p-6 rounded-xl gap-8 flex flex-col bg-[#FFFFFF]">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-4 h-4 rounded-full bg-[#277C78]"></div>
              <div>Savings</div>
            </div>
            <div>
              <i className="ph ph-dots-three"></i>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="text-[#696868] font-normal">Total Saved</div>
              <div className="text-[#201F24] font-bold text-[32px]">
                $159.00
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[#696868] text-xs font-bold">7.95%</div>
              <div>Target of 2,0000</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-4 rounded-lg bg-[#F8F4F0] text-[#201F24] text-sm font-bold">
              + Add Money
            </div>
            <div className="p-4 rounded-lg bg-[#F8F4F0] text-[#201F24] text-sm font-bold">
              Withdraw
            </div>
          </div>
        </div>

        <div className="w-[700px] p-6 rounded-xl gap-8 flex flex-col bg-[#FFFFFF]">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-4 h-4 rounded-full bg-[#277C78]"></div>
              <div>Savings</div>
            </div>
            <div>
              <i className="ph ph-dots-three"></i>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="text-[#696868] font-normal">Total Saved</div>
              <div className="text-[#201F24] font-bold text-[32px]">
                $159.00
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[#696868] text-xs font-bold">7.95%</div>
              <div>Target of 2,0000</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-4 rounded-lg bg-[#F8F4F0] text-[#201F24] text-sm font-bold">
              + Add Money
            </div>
            <div className="p-4 rounded-lg bg-[#F8F4F0] text-[#201F24] text-sm font-bold">
              Withdraw
            </div>
          </div>
        </div>

        <div className="w-[700px] p-6 rounded-xl gap-8 flex flex-col bg-[#FFFFFF]">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-4 h-4 rounded-full bg-[#277C78]"></div>
              <div>Savings</div>
            </div>
            <div>
              <i className="ph ph-dots-three"></i>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="text-[#696868] font-normal">Total Saved</div>
              <div className="text-[#201F24] font-bold text-[32px]">
                $159.00
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[#696868] text-xs font-bold">7.95%</div>
              <div>Target of 2,0000</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-4 rounded-lg bg-[#F8F4F0] text-[#201F24] text-sm font-bold">
              + Add Money
            </div>
            <div className="p-4 rounded-lg bg-[#F8F4F0] text-[#201F24] text-sm font-bold">
              Withdraw
            </div>
          </div>
        </div>

        

        <div className="w-[700px] p-6 rounded-xl gap-8 flex flex-col bg-[#FFFFFF]">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-4 h-4 rounded-full bg-[#277C78]"></div>
              <div>Savings</div>
            </div>
            <div>
              <i className="ph ph-dots-three"></i>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="text-[#696868] font-normal">Total Saved</div>
              <div className="text-[#201F24] font-bold text-[32px]">
                $159.00
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[#696868] text-xs font-bold" >7.95%</div>
              <div>Target of 2,0000</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-4 rounded-lg bg-[#F8F4F0] text-[#201F24] text-sm font-bold">
              + Add Money
            </div>
            <div className="p-4 rounded-lg bg-[#F8F4F0] text-[#201F24] text-sm font-bold">
              Withdraw
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Pots;
