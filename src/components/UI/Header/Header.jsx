import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";
import { useLocation } from "react-router-dom";
import AppPopup from "./AppPopUp";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
// import Notification from "./Notification";
import { Fragment, useEffect, useState } from "react";
import {
  setClosePopUpForForever,
  setShowAPKModal,
  setShowAppPopUp,
} from "../../../redux/features/global/globalSlice";
import Error from "../../modals/Error/Error";
import Balance from "./Balance";
import Theme from "./Theme";
import UserButton from "./UserButton";
import LoginButton from "./LoginButton";
import RightDrawer from "./RightDrawer";

const Header = () => {
  const [showRightDrawer, setShowRightDrawer] = useState(false);
  const location = useLocation();
  const { logo } = useLogo();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { showAppPopUp, windowWidth, showAPKModal, closePopupForForever } =
    useSelector((state) => state?.global);

  useEffect(() => {
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    dispatch(setClosePopUpForForever(closePopupForForever ? true : false));
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      dispatch(setClosePopUpForForever(true));
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!apk_modal_shown) {
        dispatch(setShowAPKModal(true));
      }
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if ((!expiryTime || currentTime > expiryTime) && Settings.apk_link) {
          localStorage.removeItem("installPromptExpiryTime");

          dispatch(setShowAppPopUp(true));
        }
      }
    }
  }, [
    dispatch,
    windowWidth,
    showAppPopUp,
    location?.state?.pathname,
    location.pathname,
  ]);

  if (Settings.app_only && !closePopupForForever) {
    return <Error />;
  }

  return (
    <Fragment>
      {/* <Notification /> */}

      {Settings.apk_link && showAPKModal && <DownloadAPK />}
      <header
        className="w-full min-h-fit  shadow-x-header bg-top-menu md:relative z-50 flex flex-col text-center justify-between fixed  h-fit"
        data-v-e9e2d909
      >
        {Settings.apk_link && showAppPopUp && windowWidth < 1040 && (
          <AppPopup />
        )}
        <div className="flex py-4">
          <div data-v-e9e2d909>
            <div
              className="flex items-center justify-center relative"
              data-v-e9e2d909
            >
              <div
                className="w-[3.125rem] h-[3.125rem] ml-[0.625rem] bg-btn-primary rounded-full flex flex-col items-center justify-center md:hidden"
                data-v-f86ae6b0
                data-v-e9e2d909
              >
                <img src="/assets/Category.704feee9.svg" data-v-f86ae6b0 />
              </div>
              <img
                src={logo}
                style={{
                  height: "40px",
                  width: "100px",
                  objectFit: "contain",
                }}
                data-v-e9e2d909
              />
              <div
                className="hidden md:flex items-center ml-7 relative border-search-icon-border border-l-[0.063rem] border-solid box-border h-[2.563rem]"
                data-v-e9e2d909
              >
                <svg
                  viewBox="0 0 512 512"
                  className="top-0 block w-[3.125rem] h-[3.125rem] min-h-[3.125rem] p-[1.063rem] text-site-color bg-primary-bg rounded-full ml-7 border border-search-icon-border"
                  aria-hidden="true"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-7e44f4d4
                  data-v-e9e2d909
                  style={{
                    height: "1em",
                    verticalAlign: "-0.125em",
                    transformOrigin: "center center",
                    overflow: "visible",
                  }}
                >
                  <g
                    transform="translate(256 256)"
                    transformOrigin="128 0"
                    data-v-7e44f4d4
                  >
                    <g transform="translate(0,0) scale(1,1) " data-v-7e44f4d4>
                      <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
                        fill="currentColor"
                        transform="translate(-256 -256)"
                        data-v-7e44f4d4
                      />
                    </g>
                  </g>
                </svg>
                {token && <Balance />}
              </div>
            </div>
          </div>
          <div
            className="flex items-center gap-[0.375rem] justify-end flex-1 overflow-hidden"
            data-v-e9e2d909
          >
            <svg
              viewBox="0 0 512 512"
              className="top-0 block md:hidden w-[3.125rem] h-[3.125rem] min-h-[3.125rem] p-[1.063rem] text-site-color bg-primary-bg rounded-full ml-5 border border-search-icon-border"
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              data-v-7e44f4d4
              data-v-e9e2d909
              style={{
                height: "1em",
                verticalAlign: "-0.125em",
                transformOrigin: "center center",
                overflow: "visible",
              }}
            >
              <g
                transform="translate(256 256)"
                transformOrigin="128 0"
                data-v-7e44f4d4
              >
                <g transform="translate(0,0) scale(1,1) " data-v-7e44f4d4>
                  <path
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
                    fill="currentColor"
                    transform="translate(-256 -256)"
                    data-v-7e44f4d4
                  />
                </g>
              </g>
            </svg>
            <Theme />
            <div className data-v-e9e2d909>
              <div className="float-right" data-v-e9e2d909>
                {!token ? (
                  <LoginButton />
                ) : (
                  <div
                    className="flex items-center md:h-[2.813rem] md:gap-3"
                    data-v-e9e2d909
                  >
                    <UserButton setShowRightDrawer={setShowRightDrawer} />
                  </div>
                )}
                {showRightDrawer && (
                  <RightDrawer setShowRightDrawer={setShowRightDrawer} />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
