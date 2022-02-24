import Sidebar from "./components/Sidebar";
import { IoMdArrowBack } from "react-icons/io";
import axios from "axios";
import { useEffect, useState } from "react";
import data from "./data.json";
import moment from "moment";

function App() {
  const [dates, setDates] = useState(data);
  const [selected, setSelected] = useState();
  const [slot, setSlot] = useState();

  return (
    <div className="flex mobile:flex-col desktop:flex-row  min-h-screen font-body">
      <Sidebar />
      <main className="flex-1">
        <div className="mobile:hidden desktop:flex h-20 border-b-2 border-gray-200"></div>
        <section className="py-8 px-16">
          <IoMdArrowBack className="text-xl mobile:hidden desktop:flex" />
          <p className="font-semibold text-xl mt-5 relative after:absolute after:bg-blue-500 after:w-12 after:h-1 after:top-10 after:left-0 after:rounded-full">
            Book Demo Session Slot
          </p>
          <div className="mt-10 font-medium">
            <p className="font-semibold text-lg">Select Date</p>
            <div className="flex items-center space-x-6 mt-5">
              {dates.map((date, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setSelected(index)}
                    className={`${
                      selected === index
                        ? "bg-[#289125] text-white shadow-lg"
                        : "bg-transparent text-black"
                    } cursor-pointer transition-all duration-150 flex flex-col items-center border-[3px] border-[#4b70a4] rounded-md py-3 px-5`}
                  >
                    <p className="text-[13.5px]">
                      {moment(date.date).format("ddd")}
                    </p>
                    <h2 className="font-bold text-lg">
                      {moment(date.date).format("D")}
                    </h2>
                    <p className="text-[13.5px]">
                      {moment(date.date).format("MMM")}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-10 font-medium">
            <p className="font-semibold text-lg">Select Slot</p>
            <div className="flex items-center space-x-5 mt-5">
              {dates[selected]?.available.map((aval, index) => (
                <div
                  key={index}
                  onClick={() => setSlot(index)}
                  className={`${
                    slot === index
                      ? "bg-[#289125] text-white shadow-lg"
                      : "bg-transparent text-black"
                  } cursor-pointer transition-all duration-150 border-[3px] border-[#4b70a4] rounded-md py-2 px-5`}
                >
                  <p>
                    {aval.hour}
                    {aval.min === 0 ? "" : `:${aval.min}`} PM - {aval.hour + 1}{" "}
                    PM
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button className="active:scale-95 transition-all duration-150 shadow-md mt-10 bg-black text-white py-3 px-5 rounded-md">
            Proceed to Pay
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
