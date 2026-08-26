import { MatchOdds } from "../../components/modules/EventDetails/MatchOdds";
import { Bookmaker } from "../../components/modules/EventDetails/Bookmaker";
import { Fancy } from "../../components/modules/EventDetails/Fancy";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetEventDetailsQuery,
  useVideoMutation,
} from "../../redux/features/events/events";
import { setPredictOdd } from "../../redux/features/events/eventSlice";

import { HorseGreyhoundEventDetails } from "../../components/modules/EventDetails/HorseGreyhoundEventDetails";
import { Settings } from "../../api";
import RightSidebar from "../../components/modules/EventDetails/RightSidebar";
import EventTab from "../../components/modules/EventDetails/EventTab";
import Score from "../../components/modules/EventDetails/Score";
import Premium from "../../components/modules/EventDetails/Premium";
import ToggleButtons from "../../components/modules/EventDetails/ToggleButtons";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const EventDetails = () => {
  const { getLanguage } = useLanguage();
  const [fancyPremiumTab, setFancyPremiumTab] = useState("");
  const [tab, setTab] = useState("market");
  const [sportsVideo, { data: iframe }] = useVideoMutation();
  const { eventTypeId, eventId } = useParams();
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    },
  );

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
      setProfit(formatNumber(1 + price / stake));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * stake),

              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });

          dispatch(setPredictOdd(currentExposure));
        }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * stake),
              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });
          dispatch(setPredictOdd(currentExposure));
        }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const matchOdds = data?.result?.filter(
    (game) =>
      game.btype === "MATCH_ODDS" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );
  const bookmaker = data?.result?.filter(
    (game) =>
      game.btype === "BOOKMAKER" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );

  const tiedMatch = data?.result?.filter(
    (game) =>
      (game.btype === "MATCH_ODDS" || game.btype === "BOOKMAKER") &&
      game?.visible == true &&
      game?.name === "tied match",
  );

  const fancy = data?.result?.filter(
    (normal) =>
      normal.btype === "FANCY" &&
      normal.tabGroupName === "Normal" &&
      normal?.visible == true,
  );
  useEffect(() => {
    const handleGetVideo = async () => {
      const payload = {
        eventTypeId: eventTypeId,
        eventId: eventId,
        type: "video",
        casinoCurrency: Settings.casino_currency,
      };
      await sportsVideo(payload).unwrap();
    };
    handleGetVideo();
  }, []);

  return (
    <div
      className="block relative w-full md:w-[calc(100%-5.625rem)] md:pl-[0.375rem] font-cera-round-pro pt-0"
      data-v-c78ea7eb
    >
      <div className="bg-page-content" data-v-8e891727 data-v-c78ea7eb>
        <div
          className="w-full flex h-full relative text-site-color"
          data-v-8e891727
        >
          <div
            className="w-full md:w-2/3 flex flex-col h-full relative"
            data-v-8e891727
          >
            <div
              className="w-full relative bg-getitem-bg h-[3.438rem] mt-2 md:mt-1 px-2 flex flex-col items-center justify-center"
              data-v-8e891727
            >
              <span
                className="w-full relative text-sm leading-[120%] text-left flex items-center justify-between md:justify-start"
                data-v-8e891727
              >
                <span
                  className="w-[calc(100%-4.7rem)] md:w-auto truncate font-bold"
                  data-v-8e891727
                >
                  {data?.result?.[0]?.eventName}
                </span>
                <span
                  className="text-3xs leading-[120%] text-[0.625rem] text-card-description text-right flex items-center w-[4.5rem] md:ml-7 md:w-auto"
                  data-v-8e891727
                >
                  {data?.result?.[0]?.openDate}
                </span>
              </span>
            </div>
            <section
              className="mt-2 w-full h-full relative flex flex-col px-3 md:px-0"
              data-v-8e891727
            >
              <EventTab setTab={setTab} tab={tab} />
              {eventTypeId == 4 && data?.iscore && tab === "score" && (
                <Score iscore={data?.iscore} />
              )}
              {data?.score && data?.score?.tracker && tab === "tv" && (
                <div className="w-full overflow-hidden h-[125px]">
                  <iframe
                    id="videoComponent"
                    className="w-full h-auto relative overflow-hidden   bg-transparent"
                    src={data?.score?.tracker}
                    width="100%"
                    allowfullscreen=""
                  ></iframe>
                </div>
              )}
              {iframe?.result?.url && data?.score?.hasVideo && tab === "tv" && (
                <iframe
                  id="videoComponent"
                  className="w-full max-h-[309px] sm:max-h-[144px] lg:max-h-[309px] relative overflow-hidden h-[55vw] md:h-[58vw] bg-transparent"
                  src={iframe?.result?.url}
                  width="100%"
                  allowfullscreen=""
                ></iframe>
              )}
              {tab !== "open-bets" && (
                <section className="w-full font-cera-round-pro" data-v-8e891727>
                  <div data-v-8e891727>
                    <div className="bets-wrap mb-10" data-v-8e891727>
                      {matchOdds?.length > 0 && <MatchOdds data={matchOdds} />}

                      {bookmaker?.length > 0 && <Bookmaker data={bookmaker} />}
                      {data && (
                        <ToggleButtons
                          data={data}
                          fancy={fancy}
                          setFancyPremiumTab={setFancyPremiumTab}
                          fancyPremiumTab={fancyPremiumTab}
                        />
                      )}
                      {data?.result?.length > 0 &&
                        fancyPremiumTab === "fancy" && (
                          <Fancy data={data?.result} />
                        )}
                      {data?.premium &&
                        data?.premium?.eventId &&
                        fancyPremiumTab === "premium" && (
                          <Premium premium={data?.premium} />
                        )}
                      {eventTypeId == 7 || eventTypeId == 4339 ? (
                        <HorseGreyhoundEventDetails data={data?.result} />
                      ) : null}
                      {tiedMatch?.length > 0 && <MatchOdds data={tiedMatch} />}
                    </div>
                  </div>
                </section>
              )}
              {tab === "open-bets" && (
                <div className="w-full pb-0" id="myTabContent" data-v-8e891727>
                  <div data-v-8e891727>
                    <section
                      className="w-full font-cera-round-pro"
                      data-v-8e891727
                    >
                      <div className="hidden" data-v-8e891727>
                        <div
                          className="px-0"
                          data-v-9bbf2986
                          data-v-8e891727
                          style={{ position: "relative" }}
                        >
                          <div className data-v-9bbf2986 />
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="mt-[0.938rem] pb-3" data-v-8e891727>
                    <div
                      className="w-full py-1 text-sm px-1 font-bold"
                      data-v-8e891727
                    >
                      {getLanguage(LanguageKey.CURRENT_BETS)}
                    </div>
                    <div className="px-1" data-v-8e891727>
                      <div className data-v-8e891727>
                        <div
                          className="text-sm my-1 p-4 bg-top-menu rounded-lg"
                          data-v-8e891727
                        >
                          {getLanguage(LanguageKey.YOU_HAVE_NO_MATCHED_BETS)}.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
