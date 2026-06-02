import useBalance from "../../../hooks/balance";

const Balance = () => {
  const { data } = useBalance();
  return (
    <div
      className="min-w-[12.5rem] ml-3 px-5 flex flex-col items-center justify-center relative rounded-[3.25rem] bg-balance-expo-bg border-border-menu border-[0.063rem] border-solid box-border h-[3.063rem]"
      data-v-e9e2d909
    >
      <div
        className="flex items-center text-[1rem] font-medium text-balance-expo-txt divide-x divide-border-menu"
        data-v-e9e2d909
      >
        <div
          className="relative text-[1rem] font-medium text-left pr-3"
          data-v-e9e2d909
        >
          Balance: {data?.availBalance}
        </div>
        <div
          className="relative text-[1rem] font-medium text-left pl-3 cursor-pointer"
          data-v-e9e2d909
        >
          Exposure: {data?.deductedExposure}
        </div>
      </div>
    </div>
  );
};

export default Balance;
