import { Fragment } from "react";
import useBalance from "../../../hooks/balance";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/features/auth/authSlice";

const RightDrawer = ({ setShowRightDrawer }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { data } = useBalance();
  return (
    <Fragment>
      <div
        className="w-full h-screen overlay-box fixed top-0 left-0 right-0 bottom-0 bg-slate-700 z-[51] opacity-70"
        data-v-e9e2d909=""
      ></div>
      <div
        className="_flex _flex-col _items-start _flex-1 z-[60] fixed right-0 top-0 bottom-0 h-full w-[270px] text-base font-cera-round-pro list-none bg-top-menu shadow menu-account overflow-y-auto max-h-screen"
        data-v-e9e2d909
        style={{}}
      >
        <div className="px-6 w-full relative" data-v-e9e2d909>
          <div
            className="pt-10 h-50 flex items-center justify-between"
            data-v-e9e2d909
          >
            <div
              className="relative text-[1.25rem] font-semibold text-site-color text-left lable-menu"
              data-v-e9e2d909
            >
              {user}
            </div>
          </div>
          <div
            className="mt-4 h-50 flex items-center justify-between"
            data-v-e9e2d909
          >
            <div
              className="relative text-[#999] text-left text-sm font-medium"
              data-v-e9e2d909
            >
              Balance:{" "}
            </div>
            <div
              className="relative text-site-color text-left text-sm font-semibold lable-menu"
              data-v-e9e2d909
            >
              {data?.availBalance}
            </div>
          </div>
          <hr className="border-t border-border-menu my-2" data-v-e9e2d909 />
          <div
            className="h-50 flex items-center justify-between"
            data-v-e9e2d909
          >
            <div
              className="relative text-[#999] text-left text-sm font-medium"
              data-v-e9e2d909
            >
              Exposure:{" "}
            </div>
            <div
              className="relative text-site-color text-left text-sm font-semibold lable-menu"
              data-v-e9e2d909
            >
              {data?.deductedExposure}
            </div>
          </div>

          <hr
            className="border-t border-border-menu my-[0.625rem]"
            data-v-e9e2d909
          />
        </div>
        <ul className="py-1 px-2 w-full text-left relative" data-v-e9e2d909>
          <li data-v-e9e2d909>
            <Link
              onClick={() => setShowRightDrawer(false)}
              to="/"
              className="router-link-active flex gap-2 items-center py-[1rem] pl-5 pr-2.5 text-[#999] text-sm leading-[120%] font-semibold"
              data-v-e9e2d909
            >
              <img
                className="w-[1.875rem] h-[1.875rem]"
                src="/assets/home.7878ce71.svg"
                data-v-e9e2d909
              />{" "}
              Home
            </Link>
          </li>
          <li data-v-e9e2d909>
            <Link
              onClick={() => setShowRightDrawer(false)}
              to="/account-cash-statement"
              className="flex gap-2 items-center py-[1rem] pl-5 pr-2.5 text-[#999] text-sm leading-[120%] font-semibold"
              data-v-e9e2d909
            >
              <img
                className="w-[1.875rem] h-[1.875rem]"
                src="/assets/file.99c55217.svg"
                data-v-e9e2d909
              />
              Account Statement
            </Link>
          </li>
          <li data-v-e9e2d909>
            <Link
              onClick={() => setShowRightDrawer(false)}
              to="/profitloss"
              className="flex gap-2 items-center py-[1rem] pl-5 pr-2.5 text-[#999] text-sm leading-[120%] font-semibold"
              data-v-e9e2d909
            >
              <img
                className="w-[1.875rem] h-[1.875rem]"
                src="/assets/Favorite.f4874cce.svg"
                data-v-e9e2d909
              />{" "}
              Profit Loss Report
            </Link>
          </li>
          <li data-v-e9e2d909>
            <Link
              onClick={() => setShowRightDrawer(false)}
              to="/bet-history"
              className="flex gap-2 items-center py-[1rem] pl-5 pr-2.5 text-[#999] text-sm leading-[120%] font-semibold"
              data-v-e9e2d909
            >
              <img
                className="w-[1.875rem] h-[1.875rem]"
                src="/assets/histry.7f697b93.svg"
                data-v-e9e2d909
              />{" "}
              Bet History
            </Link>
          </li>
          <li data-v-e9e2d909>
            <Link
              onClick={() => setShowRightDrawer(false)}
              to="/current-bet"
              className="flex gap-2 items-center py-[1rem] pl-5 pr-2.5 text-[#999] text-sm leading-[120%] font-semibold"
              data-v-e9e2d909
            >
              <img
                className="w-[1.875rem] h-[1.875rem]"
                src="/assets/casino.5ffa54af.svg"
                data-v-e9e2d909
              />{" "}
              My Bets
            </Link>
          </li>
          <li data-v-e9e2d909>
            <Link
              onClick={() => setShowRightDrawer(false)}
              to="/settings"
              className="flex gap-2 items-center py-[1rem] pl-5 pr-2.5 text-[#999] text-sm leading-[120%] font-semibold"
              data-v-e9e2d909
            >
              <img
                className="w-[1.875rem] h-[1.875rem]"
                src="/assets/settings.96eab642.svg"
                data-v-e9e2d909
              />{" "}
              Set Button Value
            </Link>
          </li>
          <li data-v-e9e2d909>
            <Link
              onClick={() => setShowRightDrawer(false)}
              to="/change-password"
              className="flex gap-2 items-center py-[1rem] pl-5 pr-2.5 text-[#999] text-sm leading-[120%] font-semibold"
              data-v-e9e2d909
            >
              <img
                className="w-[1.875rem] h-[1.875rem]"
                src="/assets/lock.414259ed.svg"
                data-v-e9e2d909
              />{" "}
              Change Password
            </Link>
          </li>

          <li data-v-e9e2d909>
            <Link
              onClick={() => setShowRightDrawer(false)}
              to="/rules"
              className="flex gap-2 items-center py-[1rem] pl-5 pr-2.5 text-[#999] text-sm leading-[120%] font-semibold"
              data-v-e9e2d909
            >
              <img
                className="w-[1.875rem] h-[1.875rem]"
                src="/assets/prescription.ca17684b.svg"
                data-v-e9e2d909
              />{" "}
              Rules
            </Link>
          </li>

          <li data-v-e9e2d909>
            <a
              onClick={() => {
                dispatch(logout());
                setShowRightDrawer(false);
              }}
              className="flex gap-2 items-center py-[1rem] pl-5 pr-2.5 text-[#999] text-sm leading-[120%] font-semibold"
              data-v-e9e2d909
            >
              <img
                className="w-[1.875rem] h-[1.875rem]"
                src="/assets/basic-ui.0ffbe6ac.svg"
                data-v-e9e2d909
              />{" "}
              Logout
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default RightDrawer;
