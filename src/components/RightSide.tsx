import Bills from "./Bills";
import Budget from "./Budget";

export default function RightSide() {
  return (
    <div className="flex flex-col gap-6 w-[680px]">
        <Budget />
        <Bills />
    </div>
  )
}
