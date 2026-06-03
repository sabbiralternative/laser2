import { useState } from "react";
import { useIndexQuery } from "../../hooks";
import EventListTab from "../../components/modules/Home/EventListTab";
import Events from "../../components/modules/Home/Events";

const Home = () => {
  const [showMiniGamesModal, setShowMiniGamesModal] = useState(false);
  const { data: casino } = useIndexQuery({
    type: "99_casino_dashboard",
  });

  return (
    <div
      className="block relative w-full md:w-[calc(100%-5.625rem)] md:pl-[0.375rem] font-cera-round-pro pt-0"
      data-v-c78ea7eb
    >
      <div
        className="overflow-hidden whitespace-nowrap w-full text-site-color py-2 mt-2.5 bg-top-menu border-y border-card-border"
        data-v-c78ea7eb
      >
        <div className="inline-flex animate-marquee">
          <span className="mx-12 text-[0.929rem] font-semibold opacity-80">
            Welcome to LasersBook247.com !! Enjoy all sports and casino !!
          </span>
          <span className="mx-12 text-[0.929rem] font-semibold opacity-80">
            Welcome to LasersBook247.com !! Enjoy all sports and casino !!
          </span>
        </div>
      </div>
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
        <div className="w-full px-[0.625rem] overflow-hidden" data-v-d5bc6381>
          <div className="w-full py-3 overflow-hidden" data-v-d5bc6381>
            <div
              className="flex gap-3 overflow-x-auto w-screen"
              data-v-d5bc6381
            >
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cdn.tesla108.com/images/casino/hr/horsebook.jpg"
                    alt="HORSEBOOK"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cdn.tesla108.com/images/casino/hr/sportsbook.jpg"
                    alt="SportsBook"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cdn.tesla108.com/images/casino/hr/trade.jpg"
                    alt="Trade"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cdn.dreamdelhi.com/monk88/aviatorx.webp"
                    alt="Aviator X"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cdn.dreamdelhi.com/monk88/crash.webp"
                    alt="Crash"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cdn.dreamdelhi.com/monk88/diamonds.webp"
                    alt="Diamonds"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cdn.dreamdelhi.com/monk88/dice.webp"
                    alt="Dice"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cdn.dreamdelhi.com/monk88/mines.webp"
                    alt="Mines"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cdn.dreamdelhi.com/monk88/roulette.webp"
                    alt="X-Roulette"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cdn.dreamdelhi.com/monk88/hilo.webp"
                    alt="Hilo"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cdn.dreamdelhi.com/monk88/limbo.webp"
                    alt="Limbo"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cd.tesla108.com/images/casino/king/20260323/20-20_teenpatti.png"
                    alt="20-20 Teen Patti"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cd.tesla108.com/images/casino/king/20260323/lucky_7-a.png"
                    alt="Lucky7 -A"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cd.tesla108.com/images/casino/king/20260323/20-20_dragon_tiger.png"
                    alt="20-20 Drago Tiger"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cd.tesla108.com/images/casino/king/20260323/baccarat.png"
                    alt="Baccarat"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cd.tesla108.com/images/casino/king/20260323/32_cards_a.png"
                    alt="32 cards-A"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cd.tesla108.com/images/casino/king/20260323/20-20_poker_a.png"
                    alt="20-20 Poker -A"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cd.tesla108.com/images/casino/king/20260323/1_day_teenpatti.png"
                    alt="1 Day Teen Patti"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cd.tesla108.com/images/casino/king/20260323/dragon_tiger.png"
                    alt="Dragon Tiger "
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <img
                    src="https://cd.tesla108.com/images/casino/king/20260323/1_day_dragon_tiger.png"
                    alt="1 Day Dragon Tiger"
                    className="h-24 w-24 rounded-[0.625rem] object-cover"
                    data-v-4dc478d3
                  />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
              <div
                className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
                data-v-d5bc6381
              >
                <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                  <div className="placeholder" data-v-4dc478d3 />
                </div>
              </div>
            </div>
          </div>
        </div>

        <EventListTab />
        <div className="block h-full relative w-full m-auto font-cera-round-pro text-site-color">
          <div className="_min-h-[7.5rem] h-auto md:min-h-[18.75rem]">
            <Events />
            <div>
              <div className="casino-card-mini relative block min-h-[21.25rem] md:min-h-[12.75rem] md:relative md:h-auto md:overflow-y-visible">
                <div className="w-full px-3 py-3" data-v-84bdf1f4>
                  <div
                    className="tracking-wider w-full md:justify-center mb-1 text-site-color text-[0.85714rem] uppercase px-2 md:px-1 font-semibold casino-tab-title casino-tab-label bg-top-menu cursor-pointer relative rounded-[0.625rem] border-card-border border-[0.063rem] border-solid box-border h-[4.375rem] overflow-x-auto"
                    data-v-84bdf1f4
                  >
                    <div
                      className="active text-btn-primary rounded-border py-3 px-2 w-1/2 md:w-auto text-center flex flex-col items-center justify-center whitespace-nowrap"
                      data-v-84bdf1f4
                    >
                      Fun Games
                    </div>
                    <div
                      className="py-3 px-2 w-1/2 md:w-auto text-center flex flex-col items-center justify-center whitespace-nowrap"
                      data-v-84bdf1f4
                    >
                      Fast casino vr
                    </div>
                    <div
                      className="py-3 px-2 w-1/2 md:w-auto text-center flex flex-col items-center justify-center whitespace-nowrap"
                      data-v-84bdf1f4
                    >
                      King Casino
                    </div>
                    <div
                      className="py-3 px-2 w-1/2 md:w-auto text-center flex flex-col items-center justify-center whitespace-nowrap"
                      data-v-84bdf1f4
                    >
                      Aura Casino
                    </div>
                    <div
                      className="py-3 px-2 w-1/2 md:w-auto text-center flex flex-col items-center justify-center whitespace-nowrap"
                      data-v-84bdf1f4
                    >
                      Intl Casino
                    </div>
                    <div
                      className="py-3 px-2 w-1/2 md:w-auto text-center flex flex-col items-center justify-center whitespace-nowrap"
                      data-v-84bdf1f4
                    >
                      Mac Casino
                    </div>
                  </div>
                  <div className="w-full" data-v-84bdf1f4>
                    <div
                      className="mt-3 grid grid-cols-3 gap-2"
                      data-v-84bdf1f4
                      style={{
                        gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                      }}
                    >
                      <div
                        className="rounded-[0.625rem] w-full aspect-[500/299] shadow-custome overflow-hidden relative cursor-pointer"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <img
                            src="https://cdn.dreamdelhi.com/monk88/aviatorx.webp"
                            alt=""
                            className="w-full h-full block object-cover"
                            data-v-4dc478d3
                          />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[500/299] shadow-custome overflow-hidden relative cursor-pointer"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <img
                            src="https://cdn.dreamdelhi.com/monk88/crash.webp"
                            alt=""
                            className="w-full h-full block object-cover"
                            data-v-4dc478d3
                          />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[500/299] shadow-custome overflow-hidden relative cursor-pointer"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <img
                            src="https://cdn.dreamdelhi.com/monk88/diamonds.webp"
                            alt=""
                            className="w-full h-full block object-cover"
                            data-v-4dc478d3
                          />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[500/299] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[500/299] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[500/299] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[500/299] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[500/299] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                    </div>
                    <div
                      className="mt-3 grid grid-cols-3 gap-2"
                      data-v-84bdf1f4
                      style={{
                        gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                        display: "none",
                      }}
                    >
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                    </div>
                    <div
                      className="mt-3 grid grid-cols-4 gap-2"
                      data-v-84bdf1f4
                      style={{
                        gridTemplateColumns: "repeat(4, minmax(0px, 1fr))",
                        display: "none",
                      }}
                    >
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[3/4] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                    </div>
                    <div
                      className="mt-3 grid grid-cols-3 gap-2"
                      data-v-84bdf1f4
                      style={{
                        gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                        display: "none",
                      }}
                    >
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                    </div>
                    <div
                      className="mt-3 grid grid-cols-3 gap-2"
                      data-v-84bdf1f4
                      style={{
                        gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                        display: "none",
                      }}
                    >
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-[322/225] shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                    </div>
                    <div
                      className="mt-3 grid grid-cols-3 gap-2"
                      data-v-84bdf1f4
                      style={{
                        gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                        display: "none",
                      }}
                    >
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] w-full aspect-square shadow-custome overflow-hidden relative cursor-pointer skeleton"
                        data-v-84bdf1f4
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-84bdf1f4
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="casino-card-mini relative block min-h-[21.25rem] md:min-h-[12.75rem] md:relative md:h-auto md:overflow-y-visible">
                <div className="w-full px-3 py-3" data-v-e2215700>
                  <h2
                    className="font-bold flex pt-[0.938rem] pb-[0.625rem] leading-[120%] self-stretc"
                    data-v-e2215700
                  >
                    <span className="ml-1 inline-block" data-v-e2215700>
                      Game Providers
                    </span>
                  </h2>
                  <div className="w-full" data-v-e2215700>
                    <div
                      className="mt-3 cards-p grid gap-2 auto-cols-max md:!grid-rows-none"
                      data-v-e2215700
                    >
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                      <div
                        className="rounded-[0.625rem] h-[6.875rem] w-[6.875rem] shadow-custome overflow-hidden relative cursor-pointer skeleton intl-casino"
                        data-v-e2215700
                      >
                        <div
                          className="lazy-image"
                          data-v-4dc478d3
                          data-v-e2215700
                        >
                          <div className="placeholder" data-v-4dc478d3 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
