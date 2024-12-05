import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Summary from "../components/Summary";

const Home = () => {
  return (
    <div className="px-10 py-8">
      <h3 className="font-bold text-[32px] text-[#201F24] mb-4">Overview</h3>
      <Summary />
      <div className="flex gap-6 mt-6 w-full">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
