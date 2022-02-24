import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

function Sidebar() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className="mobile:shadow-lg desktop:shadow-none bg-secondaryBackground flex flex-col mobile:p-5 desktop:p-10">
      <div className="flex items-center mobile:justify-between desktop:justify-center">
        <h1 className="font-bold text-xl text-[#344c6c] desktop:text-center">
          Mentor<span className="text-red-500">Plus</span>
        </h1>
        <HiMenuAlt2
          onClick={() => setShow(!show)}
          className="mobile:flex desktop:hidden text-2xl cursor-pointer text-[#495e7b]"
        />
      </div>
      <div
        className={`${
          !show ? "mobile:hidden" : "mobile:flex mobile:items-center"
        } desktop:flex flex-col desktop:justify-start space-y-5 mt-5`}
      >
        <button
          onClick={() => setActive(0)}
          className={`${
            active === 0
              ? "bg-gradient-to-r from-[#b9d6ff] to-[#92bfff]"
              : "bg-[#e8f2ff]"
          }  h-14 w-36  text-[14px] font-semibold shadow-md rounded-md `}
        >
          Home
        </button>
        <button
          onClick={() => setActive(1)}
          className={`${
            active === 1
              ? "bg-gradient-to-r from-[#b9d6ff] to-[#92bfff]"
              : "bg-[#e8f2ff]"
          }  h-14 w-36  text-[14px] font-semibold shadow-md rounded-md `}
        >
          Profile
        </button>
        <button
          onClick={() => setActive(2)}
          className={`${
            active === 2
              ? "bg-gradient-to-r from-[#b9d6ff] to-[#92bfff]"
              : "bg-[#e8f2ff]"
          }  h-14 w-36  text-[14px] font-semibold shadow-md rounded-md `}
        ></button>
        <button
          onClick={() => setActive(3)}
          className={`${
            active === 3
              ? "bg-gradient-to-r from-[#b9d6ff] to-[#92bfff]"
              : "bg-[#e8f2ff]"
          }  h-14 w-36  text-[14px] font-semibold shadow-md rounded-md `}
        ></button>
        <button
          onClick={() => setActive(4)}
          className={`${
            active === 4
              ? "bg-gradient-to-r from-[#b9d6ff] to-[#92bfff]"
              : "bg-[#e8f2ff]"
          } h-14 w-36 text-[14px] font-semibold shadow-md rounded-md `}
        ></button>
      </div>
    </div>
  );
}

export default Sidebar;
