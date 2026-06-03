import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";

import toast from "react-hot-toast";
import Ladder from "../../modals/Ladder/Ladder";
import MobileBetSlip from "./MobileBetSlip";

export const Fancy = ({ data }) => {
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true,
  );
  const [marketName, setMarketName] = useState("");
  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { runnerId } = useSelector((state) => state.event);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price, bottomValue) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (games?.status !== "OPEN") return;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId,
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
        bottomValue,
      };

      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      toast.error("Please login to place a bet.");
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (pnl, marketName) => {
    if (!pnl?.MarketId) {
      return;
    }
    setMarketName(marketName);
    const res = await getLadder({ marketId: pnl?.MarketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };
  return (
    <Fragment>
      {ladderData?.length > 0 && (
        <Ladder
          ladderData={ladderData}
          setLadderData={setLadderData}
          marketName={marketName}
        />
      )}
      {fancyData?.length > 0 && (
        <div
          className="block relative w-full m-auto font-cera-round-pro text-site-color mt-[0.938rem]"
          data-v-5b111243
          data-v-8e891727
        >
          <div className data-v-5b111243>
            <div className="block py-0 px-0" data-v-5b111243>
              <h5
                className="p-0 text-sm leading-5 font-medium market-title"
                data-v-5b111243
              >
                <div
                  className="flex justify-between items-center mb-1 bg-bg-bets-header p-[5px]"
                  data-v-5b111243
                >
                  <span
                    className="ml-1 flex flex-col font-medium"
                    data-v-5b111243
                  >
                    <span className="font-bold" data-v-5b111243>
                      Fancy
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-end" data-v-5b111243>
                  <span
                    className="text-[0.625rem] py-1 text-start text-card-description ml-1"
                    data-v-5b111243
                  >
                    <span data-v-5b111243>Min: 100</span>
                    <span className="space-x-1 mr-1" data-v-5b111243 />
                    <span data-v-5b111243>Max: 100k</span>
                    <span className="space-x-1" data-v-5b111243 />
                  </span>
                  <div
                    className="flex gap-[0.313rem] text-[0.757rem] mr-2"
                    data-v-5b111243
                  >
                    <div
                      className="back h-6 leading-6 capitalize w-[3.488rem] text-center text-primary-bg bg-back rounded"
                      data-v-5b111243
                    >
                      <span data-v-5b111243>Yes</span>
                    </div>
                    <div
                      className="lay h-6 leading-6 capitalize w-[3.488rem] text-center text-primary-bg bg-lay rounded"
                      data-v-5b111243
                    >
                      <span data-v-5b111243>No</span>
                    </div>
                  </div>
                </div>
              </h5>
              <div data-v-5b111243>
                <div className data-v-5b111243>
                  <div className="min-h-[3rem] relative" data-v-5b111243>
                    {fancyData?.map((game) => {
                      const pnl = pnlBySelection?.find(
                        (pnl) => pnl?.MarketId === game?.id,
                      );

                      return (
                        <Fragment key={game?.id}>
                          <div
                            className="flex w-full px-[0.525rem] mb-1 relative shadow-[0px_5px_116.6px_rgba(0,_0,_0,_0.05)] rounded-[0.625rem] bg-getitem-bg h-[4.1rem] text-txt-black"
                            data-v-ee2b582e
                          >
                            <div
                              className="flex flex-col justify-center gap-2 w-3/5 pl-2"
                              data-v-ee2b582e
                            >
                              <div
                                className="text-[0.9rem] font-semibold min-w-0 truncate"
                                data-v-ee2b582e
                              >
                                {game?.name}
                              </div>
                              <div
                                className="text-sm font-normal"
                                data-v-ee2b582e
                              >
                                <span className data-v-ee2b582e></span>
                              </div>
                            </div>
                            <div
                              className="flex gap-[0.313rem] items-center float-right w-2/5 relative text-black"
                              dir="rtl"
                              data-v-ee2b582e
                            >
                              <a
                                onClick={() =>
                                  handleBetSlip(
                                    "lay",
                                    game,
                                    game?.runners?.[0],
                                    game?.runners?.[0]?.lay?.[0]?.line,
                                    game?.runners?.[0]?.lay?.[0]?.price,
                                  )
                                }
                                className="flex flex-col cursor-pointer text-center justify-center w-[3.488rem] h-[3.188rem] bg-lay rounded-md"
                                data-v-ee2b582e
                              >
                                <div
                                  className="text-sm font-bold"
                                  data-v-ee2b582e
                                  style={{ fontSize: "0.875rem" }}
                                >
                                  {game?.runners?.[0]?.lay?.[0]?.line}
                                </div>
                                <div
                                  className="text-[0.725rem] w-[3rem] truncate mx-auto"
                                  data-v-ee2b582e
                                >
                                  {game?.runners?.[0]?.lay?.[0]?.price}
                                </div>
                              </a>
                              <a
                                onClick={() =>
                                  handleBetSlip(
                                    "back",
                                    game,
                                    game?.runners?.[0],
                                    game?.runners?.[0]?.back?.[0]?.line,
                                    game?.runners?.[0]?.back?.[0]?.price,
                                  )
                                }
                                className="flex flex-col cursor-pointer text-center justify-center w-[3.488rem] h-[3.188rem] bg-back rounded-md"
                                data-v-ee2b582e
                              >
                                <div
                                  className="text-sm font-bold"
                                  data-v-ee2b582e
                                  style={{ fontSize: "0.875rem" }}
                                >
                                  {game?.runners?.[0]?.back?.[0]?.line}
                                </div>
                                <div
                                  className="text-[0.725rem] w-[3rem] truncate mx-auto"
                                  data-v-ee2b582e
                                >
                                  {game?.runners?.[0]?.back?.[0]?.price}
                                </div>
                              </a>
                              {game?.status === "SUSPENDED" && (
                                <div
                                  className="suspended-overlay text-xs min-w-[7.35rem] absolute text-[#cd5c5c] bg-[#dcdcdce8] h-[3.188rem] rounded-md text-center flex flex-col justify-center"
                                  data-v-ee2b582e
                                >
                                  <p data-v-ee2b582e>SUSPENDED</p>
                                </div>
                              )}
                            </div>
                          </div>
                          {game?.id === runnerId && (
                            <MobileBetSlip currentPlaceBetEvent={game} />
                          )}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
