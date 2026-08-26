import { useSelector } from "react-redux";
import BetSlip from "./BetSlip";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const RightSidebar = () => {
  const { getLanguage } = useLanguage();
  const { placeBetValues } = useSelector((state) => state.event);
  return (
    <div className="w-full md:w-1/3 hidden md:block h-full" data-v-8e891727>
      <div className="relative px-1" data-v-8e891727>
        <div className="block" data-v-8e891727>
          {!placeBetValues && (
            <div
              className="mt-2 md:mt-1 min-h-[19.688rem] bg-top-menu"
              data-v-8e891727
            >
              <div
                className="text-btn-primary flex justify-between p-4 mb-1 border-b border-card-border"
                data-v-8e891727
              >
                <h3 className="text-base font-bold capitalize" data-v-8e891727>
                  {getLanguage(LanguageKey.PLACE_BET)}
                </h3>
              </div>
              <div
                className="m-[0.625rem] bg-blue-cotton-ball rounded-md border border-jupiter flex flex-col items-center justify-center flex-1 h-[15.625rem]"
                data-v-8e891727
              >
                <div data-v-8e891727>
                  <div
                    className="w-[5.625rem] h-[5.625rem] m-auto p-[1.625rem] bg-btn-primary rounded-full"
                    data-v-8e891727
                  >
                    <img
                      className
                      src="/assets/betslipempty.95a4bb18.svg"
                      alt=""
                      data-v-8e891727
                    />
                  </div>
                  <p className="mt-3" data-v-8e891727>
                    You havent added anything here
                  </p>
                </div>
              </div>
            </div>
          )}
          {placeBetValues && <BetSlip />}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
