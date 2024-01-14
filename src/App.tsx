import { useEffect, useState } from "react";
import Tracker from "./components/Tracker";
import Address from "./components/Address";
import Map from "./components/Map";
import { IAddress } from "./interface";

function App() {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState(
    "https://geo.ipify.org?apiKey=at_OtcOM1OIwD9jUkBPpMlFN44sSHATw&"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(0);
  const [address, setAddress] = useState<IAddress[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.status === 200) {
          setAddress(data);
          setLoading(false);
          setError(0);
        } else {
          setLoading(false);
          if (response.status === 403) {
            setError(2);
          } else {
            setError(1);
          }
        }
      } catch (error) {
        setLoading(false);
        setError(2);
      }
    }
    fetchData();
  }, [url]);
  return (
    <div className="relative font-custom">
      <div className={`h-[45vh] sm:h-[50vh] md:h-[40vh] w-screen`}>
        <Tracker setUrl={setUrl} input={input} setInput={setInput} />
      </div>
      <div className="absolute w-[90%]  h-[22rem] min-h-fit top-[55%] sm:h-fit lg:h-[7rem] lg:w-[80%] sm:top-[90%] lg:top-[80%]  -translate-x-1/2 left-1/2">
        <Address address={address} loading={loading} error={error} />
      </div>
      <div className="h-[55vh] absolute -z-10 sm:h[50vh] md:h-[60vh] w-screen">
        <Map loading={loading} error={error} address={address} />
      </div>
    </div>
  );
}

export default App;
