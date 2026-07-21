import EventListTab from "../../components/modules/Home/EventListTab";
import Events from "../../components/modules/Home/Events";
import GameProvider from "../../components/modules/Home/GameProvider";
import Mac88 from "../../components/modules/Home/Mac88";
import TrendingCasino from "../../components/modules/Home/TrendingCasino";
import WhatsApp from "../../components/modules/Home/WhatsApp";
import { useLotusHomeLobby } from "../../hooks/lotusHomeLobby";
import useGetNotification from "../../hooks/useGetNotification";

const Home = () => {
  const { data: lotusLobby } = useLotusHomeLobby();
  const { notification } = useGetNotification();
  return (
    <div
      className="block relative w-full md:w-[calc(100%-5.625rem)] md:pl-[0.375rem] font-cera-round-pro pt-0"
      data-v-c78ea7eb
    >
      <WhatsApp />
      {notification?.length > 0 && (
        <div
          className="overflow-hidden whitespace-nowrap w-full text-site-color py-2 mt-2.5 bg-top-menu border-y border-card-border"
          data-v-c78ea7eb
        >
          <div className="inline-flex animate-marquee">
            {notification?.map((item) => (
              <span
                key={item?.id}
                className="mx-12 text-[0.929rem] font-semibold opacity-80"
              >
                {item?.text}
              </span>
            ))}
          </div>
        </div>
      )}

      <div
        className="w-full px-[0.625rem] overflow-hidden mt-4"
        data-v-6ab96bcd
        data-v-c78ea7eb
      >
        <div className="w-full pt-3 pb-2 overflow-hidden" data-v-6ab96bcd>
          <div className="flex gap-2 overflow-x-auto" data-v-6ab96bcd>
            <div
              className="h-[51px] w-[96px] cursor-pointer shrink-0 relative flex flex-col items-center justify-center"
              data-v-6ab96bcd
            >
              <div className="lazy-image" data-v-4dc478d3 data-v-6ab96bcd>
                <img
                  src="https://cd.tesla108.com/images/casino/casino-category/aura.png"
                  alt="Aura Casino"
                  className="h-24 w-24 rounded-[0.625rem] object-cover"
                  data-v-4dc478d3
                />
              </div>
            </div>
            <div
              className="h-[51px] w-[96px] cursor-pointer shrink-0 relative flex flex-col items-center justify-center"
              data-v-6ab96bcd
            >
              <div className="lazy-image" data-v-4dc478d3 data-v-6ab96bcd>
                <img
                  src="https://cd.tesla108.com/images/casino/casino-category/ezugi.png"
                  alt="Ezugi"
                  className="h-24 w-24 rounded-[0.625rem] object-cover"
                  data-v-4dc478d3
                />
              </div>
            </div>
            <div
              className="h-[51px] w-[96px] cursor-pointer shrink-0 relative flex flex-col items-center justify-center"
              data-v-6ab96bcd
            >
              <div className="lazy-image" data-v-4dc478d3 data-v-6ab96bcd>
                <img
                  src="https://cd.tesla108.com/images/casino/casino-category/royal-gaming.png"
                  alt="Royal Gaming"
                  className="h-24 w-24 rounded-[0.625rem] object-cover"
                  data-v-4dc478d3
                />
              </div>
            </div>
            <div
              className="h-[51px] w-[96px] cursor-pointer shrink-0 relative flex flex-col items-center justify-center"
              data-v-6ab96bcd
            >
              <div className="lazy-image" data-v-4dc478d3 data-v-6ab96bcd>
                <img
                  src="https://cd.tesla108.com/images/casino/casino-category/mac-casino.png"
                  alt="Mac88 Casino"
                  className="h-24 w-24 rounded-[0.625rem] object-cover"
                  data-v-4dc478d3
                />
              </div>
            </div>
            <div
              className="h-[51px] w-[96px] cursor-pointer shrink-0 relative flex flex-col items-center justify-center"
              data-v-6ab96bcd
            >
              <div className="lazy-image" data-v-4dc478d3 data-v-6ab96bcd>
                <img
                  src="https://cd.tesla108.com/images/casino/casino-category/betgames.png"
                  alt="Bet Games"
                  className="h-24 w-24 rounded-[0.625rem] object-cover"
                  data-v-4dc478d3
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-v-c78ea7eb style={{ padding: "0px !important" }}>
        <div className data-v-c78ea7eb />
      </div>
      <div className="bg-page-content" data-v-c78ea7eb>
        <Mac88 />

        <EventListTab />
        <div className="block h-full relative w-full m-auto font-cera-round-pro text-site-color">
          <div className="_min-h-[7.5rem] h-auto md:min-h-[18.75rem]">
            <Events />
            <div>
              <TrendingCasino trendingGames={lotusLobby?.trendingGames} />
              <GameProvider casinoProviders={lotusLobby?.casinoProviders} />
            </div>
          </div>

          <div className="grid grid-cols-3 py-3 px-1 text-center [&>*]:flex-shrink-0 w-full md:hidden">
            <div className="flex flex-col gap-2 text-[11px]">
              <i className="icon icon-gamcare text-2xl" />
              Gambling Support
            </div>
            <div className="flex flex-col gap-2 text-[11px]">
              <i className="icon icon-age-limit-updated text-2xl" /> Underage
              gambling is an offence
            </div>
            <div className="flex flex-col gap-2 text-[11px]">
              <i className="icon icon-restricted-territories text-2xl" />{" "}
              Restricted territories
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
