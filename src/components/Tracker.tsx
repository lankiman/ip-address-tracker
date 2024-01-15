import { useState } from "react";
import searchArrow from "../assets/images/icon-arrow.svg";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}

const Tracker = ({ input, setInput, setUrl }: Props) => {
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      alert("Please Fill Search Feild");
      setFormError(true);
    } else {
      setFormError(false);
      // setUrl(
      //   `/api/v2/country,city?apiKey=at_OtcOM1OIwD9jUkBPpMlFN44sSHATw&iPAddress=${input}&domain=${input}`
      // );
      setUrl(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_OtcOM1OIwD9jUkBPpMlFN44sSHATw&iPAddress=${input}&domain=${input}`
      );
      setInput("");
    }
  };

  return (
    <div className="w-full h-full pt-6 bg-center bg-no-repeat bg-cover lg:p-10 bg-mobile lg:bg-desktop ">
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-full top-[2.5rem]  md:top-6 lg:top-10 flex flex-col gap-6 lg:gap-10 items-center`}
      >
        <h1 className="text-3xl font-semibold text-white">
          IP Address Tracker
        </h1>
        <form
          onSubmit={handleSubmit}
          className={`w-[90%] lg:w-1/3 h-[3rem] flex justify-evenly bg-white rounded-xl ${
            formError ? " outline outline-red-600" : "outline-none"
          }`}
        >
          <input
            type="text"
            name="ip_search"
            id="input_bar"
            value={input}
            autoComplete="off"
            onChange={(e) => {
              setInput(e.target.value);
              setFormError(false);
            }}
            placeholder="Search For any IP Address or Domain"
            className="w-[85%] text-[18px] text-vDarkGray font-bold placeholder:text-DarkGray  placeholder:text-sm placeholder:font-semibold p-4 h-full bg-transparent outline-none border-none"
          />
          <button className="w-[15%] cursor-pointer h-full rounded-r-xl bg-black">
            <img className="w-5 h-5 m-auto" src={searchArrow} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tracker;
