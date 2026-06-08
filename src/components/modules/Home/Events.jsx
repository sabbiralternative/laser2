import { useLocation, useNavigate } from "react-router-dom";
import { useGroupQuery } from "../../../hooks/group";
import HorseGreyhound from "./HorseGreyhound";

const Events = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventTypeId = params.get("eventTypeId");
  const navigate = useNavigate();
  const { data } = useGroupQuery({ sportsType: Number(eventTypeId) || 0 });
  const eventName = {
    0: "In-Play",
    1: "Football",
    2: "Tennis",
    4: "Cricket",
    5: "Kabbadi",
    6: "Politics",
    7: "Horse",
    4339: "Greyhound",
  };

  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  const sortedData = data
    ? Object.entries(data)
        .filter(([, value]) => value.visible === true)
        .sort(([, a], [, b]) => {
          return b.inPlay - a.inPlay;
        })
    : [];

  return (
    <div className="block py-1 px-2">
      <h5 className="font-bold flex pt-[0.938rem] pb-[0.625rem] text-[1rem] leading-[120%] self-stretch">
        <span className="ml-1 inline-block">
          {eventName[eventTypeId]} (
          {eventTypeId != 7 && eventTypeId != 4339
            ? sortedData?.length
            : data?.[0]?.childs?.length}
          )
        </span>
      </h5>
      {(eventTypeId == 7 || eventTypeId == 4339) && data?.length > 0 && (
        <HorseGreyhound
          title={eventName[eventTypeId]}
          data={data}
          eventTypeId={eventTypeId}
        />
      )}
      {eventTypeId != 7 && eventTypeId != 4339 && (
        <div>
          <div className="flex justify-center">
            <ul className="rounded-xl w-full">
              {sortedData?.length > 0 &&
                sortedData?.map(([keys, value]) => {
                  return (
                    <li
                      onClick={() => navigateGameList(keys)}
                      key={keys}
                      className="w-full mb-[0.375rem] game-list-item"
                    >
                      <div
                        className="flex items-center gap-2 py-[0.85714rem] px-[0.75rem] shadow-[0px_5px_116.6px_rgba(0,_0,_0,_0.05)] rounded-[0.625rem] bg-getitem-bg hover:bg-hover-item hover:border hover:border-search-icon-border h-[5rem] md:h-[4.375rem]"
                        data-v-b7f33f7c
                        data-v-f4cc7685
                      >
                        <img
                          className="w-4 h-4"
                          src="/assets/star.76d1f49d.svg"
                          data-v-b7f33f7c
                        />
                        <a
                          className="flex items-center justify-between w-[calc(100%-1.75rem)] flex-1 h-[3.125rem]"
                          data-v-b7f33f7c
                        >
                          <div
                            className="min-w-0 flex flex-1 justify-between"
                            data-v-b7f33f7c
                          >
                            <h4
                              className="text-txt-black max-w-[16.625rem] flex align-middle flex-col md:flex-row md:items-center md:max-w-none md:divide-x md:divide-[#999]"
                              data-v-b7f33f7c
                            >
                              <span
                                className="tracking-wide text-sm leading-[120%] font-medium"
                                data-v-b7f33f7c
                              >
                                {value?.eventName}
                              </span>
                              {value?.inPlay === 1 && (
                                <span
                                  className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                  data-v-b7f33f7c
                                >
                                  In-Play{" "}
                                </span>
                              )}
                            </h4>
                            {value?.inPlay === 1 && (
                              <div
                                className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                                data-v-b7f33f7c
                              >
                                <span
                                  className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                  data-v-b7f33f7c
                                  style={{ direction: "rtl" }}
                                >
                                  <span
                                    className="mx-1 __w-3 __h-3 __bg-[#5ebc27] rounded-full"
                                    data-v-b7f33f7c
                                  >
                                    <img
                                      src="data:image/png;base64,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"
                                      className="w-[0.75rem] animate-ping absolute opacity-100"
                                      data-v-b7f33f7c
                                    />
                                  </span>
                                </span>
                              </div>
                            )}
                          </div>
                          <div
                            className="w-[6.625rem] flex items-end justify-end text-black"
                            data-v-b7f33f7c
                          >
                            <div
                              className="flex gap-[0.313rem] text-[1rem] font-semibold"
                              data-v-b7f33f7c
                            >
                              <div
                                className="bg-back w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                {value?.[0]?.ex?.availableToBack?.[0]?.price ||
                                  "-"}
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                {value?.[0]?.ex?.availableToLay?.[0]?.price ||
                                  "-"}
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
