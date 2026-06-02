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
        {/**/}
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
            {/**/}
            <div className="block py-1 px-2">
              <h5 className="font-bold flex pt-[0.938rem] pb-[0.625rem] text-[1rem] leading-[120%] self-stretc">
                <span className="ml-1 inline-block">Tennis (14)</span>
              </h5>
              <div>
                <div className="flex justify-center">
                  <ul className="rounded-xl w-full">
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379032}
                      data-v-f4cc7685
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
                          href="/Markets/5379032/35668911"
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
                                Yu Bu v L Harris
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                01/06{" "}
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
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
                                2.12
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                2.26
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5378965}
                      data-v-f4cc7685
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
                          href="/Markets/5378965/35669811"
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
                                K Poling v Ja Friend
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                01/06{" "}
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
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
                                1.05
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                1.06
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379048}
                      data-v-f4cc7685
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
                          href="/Markets/5379048/35670061"
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
                                Bl Bicknell v Joh Monday
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                In-Play 12:50 AM
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
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
                                2.82
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                2.86
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379052}
                      data-v-f4cc7685
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
                          href="/Markets/5379052/35670066"
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
                                Searle v Krueger
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                In-Play 01:10 AM
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
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
                                1.67
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                1.69
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379051}
                      data-v-f4cc7685
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
                          href="/Markets/5379051/35670086"
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
                                Andres Martin v Bla Ellis
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                In-Play 02:20 AM
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
                                <span
                                  className="mx-1 __w-3 __h-3 __bg-[#5ebc27] rounded-full"
                                  data-v-b7f33f7c
                                >
                                  <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAjCAYAAADWtVmPAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAADPlJREFUeJzlWHlUk1cWN0hdulq7zHScLtOx4/SP6TI90zMdZ0494+kI2RNCIEhYBcEioGJFBAuCIi7gAtalglRFC2T5kpCETcIu+xICgQTCpshmWAIJ65v3Pkwaam211ZkzZ945OeL57nff+937u79737dkyf/DqjTWvHj25gUseyCf9N86QxFQvH2mLAnL68h/92c5aAXNyxNKT6QyMzhgu2SHPqtTQr013W37mM/5wNU5oSWojEpK1I2oQlamI9iLhTVXGGrWqiZbH/4MDe2tS1NbLn/mI/I1kjA6YPLYYHd2SHt6Sxq9bbp56RM8v2XldMvXJdUk1bnw3QFZSAdOfA44XZP4lfx2zq8fysH8MCCcb7ywabskuJEiZAKSkAZIGAVQ4d/h8kj1jZ78N58whiWq/tqVx28knHPOdAP2cG+KkAU2iYmAi7kZ48tPHqmarnvqJ51ktUlX75bsyWfwHQBZAIFgNEAVMABH6DaVUHM2sXS88uknDaTT0Eo435BC2op93kkWUmFGGDCgTEAW0YGvyH/oYl3y33/UgdbUtjShLCHANdN9lgwpRcKogAh/3HT3uXPKc1j+sOJXTxqEefWP9Cwr6M0N85FuM5FRMPmOeGBpMKgxxQcVZaaKlx74slQnfT04K6iJBCNAEbAhnWjwRQcQVRAjb9Q3rtHMtRHA4BABDA3bVA53vMCvF3ysGlCuehwH5xWL1iqai97oMnQS0P/B4BxBO9G9IrXpapwzbzOwE1FxMEQIiiv2Ml1SpjEe6OzYzRMsDo87Y48xADXTGdBgOt2FPiBnuMBh9vb0svnuGYJe12PTNd7y5pnGS8cCBbtGs3R8B/P7YGT0kYXg1jBYljPOWxMi3ld5UBbXWD9Q8rH5mXqsz7ZztHtNWG5E76YsIqDw2fDHhEFmgYi86K+agHr5fQ610x22u/PCrpBgYVEEjhA9C9YGE0QVx+RZ27WDXkJqw6WALdhWaEcFgeIdenmPbOOjArDsO1az7ogiuoYCg+cocAXRhYdTGwwtz1nbpDYlBzMgM4iYA2QIHRChivli2zT8XtFv73OY2S5410fg17lAKxZeXC58T1A2XLrL2u6aJmOdj2xHJ5XPAAwIxE5MB4GSoFGZTvaXtuH+R85IlCK00CETCQsV1iQDOGPexrPKFG9rmzZj87qd8pA79nAvoogEVYwOuFCWz1Vf8LnP4dfq1C9cBG4AFRYFZoIMnYZkh9a1gw4bs416tPnlxNpEHh1mjIyRoVMKoAvIgM1zA2lKLLx/8M7LjwKiqq72DQ+Bfx8VKuQmMRWvSToMUFjevrZqfekaa9v4myfiiPBMJBFSUWgroIHQnPAz7dOdNoucbssLikSFjeQOAaFDLsaXHoucGAW4Iegx2GT3F633zvLvZPLJcFMqoPGpOAWP15wUqcdVr5p9zQ9O27SNq55vnG9cixmkG74dythQPV/zRyVQ3af/V1Xpjiyh90Kvgvt+lgWjzeOaTpWeoqhHNZYMyyby1ztiXLivA6BDwPZiEvAXBdaWmipetzhrn9DYbJcHS5G8mX9O6a5A1p7znvWm59quRbDFXAiWhndbIqThTnkwqBmvesfaTt4lX51QFJ+6R7YHOGW6AsdMNvATbJvZJ4/ITmu6/kEPuEWwtj9YdrgWgaCgQMIfjccCYbn7L2pMOss4oprVvhlaEAWDx8T3J2FM4Cb27j/fdNHR4qhhtO5V70zfSmsgHmIfk26qyxLBAaOGsKcgKhYJAeIoalJUHgPE3zySp5lQr0A2c3pAKB+pXHWy/LTAGQIgY6ih0gFSHJIY0hBSKCx3X9tVTdqiIs3oytjKSmfDuoR+4UGpsKgDhTvrqo31FmlXTWqejSk9omWifiKk4/XkJvIyHSuM32NxlNMt2+gr9OuyBsISu1RYb9ZprHsxUhFVjhygTo+AMCGtztZ/5Wm2mb0LCKnNV2neYr9JOzENFwIUXWRLvLc5W8Cei1XE7mueVVm4XWuqXeOFbZlC4wiiNxH2DE/+Vt3V1ozfW5/hWMlxiZNw8wIbYJd3EXJBTO7B4xaDTPW33r4iP70ZBOIhJ8dNYe2kbabirS/yQ3R2YgoOBKmbA98J5E8W/cNsMz42aRNdfPAkDY028DkdDptILml8Bl53C4pIA19Idytrp6ot3O4fGX/GPcurAikSqk3Efw+x72S6Wrjo+pBYdOIkV+QBGcHAgaD9v8yJuvRdatv5EVuk/iY0IKJBkQmj6JvnswhIy1zlW4HyYAiEio8JyNFmvhuABbzObDM5PGMbIPVPpAgp9/jOtNQTTgf8XxrwE/t13hjNf9v8Xp9+zNZfHKhAz6m4YpIgI1zvHio89mfrMyQo4g+4izzhGWkLMyAEsj//EN9iEFtxeqOLwKNzYVMYSUgZz2yv72Wk/iV4L2m0FyP5g6mFNHHiuYDSqbL1Zpt5/YTt3oKww2TIcbQRTfAdiAVe03DJDpIENVYYy1eb31MbNU95Yf4l9sIF6acKyfAMnC5fwY63rc+QUHwiwVWMWgQVDwhdwAERuTHfWAxS1RkbPIU+OvQQHZAidARs8eYSayddhtalQZJQsT3MBB4RCJgBM5dYk2hJ/+yIweZCbQrTle81gvoRotT3gbAETuBw/pETHaYOi3IpZ1pe9pT4G9A8tSD9VOAi2qI70fj1IiAH8+MusDAOPsiiM7ChHB8tTrhqMSiZqPvETxKgRUDscaVhgS2izw3WTrqHNDbb8vZG26GswaIkQwpS4EGPyuOOWtspegpXRuaFC5iwztCEYA0EcTsgJ7hPpJN+MDMKLD0iuf7KJw6Z3IWmiAOhA7+cEJ1iunYRkP2yaDkN+kRigIBwszzBmZqzpy0GLaBrmV/WzhzUlIgilBUWcMnYDEqGSj6wdnRelbqfhbHxroocbRKTQYg0fLBptuUF9Fw73ENo71Uvk3dn/Sn6RmyenyAIB4Oi7JrpAYJlIQ1HmhL+2jc5uGxQq8cz0jvQ9fz+gvBvmDxHPGNkvE4YIFQRyWuc0z09OK7FAfdOtj7rJwtWk5FiYigwLOAs4d45XpfgZH3GJV65gZFofkJFTILRZEHHp8pO7ba2kfRJ13tm+fSi5/iID7s7K90RJDecud41p1phbasB7bbFE+XrDpTHbkgojefk9mV/qhpvegUMzSxqhtKBPH93gSeeLQTAHmaFAymTrPo6yNquRF/wnhvmjY9OSBRQgPyzt7crpr9TTXydqkzayoEzE14DuNrQQWh+WHUXuGXRe71h4JnooqNpdB4HNq4FSf2njAjc4caXKy/TW0c6Fs89P7HKa6pW7xCG6lB/IWJ0vGujBgoz15rbk/07a9ukpgun6bABo+cL0s4CUTdiMOV086KZbElybco7Hphfr72IgWs5oo073wtI2rLXWttd01z/0Fey9Q4JjRJQ3f4lZgB/cQBIKU35WDvcvijaP7Uq62tX7ZWE19N4TLwRInFwwVzA6Zqk7SPGSUtQdAOttr7ZO+spGBFXLCRIbMwJHC9P4N7nVDfa/tyBothqe3z6XRjlUarD5KGnwCDAZ54R06TNgOnW8pTm5EQuzwtmzREEYDvAJVXqZ836uucfBYR5NUw1OYVK99VTYIHToGyHFOz5tnyi1HKNNQzOExIqT25kZ3DwuiTfO5tnlmf3la4rf7jPoQEYbK5rM5LYcAQg4mAccK3ehm2dKRjI+8jatnlK9dGl+ktlvte3GYVd2CH1oOrZnwPCvMpHSj4KE4cMRkjDe/KGChZ189oZ1eqInC+rUU+iWiYPBjh4M1ahnPmBa/bsyDxBdiv7/QDJTi3+xcLSdGjwsh99rWFeudICZFy1tHq48pXk0osbm2aafhEItLQTKtv0qit/k6pFHyqNDRZZVhvVtmeVya4u8OZIFBMh9RxwUeBgm02JdWfYTWPNP1yTBv2wbWxZYiRL6AZfIOEUQ53eie9sTFamxJcOlz/zSw/9sKvbqFmRfTubHCDedQcNk/YiMmzAaHZjgrD88KKCkaIHX+LAnYllov6i97fLd9czMxc+vZDRbRBmxo3HHTpce3x7i7H5uQc6eExLO9ZB4PXIHENy9/YyePdmNtSP0PVb7D50pCr+07bxhxCWZOXlLQGy3XftIL0YvIVrpb2ICXaJw2qzVfLXniiIoX6CWq996mhh0jcsnjvsa2S806Mp2iXT2RhdGHOqfLLq4ehcfLdm5bm2VC+O0NVoD2UYqZeP1F93suqMg2Zc+x/5kK3oLdh0qCROyeJD8YGNlw6BHC2LS+Op038zMwgeXuYrTEWrDuRFZdrBlHpgvvq0plRPtaH2idPKvDSjypVVozc/2Svbr3Lgc0BgdrC+ZOym3e2xofu/Zf3YMg0Bm3pTw2txudESSTfmNzUMloPxuUdqeI9jKSaL10ZkhYny++SsuZ755XOd4JGmh/+59W9WCmvsUx2BHQAAAABJRU5ErkJggg=="
                                    className="w-[0.75rem] animate-ping absolute opacity-100"
                                    data-v-b7f33f7c
                                  />
                                </span>
                              </span>
                            </div>
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
                                1.55
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                1.57
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379160}
                      data-v-f4cc7685
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
                          href="/Markets/5379160/35668688"
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
                                Peliwo v Coulibaly
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                In-Play{" "}
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
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
                                13.50
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                16
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379162}
                      data-v-f4cc7685
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
                          href="/Markets/5379162/35668653"
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
                                Rawat v E Winter
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                In-Play{" "}
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
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
                                9.40
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                12.50
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379151}
                      data-v-f4cc7685
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
                          href="/Markets/5379151/35674526"
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
                                He Rocha v Dalla Valle
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                In-Play{" "}
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
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
                                1.52
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                1.54
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379152}
                      data-v-f4cc7685
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
                          href="/Markets/5379152/35668747"
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
                                Echargui v Chun Tseng
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                In-Play{" "}
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
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
                                8.80
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                9.40
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379117}
                      data-v-f4cc7685
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
                          href="/Markets/5379117/35668833"
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
                                Mi Damas v Dzumhur
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                In-Play{" "}
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
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
                                6.20
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                7.60
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379118}
                      data-v-f4cc7685
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
                          href="/Markets/5379118/35668878"
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
                                Se Baez v Gueymard Wayenburg
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                In-Play{" "}
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
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
                                1.42
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                1.49
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379119}
                      data-v-f4cc7685
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
                          href="/Markets/5379119/35668853"
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
                                Sanchez Izquierdo v Lu Pavlovic
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                In-Play{" "}
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
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
                                1.67
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                1.87
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379043}
                      data-v-f4cc7685
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
                          href="/Markets/5379043/35670723"
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
                                Mik Stojsavljevic v Eme Jones
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                Today{" "}
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
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
                                5.70
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                6
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="w-full mb-[0.375rem] game-list-item"
                      id={5379044}
                      data-v-f4cc7685
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
                          href="/Markets/5379044/35670728"
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
                                Ma Stoiana v Lulu Sun
                              </span>
                              <span
                                className="md:ml-4 md:pl-4 text-[0.785rem] font-medium text-[#999]"
                                data-v-b7f33f7c
                              >
                                Today{" "}
                              </span>
                            </h4>
                            <div
                              className="text-txt-black text-xs font-bold relative flex items-center mr-1"
                              data-v-b7f33f7c
                            >
                              <span
                                className="font-bold flex flex-col gap-1 items-center g-item-info min-w-5"
                                data-v-b7f33f7c
                                style={{ direction: "rtl" }}
                              >
                                {/**/}
                                <span
                                  className="mx-1 __w-3 __h-3 __bg-[#5ebc27] rounded-full"
                                  data-v-b7f33f7c
                                >
                                  <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAjCAYAAADWtVmPAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAADPlJREFUeJzlWHlUk1cWN0hdulq7zHScLtOx4/SP6TI90zMdZ0494+kI2RNCIEhYBcEioGJFBAuCIi7gAtalglRFC2T5kpCETcIu+xICgQTCpshmWAIJ65v3Pkwaam211ZkzZ945OeL57nff+937u79737dkyf/DqjTWvHj25gUseyCf9N86QxFQvH2mLAnL68h/92c5aAXNyxNKT6QyMzhgu2SHPqtTQr013W37mM/5wNU5oSWojEpK1I2oQlamI9iLhTVXGGrWqiZbH/4MDe2tS1NbLn/mI/I1kjA6YPLYYHd2SHt6Sxq9bbp56RM8v2XldMvXJdUk1bnw3QFZSAdOfA44XZP4lfx2zq8fysH8MCCcb7ywabskuJEiZAKSkAZIGAVQ4d/h8kj1jZ78N58whiWq/tqVx28knHPOdAP2cG+KkAU2iYmAi7kZ48tPHqmarnvqJ51ktUlX75bsyWfwHQBZAIFgNEAVMABH6DaVUHM2sXS88uknDaTT0Eo435BC2op93kkWUmFGGDCgTEAW0YGvyH/oYl3y33/UgdbUtjShLCHANdN9lgwpRcKogAh/3HT3uXPKc1j+sOJXTxqEefWP9Cwr6M0N85FuM5FRMPmOeGBpMKgxxQcVZaaKlx74slQnfT04K6iJBCNAEbAhnWjwRQcQVRAjb9Q3rtHMtRHA4BABDA3bVA53vMCvF3ysGlCuehwH5xWL1iqai97oMnQS0P/B4BxBO9G9IrXpapwzbzOwE1FxMEQIiiv2Ml1SpjEe6OzYzRMsDo87Y48xADXTGdBgOt2FPiBnuMBh9vb0svnuGYJe12PTNd7y5pnGS8cCBbtGs3R8B/P7YGT0kYXg1jBYljPOWxMi3ld5UBbXWD9Q8rH5mXqsz7ZztHtNWG5E76YsIqDw2fDHhEFmgYi86K+agHr5fQ610x22u/PCrpBgYVEEjhA9C9YGE0QVx+RZ27WDXkJqw6WALdhWaEcFgeIdenmPbOOjArDsO1az7ogiuoYCg+cocAXRhYdTGwwtz1nbpDYlBzMgM4iYA2QIHRChivli2zT8XtFv73OY2S5410fg17lAKxZeXC58T1A2XLrL2u6aJmOdj2xHJ5XPAAwIxE5MB4GSoFGZTvaXtuH+R85IlCK00CETCQsV1iQDOGPexrPKFG9rmzZj87qd8pA79nAvoogEVYwOuFCWz1Vf8LnP4dfq1C9cBG4AFRYFZoIMnYZkh9a1gw4bs416tPnlxNpEHh1mjIyRoVMKoAvIgM1zA2lKLLx/8M7LjwKiqq72DQ+Bfx8VKuQmMRWvSToMUFjevrZqfekaa9v4myfiiPBMJBFSUWgroIHQnPAz7dOdNoucbssLikSFjeQOAaFDLsaXHoucGAW4Iegx2GT3F633zvLvZPLJcFMqoPGpOAWP15wUqcdVr5p9zQ9O27SNq55vnG9cixmkG74dythQPV/zRyVQ3af/V1Xpjiyh90Kvgvt+lgWjzeOaTpWeoqhHNZYMyyby1ztiXLivA6BDwPZiEvAXBdaWmipetzhrn9DYbJcHS5G8mX9O6a5A1p7znvWm59quRbDFXAiWhndbIqThTnkwqBmvesfaTt4lX51QFJ+6R7YHOGW6AsdMNvATbJvZJ4/ITmu6/kEPuEWwtj9YdrgWgaCgQMIfjccCYbn7L2pMOss4oprVvhlaEAWDx8T3J2FM4Cb27j/fdNHR4qhhtO5V70zfSmsgHmIfk26qyxLBAaOGsKcgKhYJAeIoalJUHgPE3zySp5lQr0A2c3pAKB+pXHWy/LTAGQIgY6ih0gFSHJIY0hBSKCx3X9tVTdqiIs3oytjKSmfDuoR+4UGpsKgDhTvrqo31FmlXTWqejSk9omWifiKk4/XkJvIyHSuM32NxlNMt2+gr9OuyBsISu1RYb9ZprHsxUhFVjhygTo+AMCGtztZ/5Wm2mb0LCKnNV2neYr9JOzENFwIUXWRLvLc5W8Cei1XE7mueVVm4XWuqXeOFbZlC4wiiNxH2DE/+Vt3V1ozfW5/hWMlxiZNw8wIbYJd3EXJBTO7B4xaDTPW33r4iP70ZBOIhJ8dNYe2kbabirS/yQ3R2YgoOBKmbA98J5E8W/cNsMz42aRNdfPAkDY028DkdDptILml8Bl53C4pIA19Idytrp6ot3O4fGX/GPcurAikSqk3Efw+x72S6Wrjo+pBYdOIkV+QBGcHAgaD9v8yJuvRdatv5EVuk/iY0IKJBkQmj6JvnswhIy1zlW4HyYAiEio8JyNFmvhuABbzObDM5PGMbIPVPpAgp9/jOtNQTTgf8XxrwE/t13hjNf9v8Xp9+zNZfHKhAz6m4YpIgI1zvHio89mfrMyQo4g+4izzhGWkLMyAEsj//EN9iEFtxeqOLwKNzYVMYSUgZz2yv72Wk/iV4L2m0FyP5g6mFNHHiuYDSqbL1Zpt5/YTt3oKww2TIcbQRTfAdiAVe03DJDpIENVYYy1eb31MbNU95Yf4l9sIF6acKyfAMnC5fwY63rc+QUHwiwVWMWgQVDwhdwAERuTHfWAxS1RkbPIU+OvQQHZAidARs8eYSayddhtalQZJQsT3MBB4RCJgBM5dYk2hJ/+yIweZCbQrTle81gvoRotT3gbAETuBw/pETHaYOi3IpZ1pe9pT4G9A8tSD9VOAi2qI70fj1IiAH8+MusDAOPsiiM7ChHB8tTrhqMSiZqPvETxKgRUDscaVhgS2izw3WTrqHNDbb8vZG26GswaIkQwpS4EGPyuOOWtspegpXRuaFC5iwztCEYA0EcTsgJ7hPpJN+MDMKLD0iuf7KJw6Z3IWmiAOhA7+cEJ1iunYRkP2yaDkN+kRigIBwszzBmZqzpy0GLaBrmV/WzhzUlIgilBUWcMnYDEqGSj6wdnRelbqfhbHxroocbRKTQYg0fLBptuUF9Fw73ENo71Uvk3dn/Sn6RmyenyAIB4Oi7JrpAYJlIQ1HmhL+2jc5uGxQq8cz0jvQ9fz+gvBvmDxHPGNkvE4YIFQRyWuc0z09OK7FAfdOtj7rJwtWk5FiYigwLOAs4d45XpfgZH3GJV65gZFofkJFTILRZEHHp8pO7ba2kfRJ13tm+fSi5/iID7s7K90RJDecud41p1phbasB7bbFE+XrDpTHbkgojefk9mV/qhpvegUMzSxqhtKBPH93gSeeLQTAHmaFAymTrPo6yNquRF/wnhvmjY9OSBRQgPyzt7crpr9TTXydqkzayoEzE14DuNrQQWh+WHUXuGXRe71h4JnooqNpdB4HNq4FSf2njAjc4caXKy/TW0c6Fs89P7HKa6pW7xCG6lB/IWJ0vGujBgoz15rbk/07a9ukpgun6bABo+cL0s4CUTdiMOV086KZbElybco7Hphfr72IgWs5oo073wtI2rLXWttd01z/0Fey9Q4JjRJQ3f4lZgB/cQBIKU35WDvcvijaP7Uq62tX7ZWE19N4TLwRInFwwVzA6Zqk7SPGSUtQdAOttr7ZO+spGBFXLCRIbMwJHC9P4N7nVDfa/tyBothqe3z6XRjlUarD5KGnwCDAZ54R06TNgOnW8pTm5EQuzwtmzREEYDvAJVXqZ836uucfBYR5NUw1OYVK99VTYIHToGyHFOz5tnyi1HKNNQzOExIqT25kZ3DwuiTfO5tnlmf3la4rf7jPoQEYbK5rM5LYcAQg4mAccK3ehm2dKRjI+8jatnlK9dGl+ktlvte3GYVd2CH1oOrZnwPCvMpHSj4KE4cMRkjDe/KGChZ189oZ1eqInC+rUU+iWiYPBjh4M1ahnPmBa/bsyDxBdiv7/QDJTi3+xcLSdGjwsh99rWFeudICZFy1tHq48pXk0osbm2aafhEItLQTKtv0qit/k6pFHyqNDRZZVhvVtmeVya4u8OZIFBMh9RxwUeBgm02JdWfYTWPNP1yTBv2wbWxZYiRL6AZfIOEUQ53eie9sTFamxJcOlz/zSw/9sKvbqFmRfTubHCDedQcNk/YiMmzAaHZjgrD88KKCkaIHX+LAnYllov6i97fLd9czMxc+vZDRbRBmxo3HHTpce3x7i7H5uQc6eExLO9ZB4PXIHENy9/YyePdmNtSP0PVb7D50pCr+07bxhxCWZOXlLQGy3XftIL0YvIVrpb2ICXaJw2qzVfLXniiIoX6CWq996mhh0jcsnjvsa2S806Mp2iXT2RhdGHOqfLLq4ehcfLdm5bm2VC+O0NVoD2UYqZeP1F93suqMg2Zc+x/5kK3oLdh0qCROyeJD8YGNlw6BHC2LS+Op038zMwgeXuYrTEWrDuRFZdrBlHpgvvq0plRPtaH2idPKvDSjypVVozc/2Svbr3Lgc0BgdrC+ZOym3e2xofu/Zf3YMg0Bm3pTw2txudESSTfmNzUMloPxuUdqeI9jKSaL10ZkhYny++SsuZ755XOd4JGmh/+59W9WCmvsUx2BHQAAAABJRU5ErkJggg=="
                                    className="w-[0.75rem] animate-ping absolute opacity-100"
                                    data-v-b7f33f7c
                                  />
                                </span>
                              </span>
                            </div>
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
                                2.20
                              </div>
                              <div
                                className="bg-lay w-[3.125rem] h-[3.125rem] flex flex-col items-center justify-center py-[0.125rem] px-2 text-center rounded-md"
                                data-v-b7f33f7c
                              >
                                2.30
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/**/}
            {/**/}
            {/**/}
            {/**/}
            {/**/}
          </div>
          {/**/}
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
