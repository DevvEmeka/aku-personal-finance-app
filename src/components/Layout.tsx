import SideBar from "./SideBar";
// import Headers from "./Headers";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <div className="flex w-full">
        <SideBar />
        <div className="ml-[300px]">
          {/* <Headers /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
