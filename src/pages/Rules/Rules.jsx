import { useState } from "react";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const ArrowDown = () => {
  return (
    <svg
      viewBox="0 0 448 512"
      className
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      data-v-7e44f4d4
      data-v-f9e469a6
      style={{
        height: "1em",
        verticalAlign: "-0.125em",
        transformOrigin: "center center",
        overflow: "visible",
      }}
    >
      <g transform="translate(224 256)" transformOrigin="112 0" data-v-7e44f4d4>
        <g transform="translate(0,0) scale(1,1) " data-v-7e44f4d4>
          <path
            d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
            fill="currentColor"
            transform="translate(-256 -256)"
            data-v-7e44f4d4
          />
        </g>
      </g>
    </svg>
  );
};
const ArrowUp = () => {
  return (
    <svg
      viewBox="0 0 448 512"
      className
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      data-v-7e44f4d4
      data-v-f9e469a6
      style={{
        height: "1em",
        verticalAlign: "-0.125em",
        transformOrigin: "center center",
        overflow: "visible",
      }}
    >
      <g transform="translate(224 256)" transformOrigin="112 0" data-v-7e44f4d4>
        <g transform="translate(0,0) scale(1,1) " data-v-7e44f4d4>
          <path
            d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
            fill="currentColor"
            transform="translate(-256 -256)"
            data-v-7e44f4d4
          />
        </g>
      </g>
    </svg>
  );
};

const Rules = () => {
  const { getLanguage } = useLanguage();
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    if (i === index) {
      setIndex(null);
    } else {
      setIndex(i);
    }
  };
  return (
    <div
      className="block relative w-full md:w-[calc(100%-5.625rem)] md:pl-[0.375rem] font-cera-round-pro pt-0"
      data-v-c78ea7eb
    >
      <div className="bg-page-content" data-v-5b48a53d data-v-c78ea7eb>
        <div
          className="w-full relative bg-getitem-bg h-[3.125rem] my-1 px-3 flex items-center text-[1.1rem] font-bold"
          data-v-5b48a53d
        >
          {getLanguage(LanguageKey.RULES)}
        </div>
        <div
          className="p-3 bg-ghost-white border border-jupiter rounded-md mx-3 md:mx-0 text-rule"
          data-v-5b48a53d
        >
          <div className="text-sm my-1" data-v-f9e469a6 data-v-5b48a53d>
            <div className="border-b border-in-dark py-1" data-v-f9e469a6>
              <a
                onClick={() => handleClick(0)}
                className="py-1 px-1 text-base leading-6 font-bold flex justify-between"
                data-v-f9e469a6
              >
                <span
                  className="ml-1 inline-block capitalize cursor-pointer font-black"
                  data-v-f9e469a6
                >
                  football fancy
                </span>
                <span
                  className="flex items-center justify-center w-6 h-6"
                  data-v-f9e469a6
                >
                  {index === 0 ? <ArrowDown /> : <ArrowUp />}
                </span>
              </a>
            </div>
            <div
              data-v-f9e469a6
              style={{ display: index === 0 ? "block" : "none" }}
            >
              <table
                style={{ color: "#a8a8a8" }}
                className="table"
                data-v-5b48a53d
              >
                <tbody data-v-5b48a53d>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Tournament Total Goals, Team Total Goals goals.scored in
                        90 minutes or in extra-time will count.Goals scored in
                        penalty shootouts do not count.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Tournament Corners - Only corners taken in 90 minutes
                        count.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Tournament Penalties Missed/Converted - Penalties taken
                        in 90 minutes, extra-time and penalty shootouts all
                        count. If a penalty has to be re-taken the previous
                        disallowed penalty(ies) do not count.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Match Odds: - All bets apply to the relevant full
                        regular time period including stoppage time. Any
                        extra-time and/or penalty shoot-out is not included. For
                        the cancellation of a goal, due to VAR, bets matched
                        between the time of the goal being scored and the time
                        at which the video assistant referee finishes the review
                        will be voided. For the cancellation of a red card, due
                        to VAR, bets matched after the time at which the video
                        assistant referee commences the review will be voided.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Corners Number/Odds: - How many corners will be taken in
                        the match? Only corners that are taken will be counted.
                        All bets apply to Full Time according to the match
                        officials, plus any stoppage time. Extra-time/penalty
                        shoot-outs are not included.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-sm my-1" data-v-f9e469a6 data-v-5b48a53d>
            <div className="border-b border-in-dark py-1" data-v-f9e469a6>
              <a
                onClick={() => handleClick(1)}
                className="py-1 px-1 text-base leading-6 font-bold flex justify-between"
                data-v-f9e469a6
              >
                <span
                  className="ml-1 inline-block capitalize cursor-pointer font-black"
                  data-v-f9e469a6
                >
                  Table Tennis
                </span>
                <span
                  className="flex items-center justify-center w-6 h-6"
                  data-v-f9e469a6
                >
                  {index === 1 ? <ArrowDown /> : <ArrowUp />}
                </span>
              </a>
            </div>
            <div
              data-v-f9e469a6
              style={{ display: index === 1 ? "block" : "none" }}
            >
              <table
                style={{ color: "#a8a8a8" }}
                className="table table-bordered"
                data-v-5b48a53d
              >
                <tbody data-v-5b48a53d>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Match odds: -Predict which player will win the match. In
                        the event of any of the named players in a match
                        changing before the match starts then all bets are void.
                        In the event of a match starting but not being
                        completed, all bets will be void.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Set Winner: - The specified set must be completed for
                        bets to stand unless the specific market outcome is
                        already determined.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Under / Over Points: -For example, a game is abandoned
                        at 9-7: bets on Over/Under 16.5 Game - Total Points are
                        settled as winners/losers respectively, since any
                        natural conclusion to the game would have yielded at
                        least 18 points.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-sm my-1" data-v-f9e469a6 data-v-5b48a53d>
            <div className="border-b border-in-dark py-1" data-v-f9e469a6>
              <a
                onClick={() => handleClick(2)}
                className="py-1 px-1 text-base leading-6 font-bold flex justify-between"
                data-v-f9e469a6
              >
                <span
                  className="ml-1 inline-block capitalize cursor-pointer font-black"
                  data-v-f9e469a6
                >
                  Basketball
                </span>
                <span
                  className="flex items-center justify-center w-6 h-6"
                  data-v-f9e469a6
                >
                  {index === 2 ? <ArrowDown /> : <ArrowUp />}
                </span>
              </a>
            </div>
            <div
              data-v-f9e469a6
              style={{ display: index === 2 ? "block" : "none" }}
            >
              <table
                style={{ color: "#a8a8a8" }}
                className="table table-bordered"
                data-v-5b48a53d
              >
                <tbody data-v-5b48a53d>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Match Odds :- Predict which team will be the winner.
                        There must be 5 minutes or less of scheduled game time
                        left for bets to have action.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Quarter Winner :- The quarter must be completed for bets
                        to have action, unless settlement of bets is already
                        determined.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1st Half Winner / 2nd Half Winner :- The first half must
                        be completed for first half bets to stand. If a game is
                        postponed or cancelled after the start, for game and
                        second half bets there must be 5 minutes or less
                        remaining for bets to have action, unless settlement of
                        bets is already determined. (Including Overtime if
                        played.)
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Highest Scoring Half :- Predict in which half most
                        points will be scored. OT is not included in 2nd Half.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-sm my-1" data-v-f9e469a6 data-v-5b48a53d>
            <div className="border-b border-in-dark py-1" data-v-f9e469a6>
              <a
                onClick={() => handleClick(3)}
                className="py-1 px-1 text-base leading-6 font-bold flex justify-between"
                data-v-f9e469a6
              >
                <span
                  className="ml-1 inline-block capitalize cursor-pointer font-black"
                  data-v-f9e469a6
                >
                  Bookmaker
                </span>
                <span
                  className="flex items-center justify-center w-6 h-6"
                  data-v-f9e469a6
                >
                  {index === 3 ? <ArrowDown /> : <ArrowUp />}
                </span>
              </a>
            </div>
            <div
              data-v-f9e469a6
              style={{ display: index === 3 ? "block" : "none" }}
            >
              <table
                style={{ color: "#a8a8a8" }}
                className="table table-bordered"
                data-v-5b48a53d
              >
                <tbody data-v-5b48a53d>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Due to any reason any team will be getting advantage or
                        disadvantage we are not concerned.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Company reserves the right to suspend/void any id/bets
                        if the same is found to be illegitimate. For example
                        incase of vpn/robot-use/multiple entry from same IP/
                        multiple bets at the same time (Punching) and others.
                        Note : only winning bets will be voided.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        rules.we_will_simply_odi
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        rules.we_will_simply_t20
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Any query about the result or rates should be contacted
                        within 7 days of the specific event, the same will not
                        be considered valid post 7 days from the event
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        If two team ends up with equal points, then result will
                        be given based on the official point table
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Tennis:- Advance fancy market
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        If the second set is not completed all bets regarding
                        this market will be voided
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        If a player retires after completion of second set, then
                        the market will be settled as three sets
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Virtual Cricket
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        At any situation if the video gets interrupted/stopped
                        then the same cannot be continued due to any technical
                        issues bookmaker market will be voided
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-sm my-1" data-v-f9e469a6 data-v-5b48a53d>
            <div className="border-b border-in-dark py-1" data-v-f9e469a6>
              <a
                onClick={() => handleClick(4)}
                className="py-1 px-1 text-base leading-6 font-bold flex justify-between"
                data-v-f9e469a6
              >
                <span
                  className="ml-1 inline-block capitalize cursor-pointer font-black"
                  data-v-f9e469a6
                >
                  Football
                </span>
                <span
                  className="flex items-center justify-center w-6 h-6"
                  data-v-f9e469a6
                >
                  {index === 4 ? <ArrowDown /> : <ArrowUp />}
                </span>
              </a>
            </div>
            <div
              data-v-f9e469a6
              style={{ display: index === 4 ? "block" : "none" }}
            >
              <table
                style={{ color: "#a8a8a8" }}
                className="table table-bordered"
                data-v-5b48a53d
              >
                <tbody data-v-5b48a53d>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Bookmaker
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        If the match will not take place within 48 hours of the
                        original kick-off time bets will be void.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        rules.original_kickoff_multiple
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        If the selection is in a multiple bet or accumulator any
                        refund must be requested before the kick-off of the
                        first leg of the multiple bets.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Where a confirmed postponed match features as part of a
                        multiple bet, the bet will stand on the remaining
                        selections in the multiple.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Please note that games that have their kick-off altered
                        well in advance to accommodate live TV, or to ease
                        fixture congestion will not be classed as postponed.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        If a match is forfeited or a team is given a walkover
                        victory without the match having kicked off, then all
                        bets will be void. Any subsequently awarded scoreline
                        will not count for settlement purposes.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Fancy
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Tournament Total Goals, Team Total Goals FT: -. scored
                        in 90 minutes or extra time will count.Goals scored in
                        penalty shootouts do not count.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Tournament Corners - Only corners taken in 90 minutes
                        count.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Tournament Penalties Missed/Converted - Penalties taken
                        in 90 minutes, extra time, and penalty shootouts all
                        count. If a penalty has to be re-taken the previous
                        disallowed penalty(ies) do not count.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Match
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Match Odds :- All bets apply to the relevant full
                        regular time period including stoppage time. Any
                        extra-time and/or penalty shoot-out is not included. For
                        the cancellation of a goal, due to VAR, bets matched
                        between the time of the goal being scored and the time
                        at which the video assistant referee finishes the review
                        will be voided. For the cancellation of a red card, due
                        to VAR, bets matched after the time at which the video
                        assistant referee commences the review will be voided.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Under_Over Goals: - In the event of a match starting but
                        not being completed, all bets will be void, unless the
                        specific market outcome is already determined
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1st Period Winner: - Bets will be void if the match is
                        abandoned before half-time.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Next Goal: - Own goals count to the side credited with
                        the goal.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Draw No Bet: - Predict which team will be the winner. In
                        case of a draw, all bets will be void. If a game is
                        abandoned, bets will be void.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Both Teams to Score: - Predict whether both teams will
                        score at least one goal in the game. Own goals count
                        towards the team credited with the goal. If a game is
                        abandoned, bets will be void, unless the outcome of
                        these bets is already determined. Yes” – meaning that
                        both teams will score. “No” – means that either team
                        will not score.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Total Corners: - Predict which team will take the named
                        corner in the game. If this specific corner is not taken
                        in the game, bets will be void. For example, the game
                        finishes or is abandoned with 8 corners taken – all bets
                        on any corner after the 8th will be void (9th, 10th,
                        etc.).
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Goals Odd/Even: - Any match resulting in 0-0 will be
                        settled on an even number of goals. For Team Odd/Even
                        markets, if the specified team does not score then we
                        will settle on an even number of goals. In the event of
                        an abandoned match then bets for that match will be
                        void.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1X2 Corners: - Predict which team will get more corners
                        in a match. Awarded, but not taken corners (there is a
                        corner, but before it is taken the referee signals for
                        the end of the first half or the match) will not count
                        for settlement purposes. Also, if a corner needs to be
                        re-taken for any reason, it will be counted as 1 corner.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Under/Over Card in Match (Number of cards): - Predict
                        the number of cards that will be shown in a match. If a
                        player is sent off for 2 yellow cards, this counts as 2
                        yellow cards and 1 red card for betting purpose es. If
                        the match is abandoned for any reason, all bets will be
                        void unless the market is already determined, e.g., Team
                        1 over 2,5 yellow cards - 3 yellow cards awarded to Team
                        1 before abandonment is settled as a winner. Cards for
                        non-players (already substituted players, managers, and
                        players on the bench who are not substituted) are not
                        considered. The settlement will be made concerning all
                        available evidence to cards shown during the scheduled
                        90 minutes play. Any card shown after the full-time
                        whistle-blow will be disregarded.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        First Half Under/Over Goals: - How many goals will be
                        scored in the first half of this match? All bets apply
                        to Full Time according to the match officials, plus any
                        stoppage time. Extra-time/penalty shoot-outs are not
                        included.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Penalty Taken? : - Will a penalty be awarded and taken
                        during this match? All bets apply to Full Time according
                        to the match officials, plus any stoppage time.
                        Extra-time/penalty shoot-outs are not included.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Correct Score: - Predict the score of this match. This
                        market will not be partially settled during the fixture
                        and will be fully settled full-time. All bets apply to
                        Full Time according to the match officials, plus any
                        stoppage time. Extra-time/penalty shoot-outs are not
                        included.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Team A/B +1/2/3: - Who will win this match with the
                        stated handicap applied? All bets apply to Full Time
                        according to the match officials, plus any stoppage
                        time. Extra-time/penalty shoot-outs are not included.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        HT/FT: - Bets will be void if the match is abandoned.
                        Extra-time and penalty shootouts do not count.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-sm my-1" data-v-f9e469a6 data-v-5b48a53d>
            <div className="border-b border-in-dark py-1" data-v-f9e469a6>
              <a
                onClick={() => handleClick(5)}
                className="py-1 px-1 text-base leading-6 font-bold flex justify-between"
                data-v-f9e469a6
              >
                <span
                  className="ml-1 inline-block capitalize cursor-pointer font-black"
                  data-v-f9e469a6
                >
                  Tennis
                </span>
                <span
                  className="flex items-center justify-center w-6 h-6"
                  data-v-f9e469a6
                >
                  {index === 5 ? <ArrowDown /> : <ArrowUp />}
                </span>
              </a>
            </div>
            <div
              data-v-f9e469a6
              style={{ display: index === 5 ? "block" : "none" }}
            >
              <table
                style={{ color: "#a8a8a8" }}
                className="table table-bordered"
                data-v-5b48a53d
              >
                <tbody data-v-5b48a53d>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Match
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Match Odds: - If 1st set has been not completed at the
                        time of the retirement or disqualification, then all
                        bets relating to that individual match will be void.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Game Winner: - Predict which player will win the stated
                        game. The nominated game will be featured in the name of
                        the bet type, for example, 2ndset – 7th game – Winner.
                        If a game is not completed for any reason, bets on it
                        will be void. Tie break points will not be counted for
                        this bet type. unless the specific market outcome is
                        already determined.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Under / Over Games:- Finished set stand, the unfinished
                        set can be played to its natural conclusion and settled
                        as in the example: Example: A set is abandoned at 4-4 I
                        win if I placed a bet on Over 9.5 (since any natural
                        conclusion to the set would have at least 10 games); I
                        lost the bet if I placed a bet on Under 9.5 (since any
                        natural conclusion to the set would have at least 10
                        games); I get my stake back if I placed a bet on O/U
                        10.5 (it is undecided, the set could have ended 6-4).
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-sm my-1" data-v-f9e469a6 data-v-5b48a53d>
            <div className="border-b border-in-dark py-1" data-v-f9e469a6>
              <a
                onClick={() => handleClick(6)}
                className="py-1 px-1 text-base leading-6 font-bold flex justify-between"
                data-v-f9e469a6
              >
                <span
                  className="ml-1 inline-block capitalize cursor-pointer font-black"
                  data-v-f9e469a6
                >
                  CricketCasino
                </span>
                <span
                  className="flex items-center justify-center w-6 h-6"
                  data-v-f9e469a6
                >
                  {index === 6 ? <ArrowDown /> : <ArrowUp />}
                </span>
              </a>
            </div>
            <div
              data-v-f9e469a6
              style={{ display: index === 6 ? "block" : "none" }}
            >
              <table
                style={{ color: "#a8a8a8" }}
                className="table table-bordered"
                data-v-5b48a53d
              >
                <tbody data-v-5b48a53d>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1. Completed game is valid , in case due to rain over
                        are reduced or match abandoned particular game will be
                        deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        2. Helmet penalty run will be counted, rest other
                        penalty run will not be counted in game of our exchange.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        3. In any circumstances management decision will be
                        final.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        4. The last digit of run in all game will be valid in
                        our exchange.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        5. Single last digit game :-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        5.1 For example:- 6 over run Ind : 47 run , so the
                        result will be given as 7 for single last digit game in
                        our exchange.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        6. Double last digit game :-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        6.1 For example:- 6 over run &amp; 10 over run Ind : 45
                        run &amp; 83 run respectively , so the result will be
                        given as 53 for double last digit game in our exchange.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        7. Triple last digit game :-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        7.1 For example:- 6 over run, 10 over run &amp; 15 over
                        run Ind : 43 run ,80 run and 125 respectively so the
                        result will be given as 305 for triple last digit game
                        in our exchange.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        7.2 For example:- 6 over run, 10 over run &amp; Lambi
                        run Ind : 43 run ,80 run and 187 respectively so the
                        result will be given as 307 for triple last digit game
                        in our exchange.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-sm my-1" data-v-f9e469a6 data-v-5b48a53d>
            <div className="border-b border-in-dark py-1" data-v-f9e469a6>
              <a
                onClick={() => handleClick(7)}
                className="py-1 px-1 text-base leading-6 font-bold flex justify-between"
                data-v-f9e469a6
              >
                <span
                  className="ml-1 inline-block capitalize cursor-pointer font-black"
                  data-v-f9e469a6
                >
                  Fancy
                </span>
                <span
                  className="flex items-center justify-center w-6 h-6"
                  data-v-f9e469a6
                >
                  {index === 7 ? <ArrowDown /> : <ArrowUp />}
                </span>
              </a>
            </div>
            <div
              data-v-f9e469a6
              style={{ display: index === 7 ? "block" : "none" }}
            >
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Bets will be deleted if there is no Free hit in the
                    mentioned match
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Boundary by bat will be considered as valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Boundaries by Player
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Both Four and six are valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    No Boundaries Event:
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Both Four and Six are valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Batsman bat boundaries only considered as valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Free hit boundaries also valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Bets will be voided if that particular ball not completed
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Result will be Given 0 or 4 (No or Yes). For Example batsman
                    hit boundary in particular ball means Result is 0 otherwise
                    Result is 4.
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Any query regarding result or rate has to be contacted
                    within 7 days from the event, query after 7 days from the
                    event will not be considered as valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Virtual Cricket
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Scorecard available on the video will be considered as
                    valid. At any situation, if there is a difference between
                    the scorecard in the website and the scorecard available on
                    video. Score card available on video will be valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    In case of any technical issues the video gets
                    interrupted/stopped and the same cannot be continued, the
                    existing markets will be voided. However the markets which
                    are already finished/settled will remain valid.
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    rules.cpl
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    If CPL fixture 0f 33 matches gets reduced due to any reason,
                    then all the special fancies will be voided (Match abandoned
                    due to rain/bad light will not be considered in this)
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Fancy based on all individual teams are valid only for
                    league stage
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total 1st over runs: Average 6 runs will be given in case
                    match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total fours: Average 22 fours will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total sixes: Average 13 sixes will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Wickets - Average will 13 Wickets be given in case
                    match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Wides - Average 10 wides will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Wides - Average 10 wides will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total No ball - Average 1 no ball will be given in case
                    match abandoned or over reduced.
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Fifties - Average 1 fifties will be given in case
                    match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Caught outs: Average 9 caught out will be given in
                    case match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    At any situation if result is given for any particular event
                    based on the rates given for the same, then the particular
                    result will be considered valid, similarly if the tournament
                    gets canceled due to any reason the previously given result
                    will be considered valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Management decision will be final
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest innings run - Only first innings is valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Lowest innings run - Only first innings is valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest over run: Both innings are valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest 1st over run in individual match: Both innings are
                    valid, however for CPL we have created the fancy for 1st
                    innings only
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest Fours of individual match: Both innings are valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest Sixes in individual match: Both innings are valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest Extras in individual match: Both innings are valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest Wicket in individual match: Both innings are valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Super over will not be included
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Barbados Tridents
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Opening partnership run: Average 24 runs will be given in
                    case match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    First 6 over run: Average 45 run will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    St Kitts and Nevis Patriots
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Opening partnership run: Average 25 runs will be given in
                    case match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    First 6 over run: Average 45 run will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Trinbago Knight Riders
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Opening partnership run: Average 22 runs will be given in
                    case match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    First 6 over run: Average 46 run will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Guyana Amazon Warriors
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Opening partnership run: Average 23 runs will be given in
                    case match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    First 6 over run: Average 44 run will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    St Lucia Zouks
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Opening partnership run: Average 22 runs will be given in
                    case match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    First 6 over run: Average 43 run will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Jamaica Tallawahs
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Opening partnership run: Average 24 runs will be given in
                    case match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    First 6 over run: Average 46 run will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Tour Special Events
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Australia tour of Sri Lanka, 2022
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    If first match of tour (T20 or ODI) cancelled or over reduce
                    in first match, then all special fancy events will be
                    deleted
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    If First match played completely and next match gets over
                    reduced or cancelled, then that match bets all bets will be
                    deleted and first match bets will be valid and average will
                    count in other bets
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Ex. : First match total 4s is 20 and second match over
                    reduced so bets after first match upto second match started
                    that all deleted and for other bets average counted total 4s
                    is 24 and third match total 4s is 26, So Result of Total 4s
                    is 70
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    T20 :
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Matches 1st over runs : Average 6 runs will be given
                    in case match abandoned or over reduced (only 1st innings
                    valid)
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Matches 1st 6 over runs : Average 45 runs will be
                    given in case match abandoned or over reduced (Only 1st
                    Innings valid)
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total fours: Average 24 fours will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total sixes: Average 9 sixes will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Boundaries: Average 33 Boundaries will be given in
                    case match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Fifties - Average 2 Fifties will be given in case
                    match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Wickets - Average 12 Wickets will be given in case
                    match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Wides - Average 8 Wides will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Extras - Average 15 Extras will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Caught outs: Average 8 Caught out will be given in
                    case match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Bowled:- Average 2 Bowled out will be given in case
                    match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total LBW:- Average 2 LBW will be given in case match
                    abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Total Run out:- Average 1 Run out will be given in case
                    match abandoned or over reduced
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    At any situation if result is given for any particular event
                    based on the rates given for the same, then the particular
                    result will be considered valid, similarly if the tournament
                    gets canceled due to any reason the previously given result
                    will be considered valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Most runs given by Bowler in an Inning of Tour : Maximum How
                    much Runs conceded by a individual Bowler in an Innings. Ex
                    : For T20I How much runs conceded by a bowler in his 4 overs
                    Quota.
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest total runs in individual match of IPL : Maximum
                    Total runs of both Teams in individual match.
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest innings run - Only first inning is valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest Partnership - Both innings are valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest 1st over run of individual match: only first inning
                    is valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest Fours of individual match: Both innings are valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest Sixes of individual match: Both innings are valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest Extras of individual match: Both innings are valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest over run: Both innings are valid
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Top Batsman Runs in Tour : Most runs by an Individual Player
                    in any Individual matches in ODI/T20I Format of Tour
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest Wickets by Bowler in Tour : Most Wickets taken by
                    Individual Player in Overall ODI/T20I Format of Tour
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Highest Over runs in Tour : Most Runs Scored in Any Single
                    Over of any Individual Match in Overall ODI/T20I Format of
                    Tour
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Player Total Runs : Total Runs Scored by an Individual
                    Player in Full ODI/T20I Format of Tour
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Player Total 4s : Total 4s Hitted by an Individual Player in
                    Full ODI/T20I Format of Tour
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Player Total 6s : Total 6s Hitted by an Individual Player in
                    Full ODI/T20I Format of Tour
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Player Boundaries : Total Boundaries Hitted by an Individual
                    Player in Full ODI/T20I Format of Tour
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    For Player based Events, If any Player not in playing 11
                    suppose First match any player played completely but if same
                    player not available in next match, then that match bets all
                    bets will be deleted and first match bets will be valid and
                    average will count in other bets
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    If any one match not in Playing 11 means Average Given for
                    that match
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    Average For Players:
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    A Finch Total Runs, Boundaries, 4s and 6s : 26,4,3 &amp; 1.
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    D Warner Total Runs, Boundaries, 4s and 6s : 28,5,4&amp; 1.
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    P Nissanka Total Runs, Boundaries, 4s and 6s : 22,3,2 &amp;
                    1.
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    D Gunathilaka Total Runs, Boundaries, 4s and 6s : 23,3,2
                    &amp; 1.
                  </span>
                </div>
              </div>
              <div data-v-5b48a53d>
                <div className="p-[6px]" data-v-5b48a53d>
                  <span className data-v-5b48a53d>
                    J Hazlewood,M Starc,D Chameera &amp; M Theekshana : 2 wkts
                    Average given if player not in playing 11.
                  </span>
                </div>
              </div>
              <table
                style={{ color: "#a8a8a8" }}
                className="table table-bordered"
                data-v-5b48a53d
              >
                <tbody data-v-5b48a53d>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1. All fancy bets will be validated when match has been
                        tied.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        2. All advance fancy will be suspended before toss or
                        weather condition.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        3. In case technical error or any circumstances any
                        fancy is suspended and does not resume result will be
                        given all previous bets will be valid (based on
                        haar/jeet).
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        4. If any case wrong rate has been given in fancy that
                        particular bets will be cancelled.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        5. In any circumstances management decision will be
                        final related to all exchange items. Our scorecard will
                        be considered as valid if there is any mismatch in
                        online portal
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        6. In case customer make bets in wrong fancy we are not
                        liable to delete, no changes will be made and bets will
                        be consider as confirm bet.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        7. Due to any technical error market is open and result
                        has came all bets after result will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        8. Manual bets are not accepted in our exchange.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        9.Our exchange will provide 5 second delay in our tv.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        10. Company reserves the right to suspend/void any
                        id/bets if the same is found to be illegitimate. For
                        example incase of vpn/robot-use/multiple entry from same
                        IP/ multiple bets at same time (Punching) and others.
                        Note : only winning bets will be voided, For example: If
                        we find such entries (above mentioned) from any id and
                        their bets are (200000 lay in a 6 over session for the
                        rate 40 and 200000 back for the rate of 48) and the
                        actual score is 38, bets of 40 lay will be voided and
                        the bets for 48 back will be considered valid.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        11. Company reserves the right to void any bets (only
                        winning bets) of any event at any point of the match if
                        the company believes there is any cheating/wrong doing
                        in that particular event by the players (either
                        batsman/bowler)
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        12. Once our exchange give username and password it is
                        your responsibility to change a password.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        13. Penalty runs will not be counted in any fancy.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        14. Warning:- live scores and other data on this site is
                        sourced from third party feeds and may be subject to
                        time delays and/or be inaccurate. If you rely on this
                        data to place bets, you do so at your own risk. Our
                        exchange does not accept responsibility for loss
                        suffered as a result of reliance on this data.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        15.Traders will be block the user ID if find any
                        misinterpret activities, No queries accept regarding.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        16. Our exchange is not responsible for misuse of client
                        id.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Теsт
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1 Session:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1.1 Complete session valid in test.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1.2 Middle session and Session is not completed due to
                        Innings declared or all out so that particular over
                        considered as completed and remaining over counted in
                        next team Innings for ex:- In case of Innings declared
                        or all out In 131.5th over Considered as 132 over
                        completed remaining 1 over counted for 133 over middle
                        session and 3 over counted for 135 over session from
                        next team Innings and One over session and Only over
                        session is not completed due to innings declared so that
                        Particular over session bets will be deleted and all out
                        considered as valid for ex:- In case of Innings declared
                        In 131.5th over so 132 over will be deleted and if all
                        out then 132 over and Only 132 over will be Valid.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1.3 1st day 1st session run minimum 25 over will be
                        played then result is given otherwise 1st day 1st
                        session will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1.4 1st day 2nd session run minimum 25 over will be
                        played then result is given otherwise 1st day 2nd
                        session will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1.5 1st day total run minimum 80 over will be played
                        then result is given otherwise 1st day total run will be
                        deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1.6 Test match both advance session is valid.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        2 Test lambi/ Inning run:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        2.1 Mandatory 70 over played in test lambi paari/
                        Innings run. If any team all-out or declaration lambi
                        paari/ innings run is valid.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        2.2 In case due to weather situation match has been
                        stopped all lambi trades will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        2.3 In test both lambi paari / inning run is valid in
                        advance fancy.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        3 Test batsman:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        3.1 In case batsmen is injured he/she is made 34 runs
                        the result will be given 34 runs.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        3.2 Batsman 50/100 run if batsman is injured or
                        declaration the result will be given on particular run.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        3.3 In next men out fancy if player is injured
                        particular fancy will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        3.4 In advance fancy opening batsmen is only valid if
                        same batsmen came in opening the fancy will be valid in
                        case one batsmen is changed that particular player fancy
                        will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        3.5 Test match both advance fancy batsmen run is valid.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        4 Test partnership:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        4.1 In partnership one batsman is injured partnership is
                        continued in next batsman.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        4.2 Partnership and player runs due to weather condition
                        or match abandoned the result will be given as per
                        score.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        4.3 Advance partnership is valid in case both players
                        are different or same.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        4.4 Test match both advance fancy partnership is valid.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        5 Other fancy advance (test):-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        5.1 Four, sixes, wide, wicket, extra run, total run,
                        highest over and top batsmen is valid only if 300 overs
                        has been played or the match has been won by any team
                        otherwise all these fancy will be deleted. Additionally
                        all events are valid only for 1st innings( this is
                        applicable to all individual team events also)
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        2 Odi rule:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Session:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Match 1st over run advance fancy only 1st innings run
                        will be counted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Complete session is valid in case due to rain or match
                        abandoned particular session will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        For example:- 35 over run team a is playing any case
                        team A is all-out in 33 over team a has made 150 run the
                        session result is validated on particular run.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Advance session считается действительной только в первом
                        innings.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        50 over runs:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        In case 50 over is not completed all bet will be deleted
                        due to weather or any condition.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Advance 50 over runs is valid in only 1st innings.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Odi batsman runs:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        In case batsman is injured he/she is made 34 runs the
                        result will be given 34 runs.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        In next men out fancy if player is injured particular
                        fancy will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        In advance fancy opening batsmen is only valid if same
                        batsmen came in opening the fancy will be valid in case
                        one batsmen is changed that particular player fancy will
                        be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Odi partnership runs:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        In partnership one batsman is injured partnership is
                        continued in next batsman.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Advance partnership is valid in case both players are
                        different or same.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Both team advance partnerships are valid in particular
                        match.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Other fancy:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Four, sixes, wide, wicket, extra run, total run, highest
                        over ,top batsman,maiden
                        over,caught-out,no-ball,run-out,fifty and century are
                        valid only match has been completed in case due to rain
                        over has been reduced all other fancy will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        T20:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Session:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Match 1st over run advance fancy only 1st innings run
                        will be counted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Complete session is valid in case due to rain or match
                        abandoned particular session will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        For example :- 15 over run team a is playing any case
                        team a is all-out in 13 over team A has made 100 run the
                        session result is validated on particular run.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Advance session is valid in only 1st innings.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        20 over runs:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Advance 20 over run is valid only in 1st innings. 20
                        over run will not be considered as valid if 20 overs is
                        not completed due to any situation
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        T20 batsman runs:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        In case batsman is injured he/she is made 34 runs the
                        result will be given 34 runs.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        In next men out fancy if player is injured particular
                        fancy will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        In advance fancy opening batsmen is only valid if same
                        batsmen came in opening the fancy will be valid in case
                        one batsmen is changed that particular player fancy will
                        be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        T20 partnership runs:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        In partnership one batsman is injured partnership is
                        continued in next batsman.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Advance partnership is valid in case both players are
                        different or same.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Both team advance partnerships are valid in particular
                        match.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1st 2 &amp; 3 Wickets runs:- T20/ODI
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Advance event is valid in only 1st Innings.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        If over reduced due to rain or weather condition or
                        match abandoned the result will be given as per score.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Other fancy:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        T-20 ,one day and test match in case current innings
                        player and partnership are running in between match has
                        been called off or abandoned that situation all current
                        player and partnership results are valid.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Four, sixes, wide, wicket, extra run, total run, highest
                        over and top batsman,maiden
                        over,caught-out,no-ball,run-out,fifty and century are
                        valid only match has been completed in case due to rain
                        over has been reduced all other fancy will be deleted.
                        1st 6 over dot ball and 20 over dot ball fancy only
                        valid is 1st innings.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1st wicket lost to any team balls meaning that any team
                        1st wicket fall down in how many balls that particular
                        fancy at least minimum one ball have to be played
                        otherwise bets will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1st wicket lost to any team fancy valid both innings.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        How many balls for 50 runs any team meaning that any
                        team achieved 50 runs in how many balls that particular
                        fancy at least one ball have to be played otherwise that
                        fancy bets will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        How many balls for 50 runs fancy any team only first
                        inning valid.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1st 6 inning boundaries runs any team fancy will be
                        counting only according to run scored fours and sixes at
                        least 6 over must be played otherwise that fancy will be
                        deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1st inning 6 over boundaries runs any team run like wide
                        ,no-ball ,leg-byes ,byes and over throw runs are not
                        counted this fancy.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        How many balls face any batsman meaning that any batsman
                        how many balls he/she played that particular fancy at
                        least one ball have to be played otherwise that fancy
                        bets will be deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        How many balls face by any batsman both innings valid.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Lowest scoring over will be considered valid only if the
                        over is completed fully (all six deliveries has to be
                        bowled)
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Concussion in Test:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        All bets of one over session will be deleted in test
                        scenario, in case session is incomplete. For example
                        innings declared or match suspended to bad light or any
                        other conditions.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        1. All bets will be considered as valid if a player has
                        been replaced under concussion substitute, result will
                        be given for the runs scored by the mentioned player.
                        For example DM Bravo gets retired hurt at 23 runs, then
                        result will be given for 23.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        2. Bets of both the player will be valid under
                        concussion substitute.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Total Match- Events (test):-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Minimum of 300 overs to be bowled in the entire test
                        match, otherwise all bets related to the particular
                        event will get void. For example, Total match caught
                        outs will be valid only if 300 overs been bowled in the
                        particular test match
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Limited over events-Test:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        This event will be considered valid only if the number
                        of overs defined on the particular event has been
                        bowled, otherwise all bets related to this event will
                        get void. For example 0-25 over events will be valid
                        only if 25 overs has been bowled, else the same will not
                        be considered as valid
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        If the team gets all out prior to any of the defined
                        overs, then balance overs will be counted in next
                        innings. For example if the team gets all out in 23.1
                        over the same will be considered as 24 overs and the
                        balance overs will be counted from next innings.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Bowler Wicket events- Test:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Minimum of one legal over (one complete over) has to be
                        bowled by the bowler mentioned in the event, else the
                        same will not be considered as valid
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Bowler over events- Test:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        The mentioned bowler has to complete the defined number
                        of overs, else the bets related to that particular event
                        will get void. For example if the mentioned bowler has
                        bowled 8 overs, then 5 over run of that particular
                        bowler will be considered as valid and the 10 over run
                        will get void
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Player ball events- Test:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        This event will be considered valid only if the defined
                        number of runs made by the mentioned player, else the
                        result will be considered as 0 (zero) balls
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        This event will be considered valid only if the defined
                        number of runs made by the mentioned player, else the
                        result will be considered as 0 (zero) balls
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Limited over events-ODI:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        This event will be considered valid only if the number
                        of overs defined on the particular event has been
                        bowled, otherwise all bets related to this event will
                        get void. 0-50 over events will be valid only if 50 over
                        completed, if the team batting first get all out prior
                        to 50 over the balance over will be counted from second
                        innings. For example if team batting first gets all out
                        in 35 over balance 15 over will be counted from second
                        innings, the same applies for all events if team gets
                        all out before the defined number of overs
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        The events which remains incomplete will be voided if
                        over gets reduced in the match due to any situation, for
                        example if match interrupted in 15 overs due to
                        rain/badlight and post this over gets reduced. Events
                        for 0-10 will be valid, all other events related to this
                        type will get deleted.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        This events will be valid only if the defined number of
                        over is completed. For example team batting first gets
                        all out in 29.4 over then the same will be considered as
                        30 over, the team batting second must complete 20 overs
                        only then 0-50 over events will be considered as valid.
                        In case team batting second gets all out in 19.4 over
                        then 0-50 over event will not be considered as valid,
                        This same is valid for 1st Innings only.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Bowler event- ODI:-
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        The mentioned bowler has to complete the defined number
                        of overs, else the bets related to that particular event
                        will get void. For example if the mentioned bowler has
                        bowled 8 overs, then 5 over run of that particular
                        bowler will be considered as valid and the 10 over run
                        will get void
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Both innings are valid
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Other event:- T20
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        The events for 1-10 over and 11-20 over will be
                        considered valid only if the number of over mentioned
                        has been played completely. However if the over got
                        reduced before the particular event then the same will
                        be voided, if the team batting first get all out prior
                        to 20 over the balance over will be counted from second
                        innings. For example if team batting first gets all out
                        in 17 over balance 3 over will be counted from second
                        innings and that 3 over all events are counted. This
                        same is valid for 1st Innings only.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        If over got reduced in between any running event, then
                        the same will be considered valid and the rest will be
                        voided. For example.., match started and due to rain/bad
                        light or any other situation match got interrupted at 4
                        over and later over got reduced. Then events for 1-10 is
                        valid rest all will be voided
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Bowler Session: Bowler session advance events only valid
                        for 1st inning. This event is valid only if the bowler
                        has completed his maximum quota of overs, else the same
                        will be voided. However if the match has resulted and
                        the particular bowler has already started bowling his
                        final over then result will be given even if he havent
                        completed the over. For example B Kumar is bowling his
                        final over and at 3.4 the match has resulted then result
                        will be given for B Kumar over runs
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Incase of DLS, the over got reduced then the bowler who
                        has already bowled his maximum quota of over that result
                        will be considered as valid and the rest will be voided
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Dot ball Event:
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Only No run will count as dot ball.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        If wicket means that will not count as dot ball.
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Boundary on Match 1st Free hit
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Both innings are valid
                      </span>
                    </td>
                  </tr>
                  <tr data-v-5b48a53d>
                    <td data-v-5b48a53d>
                      <span className data-v-5b48a53d>
                        Boundary hit on Free hit only be considered as valid
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
