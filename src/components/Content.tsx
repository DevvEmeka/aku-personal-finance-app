import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

export default function Content() {
  return (
    <div className="gap-6 flex w-full">
        <LeftSide />
        <RightSide />
    </div>
  )
}
