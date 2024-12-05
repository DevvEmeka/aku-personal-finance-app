export default function Posts() {
  return (
    <div className="p-[32px] bg-[#FFFFFF] rounded-xl">
      <div className="flex justify-between">
        <p className="text-[#201F24] text-[20px] font-bold">Pots</p>
        <div className="gap-3 flex items-center justify-center">
          <p className="text-[#98908B]">See Details</p>
          <i className="ph ph-caret-right text-[#98908B]"></i>
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <div className="w-[544px] flex items-center gap-4 rounded-2xl pl-5 bg-[#F8F4F0]">
          <div className="w-16 h-16">
            <i className="ph ph-tip-jar text-4xl text-[#277C78]"></i>
          </div>
          <div className="flex gap-[11px] flex-col">
            <p className="text-[#98908B] font-normal text-sm">Total Saved</p>
            <div className="text-[#201F24] text-[32px] font-bold">$850</div>
          </div>
        </div>
        <div className="w-[544px] flex flex-col gap-4 p-4 bg-[#FFFFFF]">
          <div className="flex">
            <div className="px-2 flex flex-col gap-4 border-[#277C78] border-l-4 pl-4">
              <div className="font-normal text-[#98908B] text-xs">Savings</div>
              <div className="font-bold text-sm text-[#201F24]">$159</div>
            </div>
            <div className="px-2 flex flex-col gap-4 border-[#82C9D7] border-l-4 pl-4 ml-4">
              <div className="font-normal text-[#98908B] text-xs">Git</div>
              <div className="font-bold text-sm text-[#201F24]">$40</div>
            </div>
          </div>
          <div className="flex">
            <div className="px-2 flex flex-col gap-4 border-[#626070] border-l-4 pl-4">
              <div className="font-normal text-[#98908B] text-xs">Concert Tickets</div>
              <div className="font-bold text-sm text-[#201F24]">$110</div>
            </div>
            <div className="px-2 flex flex-col gap-4 border-[#F2CDAC] border-l-4 pl-4 ml-4">
              <div className="font-normal text-[#98908B] ">New Laptop</div>
              <div className="font-bold text-sm text-[#201F24]">$10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
