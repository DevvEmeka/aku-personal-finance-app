export default function Summary () {
  return (
    <>
      <div className="space-x-6 grid grid-cols-3">
        <div className="rounded-xl bg-[#201F24] p-6">
          <small className="font-normal text-[#FFFFFF] text-sm">
            Current Balance
          </small>
          <div className="font-bold text-[#FFFFFF] text-[32px]">$4,836.00</div>
        </div>
        <div className="rounded-xl bg-[#FFFFFF] p-6">
          <small className="font-normal text-[#98908B] text-sm">Income</small>
          <div className="font-bold text-[#201F24] text-[32px]">$3,814.25</div>
        </div>
        <div className="rounded-xl bg-[#FFFFFF] p-6">
          <small className="font-normal text-[#98908B] text-sm">Expenses</small>
          <div className="font-bold text-[#201F24] text-[32px]">$1,700</div>
        </div>
      </div>
    </>
  );
}
