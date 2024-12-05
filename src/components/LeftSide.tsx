import Posts from "./Posts";
import Transact from "./Transact";

export default function LeftSide() {
  return (
    <div className="flex flex-col gap-6 w-[820px]">
      <Posts />
      <Transact />
    </div>
  );
}
