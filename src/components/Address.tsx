interface Props {
  loading: boolean;
  error: number;
  address: any;
}

const Address = ({ address, loading, error }: Props) => {
  return (
    <div
      className={`bg-white rounded-[1rem] w-full h-full shadow-md p-6  flex justify-center items-center`}
    >
      {loading && (
        <div className="flex gap-4">
          <p className="w-8 h-8 border-t-4 rounded-full border-vDarkGray animate-spin"></p>
          <p className="text-2xl font-bold text-vDarkGray animate-pulse">
            Please Wait....
          </p>
        </div>
      )}
      {!loading && error == 2 && (
        <div className="text-2xl font-bold text-center text-vDarkGray animate-bounce">
          Failed To Fetch Data
        </div>
      )}
      {!loading && error == 1 && (
        <div className="text-2xl font-bold text-center text-vDarkGray animate-bounce">
          Incorrect Domain or IP Provided{" "}
        </div>
      )}
      {!loading && error == 0 && (
        <main className="flex flex-col items-center justify-center gap-6 text-center md:justify-evenly md:gap-20 md:flex-row">
          <div>
            <h3 className="text-sm font-extrabold text-DarkGray">IP ADDRESS</h3>
            <p className="text-xl font-black">{address.ip}</p>
          </div>
          <div className="md:pl-6 md:border-l md:border-l-DarkGray">
            <h3 className="text-sm font-extrabold text-DarkGray">LOCATION</h3>
            <p className="text-xl font-black">
              {address?.location?.region || "Unknown Region"}
            </p>
          </div>
          <div className="md:pl-6 md:border-l md:border-l-DarkGray">
            <h3 className="text-sm font-extrabold text-DarkGray">TIMEZONE</h3>
            <p className="text-xl font-black">
              {address?.location?.timezone || "Unknown Timezone"}
            </p>
          </div>
          <div className="md:pl-6 md:border-l md:border-l-DarkGray">
            <h3 className="text-sm font-extrabold text-DarkGray">ISP</h3>
            <p className="text-xl font-black">{address.isp}</p>
          </div>
        </main>
      )}
    </div>
  );
};

export default Address;
