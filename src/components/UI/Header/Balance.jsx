import { LanguageKey } from "../../../const";
import useBalance from "../../../hooks/balance";
import useLanguage from "../../../hooks/use-language";

const Balance = () => {
  const { getLanguage } = useLanguage();
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
          {getLanguage(LanguageKey.BALANCE)}: {data?.availBalance}
        </div>
        <div
          className="relative text-[1rem] font-medium text-left pl-3 cursor-pointer"
          data-v-e9e2d909
        >
          {getLanguage(LanguageKey.EXPOSURE)}: {data?.deductedExposure}
        </div>
      </div>
    </div>
  );
};

export default Balance;
