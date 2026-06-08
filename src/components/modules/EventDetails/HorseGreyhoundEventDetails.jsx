import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import MobileBetSlip from "./MobileBetSlip";

export const HorseGreyhoundEventDetails = ({ data }) => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const { data: exposure } = useExposure(eventId);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { runnerId } = useSelector((state) => state.event);

  const [timeDiff, setTimeDiff] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    if (!data?.[0]?.openDate) return;

    const targetDateStr = data[0].openDate;
    const [date, time] = targetDateStr.split(" ");
    const [day, month, year] = date.split("/");
    const [hour, minute, second] = time.split(":");

    const targetDate = new Date(year, month - 1, day, hour, minute, second);

    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        const currentDate = new Date();
        const diffInMs = targetDate - currentDate;

        if (diffInMs <= 0) {
          clearInterval(interval);
          setTimeDiff({ day: 0, hour: 0, minute: 0, second: 0 });
          return;
        }

        const day = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hour = Math.floor(
          (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minute = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const second = Math.floor((diffInMs % (1000 * 60)) / 1000);

        setTimeDiff({ day, hour, minute, second });
      }, 1000);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const handleBetSlip = (betType, games, runner, price) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
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
        games?.runners?.forEach((rnr) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === rnr?.id);
          if (pnl) {
            updatedPnl.push({
              exposure: pnl?.pnl,
              id: pnl?.RunnerId,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
          } else {
            updatedPnl.push({
              exposure: 0,
              id: rnr?.id,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
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
        selectedBetName: runner?.horse_name,
        name: games.runners.map((runner) => runner.horse_name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        exposure: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
      };
      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.id));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      navigate("/login");
    }
  };

  return (
    <Fragment>
      <div className="horse-banner">
        <img
          style={{ width: "100%" }}
          src="https://g1ver.sprintstaticdata.com/v42/static/front/img/10.png"
          className="img-fluid"
        />
        <div className="horse-banner-detail">
          <div className="text-success">OPEN</div>
          {timeDiff?.day ||
          timeDiff?.hour ||
          timeDiff?.minute ||
          timeDiff?.second ? (
            <div className="horse-timer">
              <span style={{ display: "flex", gap: "5px" }}>
                {timeDiff?.day > 0 && (
                  <span>
                    {timeDiff?.day} <small>Day</small>
                  </span>
                )}
                {timeDiff?.hour > 0 && (
                  <span>
                    {timeDiff?.hour} <small>Hour</small>
                  </span>
                )}
                {timeDiff?.minute > 0 && (
                  <span>
                    {timeDiff?.minute} <small>Minutes</small>
                  </span>
                )}
                {timeDiff?.hour === 0 && timeDiff?.minute < 60 && (
                  <span>
                    {timeDiff?.second} <small>Seconds</small>
                  </span>
                )}
              </span>
              <span>Remaining</span>
            </div>
          ) : null}

          <div className="time-detail">
            <p>{data?.[0]?.eventName}</p>
            <h5>
              <span>{data?.[0]?.openDate}</span>
              <span>| {data?.[0]?.raceType}</span>
            </h5>
          </div>
        </div>
      </div>
      {data?.length > 0 &&
        data?.map((game) => {
          return (
            <div
              key={game?.id}
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
                          {game?.name?.toUpperCase()}
                        </span>
                      </span>
                    </div>
                    <div
                      className="flex justify-between items-end"
                      data-v-5b111243
                    >
                      <span
                        className="text-[0.625rem] py-1 text-start text-card-description ml-1"
                        data-v-5b111243
                      >
                        <span data-v-5b111243>
                          Min: {game?.minLiabilityPerBet}
                        </span>
                        <span className="space-x-1 mr-1" data-v-5b111243 />
                        <span data-v-5b111243>
                          Max: {game?.maxLiabilityPerBet}
                        </span>
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
                          <span data-v-5b111243>Back</span>
                        </div>
                        <div
                          className="lay h-6 leading-6 capitalize w-[3.488rem] text-center text-primary-bg bg-lay rounded"
                          data-v-5b111243
                        >
                          <span data-v-5b111243>Lay</span>
                        </div>
                      </div>
                    </div>
                  </h5>
                  <div data-v-5b111243>
                    <div className data-v-5b111243>
                      <div className="min-h-[3rem] relative" data-v-5b111243>
                        {game?.runners?.map((runner) => {
                          return (
                            <Fragment key={runner?.id}>
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
                                    {runner?.horse_name}
                                    <div
                                      className="jockey-detail sm-d-none d-md-flex"
                                      style={{ display: "flex" }}
                                    >
                                      {runner?.jocky && (
                                        <span className="jockey-detail-box">
                                          <b>Jockey:</b>
                                          <span
                                            style={{ fontWeight: "normal" }}
                                          >
                                            {runner?.jocky}
                                          </span>
                                        </span>
                                      )}
                                      {runner?.trainer && (
                                        <span className="jockey-detail-box">
                                          <b>Trainer:</b>
                                          <span
                                            style={{ fontWeight: "normal" }}
                                          >
                                            {runner?.trainer}
                                          </span>
                                        </span>
                                      )}
                                      {runner?.age && (
                                        <span className="jockey-detail-box">
                                          <b>Age:</b>
                                          <span
                                            style={{ fontWeight: "normal" }}
                                          >
                                            {runner?.age}
                                          </span>
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <div
                                    className="text-sm font-normal flex items-center gap-x-3"
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
                                        runner,
                                        runner?.lay?.[0]?.price,
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
                                      {runner?.lay?.[0]?.price}
                                    </div>
                                    <div
                                      className="text-[0.725rem] w-[3rem] truncate mx-auto"
                                      data-v-ee2b582e
                                    >
                                      {runner?.lay?.[0]?.size}
                                    </div>
                                  </a>
                                  <a
                                    onClick={() =>
                                      handleBetSlip(
                                        "back",
                                        game,
                                        runner,
                                        runner?.back?.[0]?.price,
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
                                      {runner?.back?.[0]?.price}
                                    </div>
                                    <div
                                      className="text-[0.725rem] w-[3rem] truncate mx-auto"
                                      data-v-ee2b582e
                                    >
                                      {runner?.back?.[0]?.size}
                                    </div>
                                  </a>
                                  {runner?.status === "SUSPENDED" && (
                                    <div
                                      className="suspended-overlay text-xs min-w-[7.35rem] absolute text-[#cd5c5c] bg-[#dcdcdce8] h-[3.188rem] rounded-md text-center flex flex-col justify-center"
                                      data-v-ee2b582e
                                    >
                                      <p data-v-ee2b582e>SUSPENDED</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {runner?.id === runnerId && (
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
          );
        })}
    </Fragment>
  );
};
