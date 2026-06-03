import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useBalance from "../../../hooks/balance";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setPrice,
  setRunnerId,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { API, Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import { isBetDelay, isDelay } from "../../../utils/isBetDelay";
import { AxiosJSEncrypt } from "../../../lib/AxiosJSEncrypt";
import toast from "react-hot-toast";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";
const MobileBetSlip = ({ currentPlaceBetEvent }) => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();

  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake } = useSelector((state) => state?.event);

  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    dispatch(setPrice(parseFloat(placeBetValues?.price)));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null,
      ),
    );
    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: currentPlaceBetEvent?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: currentPlaceBetEvent?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */

  const handleOrderBets = async () => {
    setLoading(true);
    const payloadData = [
      {
        ...payload,

        nounce: uuidv4(),

        apk: closePopupForForever ? true : false,
        isbetDelay: isBetDelay(placeBetValues),
      },
    ];

    let delay = 0;

    if (isDelay(placeBetValues)) {
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 3 &&
        placeBetValues?.name?.length === 2
      ) {
        delay = 9000;
      }
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 7 &&
        placeBetValues?.name?.length === 3
      ) {
        delay = 9000;
      } else {
        delay = Settings?.bet_delay ? currentPlaceBetEvent?.betDelay * 1000 : 0;
      }
    }

    // Introduce a delay before calling the API
    setTimeout(async () => {
      try {
        // const res = await createOrder(payloadData).unwrap();
        const { data } = await AxiosJSEncrypt.post(API.order, payloadData);

        if (data?.success) {
          setLoading(false);
          refetchExposure();
          refetchBalance();
          dispatch(setRunnerId(null));
          dispatch(setPlaceBetValues(null));
          refetchCurrentBets();

          dispatch(setStake(null));
          toast.success(data?.result?.result?.placed?.[0]?.message);
        } else {
          setLoading(false);
          toast.error(
            data?.error?.status?.[0]?.description || data?.error?.errorMessage,
          );
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
      }
    }, delay);
  };

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      const bookmaker = 1 + price / 100;
      const total = bookmaker * stake - stake;

      setProfit(formatNumber(total));
    } else if (price && stake && placeBetValues?.btype === "FANCY") {
      const profit =
        (parseFloat(placeBetValues?.bottomValue) * parseFloat(stake)) /
        parseFloat(stake);
      setProfit(profit);
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const handleCancelBet = () => {
    dispatch(setRunnerId(null));
    dispatch(setPlaceBetValues(null));
    dispatch(setStake(null));
  };

  const handleButtonValue = (value) => {
    setIsCashOut(false);
    const buttonValue = Number(value);
    const prevStake = !stake ? null : Number(stake);

    if (prevStake === null) {
      dispatch(setStake(buttonValue));
    }
    if (prevStake >= 0) {
      dispatch(setStake(buttonValue + prevStake));
    }
  };
  return (
    <div
      className="md:hidden col-start-1 col-end-7 betslip relative"
      data-v-ee2b582e
    >
      {loading && (
        <div className="absolute top-0 left-0 flex flex-col gap-1 items-center justify-center w-full h-full z-20 bg-black/30 backdrop-blur-[2px]">
          <div className="relative h-[70px] w-[70px] flex items-center justify-center">
            <div className="absolute text-lg text-white"></div>
            <div className="h-[80%] w-[80%] border-4 border-white rounded-full border-dotted border-t-white border-b-oneClickLoadingSpinner border-x-oneClickLoadingSpinner animate-oneClickLoadingSpinnerAnimation" />
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <div className="text-sm font-semibold">
              Your bet is being processed...
            </div>
            <div className="text-xs text-suspendedBg">Please wait</div>
          </div>
        </div>
      )}
      <div
        className={` ${placeBetValues?.back ? "bg-blue-100" : "bg-red-100"} openbetshow border border-card-border p-1 font-cera-pro relative px-2 py-3 shadow-[0px_5px_116.6px_rgba(0,_0,_0,_0.05)] rounded-t-none rounded-b-[0.625rem] overflow-hidden mb-3 text-black`}
        data-v-3334cc92
        data-v-ee2b582e
      >
        <div className="item-title truncate text-sm" data-v-3334cc92>
          <span className="font-bold text-red-900" data-v-3334cc92 />
        </div>
        <div className="item item-pink" data-v-3334cc92>
          <div className="grid grid-cols-2 gap-2 mb-2 mt-1" data-v-3334cc92>
            <div
              className="w-full flex flex-col items-center justify-center"
              data-v-3334cc92
            >
              <label
                htmlFor="small-input"
                className="block mb-2 text-[0.725rem] font-medium text-black"
                data-v-3334cc92
              >
                ODDS:
              </label>
              <div className="relative" data-v-3334cc92>
                {!placeBetValues?.isWeak && (
                  <button
                    onClick={() => {
                      handleDecreasePrice(
                        price,
                        placeBetValues,
                        dispatch,
                        setPrice,
                      );
                      setIsCashOut(false);
                    }}
                    className="absolute w-[2.188rem] h-[2.188rem] text-white top-0 rounded-[1.875rem] bg-slate-600"
                    data-v-3334cc92
                  >
                    <svg
                      viewBox="0 0 448 512"
                      className="py-1.5 px-1.5 m-auto text-white"
                      aria-hidden="true"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      data-v-7e44f4d4
                      data-v-3334cc92
                      style={{
                        height: "26px",
                        verticalAlign: "-0.125em",
                        transformOrigin: "center center",
                        overflow: "visible",
                      }}
                    >
                      <g
                        transform="translate(224 256)"
                        transformOrigin="112 0"
                        data-v-7e44f4d4
                      >
                        <g
                          transform="translate(0,0) scale(1,1) "
                          data-v-7e44f4d4
                        >
                          <path
                            d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                            fill="currentColor"
                            transform="translate(-256 -256)"
                            data-v-7e44f4d4
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                )}

                <input
                  type="number"
                  onChange={(e) => {
                    dispatch(setPrice(e.target.value));
                    setIsCashOut(false);
                  }}
                  value={price}
                  className="w-full rounded-[1.875rem] bg-blue-cotton-ball border-search-icon-border border-[0.063rem] border-solid box-border h-[2.188rem] flex flex-row items-center justify-center py-[1.063rem] px-5 text-center text-sm text-site-color"
                  data-v-3334cc92
                />
                {!placeBetValues?.isWeak && (
                  <button
                    className="absolute w-[2.188rem] h-[2.188rem] text-white top-0 rounded-[1.875rem] bg-slate-600 right-0"
                    data-v-3334cc92
                  >
                    <svg
                      viewBox="0 0 448 512"
                      className="py-1.5 px-1.5 m-auto text-white"
                      aria-hidden="true"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      data-v-7e44f4d4
                      data-v-3334cc92
                      style={{
                        height: "26px",
                        verticalAlign: "-0.125em",
                        transformOrigin: "center center",
                        overflow: "visible",
                      }}
                    >
                      <g
                        transform="translate(224 256)"
                        transformOrigin="112 0"
                        data-v-7e44f4d4
                      >
                        <g
                          transform="translate(0,0) scale(1,1) "
                          data-v-7e44f4d4
                        >
                          <path
                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                            fill="currentColor"
                            transform="translate(-256 -256)"
                            data-v-7e44f4d4
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div
              className="w-full flex flex-col items-center justify-center"
              data-v-3334cc92
            >
              <label
                htmlFor="small-input"
                className="block mb-2 text-[0.725rem] font-medium text-black"
                data-v-3334cc92
              >
                STAKE:
              </label>
              <input
                onChange={(e) => {
                  dispatch(setStake(e.target.value));
                  setIsCashOut(false);
                }}
                type="number"
                placeholder={`Max bet: ${placeBetValues?.maxLiabilityPerBet}`}
                value={stake || ""}
                className="w-full rounded-[1.875rem] bg-blue-cotton-ball border-card-border border-[0.063rem] border-solid box-border h-[2.188rem] flex flex-row items-center justify-center py-[1.063rem] px-5 text-center text-sm text-site-color"
                data-v-3334cc92
              />
            </div>
          </div>
          <div
            className="grid grid-cols-4 gap-2 items-center my-4 text-site-color"
            data-v-3334cc92
          >
            {parseButtonValues?.slice(0, 6)?.map((button, i) => (
              <div
                key={i}
                onClick={() => handleButtonValue(button?.value)}
                className="btn-values rounded-[2.813rem] text-xs p-2.5 text-center cursor-pointer"
                data-v-3334cc92
              >
                <span data-v-3334cc92>+</span>
                {button?.value}
              </div>
            ))}
          </div>
          <div className="mt-1 flex justify-between" data-v-3334cc92>
            <button
              onClick={handleCancelBet}
              type="button"
              className="relative rounded-[2.688em] bg-[#999] w-[7.5rem] flex flex-row items-start justify-center py-[0.813rem] px-4 box-border text-center text-[0.85714rem] text-balance-expo-bg font-sf-pro"
              data-v-3334cc92
            >
              <div
                className="relative leading-[120%] inline-block shrink-0"
                data-v-3334cc92
              >
                <p className="m-0 font-medium" data-v-3334cc92>
                  Cancel
                </p>
              </div>
            </button>
            <button
              onClick={handleOrderBets}
              type="button"
              className="relative rounded-[2.688em] bg-btn-primary w-[7.5rem] flex flex-row items-start justify-center py-[0.813rem] px-4 box-border text-center text-[0.85714rem] text-white font-sf-pro"
              data-v-3334cc92
            >
              <div
                className="w-24 relative leading-[120%] inline-block shrink-0"
                data-v-3334cc92
              >
                <p
                  className="flex gap-2 items-center justify-center m-0 font-medium"
                  data-v-3334cc92
                >
                  Place Bet
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBetSlip;
