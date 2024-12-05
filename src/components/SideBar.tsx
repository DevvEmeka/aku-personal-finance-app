import { useState } from "react";
import { Link } from "react-router-dom";
import { LinkData } from "../../public/data/linkData";
import logo_img from "/assets/Logo.png";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleClick = (index: number) => {
    setActiveLink(index);
  };

  return (
    <div className="w-[300px] rounded-r-2xl fixed left-0 top-0 z-0 h-screen border-r pt-8 pr-4 bg-[#201F24]">
      {/* logo */}
      <div className="text-[#FFFFFF] mb-2 w-full px-5 py-2 cursor-pointer">
        <img className="w-[121.45px] h-[21.76px]" src={logo_img} alt="logo" />
      </div>

      {/* List items */}
      <ul className="mt-6 pb-20 space-y-2">
        {LinkData.map((link, index: number) => (
          <li
            key={link.id}
            className={`font-medium rounded-r-lg py-2 px-5 text-[#B3B3B3]
              ${activeLink === index ? "text-[#201F24] bg-[#F8F4F0] border-l-4 border-[#277C78]" : ""}`}
          >
            <Link 
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleClick(index)}
            >
              <span className={activeLink === index ? "text-[#277C78]" : ""}>{link.icon}</span>
              <span className="text-base font-bold md:flex">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* minmise menu */}
      <div className="w-full px-6 cursor-pointer">
        <div className="flex gap-4 text-[#B3B3B3]">
          {/* bg-gradient-to-r from-indigo-500 to-violet-600 */}
          <span>
            <i className="ph ph-arrow-fat-lines-left h-6 w-6"></i>
          </span>
          <span className="font-bold text-base">Mininize Menu</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
