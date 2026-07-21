import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";
import { useLocation, useNavigate } from "react-router-dom";
import AppPopup from "./AppPopUp";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
// import Notification from "./Notification";
import { Fragment, useEffect, useState } from "react";
import {
  setClosePopUpForForever,
  setShowAPKModal,
  setShowAppPopUp,
  setShowLanguageModal,
} from "../../../redux/features/global/globalSlice";
import Error from "../../modals/Error/Error";
import Balance from "./Balance";
import Theme from "./Theme";
import UserButton from "./UserButton";
import LoginButton from "./LoginButton";
import RightDrawer from "./RightDrawer";
import Search from "./Search";
import { useLanguage } from "../../../context/LanguageProvider";
import Language from "../../modals/Language";

const Header = ({ setMobileSidebar }) => {
  const { setLanguage } = useLanguage();
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const [showRightDrawer, setShowRightDrawer] = useState(false);
  const location = useLocation();
  const { logo } = useLogo();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    showAppPopUp,
    windowWidth,
    showAPKModal,
    closePopupForForever,
    showLanguageModal,
  } = useSelector((state) => state?.global);

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
  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "english");
  }, [setLanguage]);

  if (Settings.app_only && !closePopupForForever) {
    return <Error />;
  }

  return (
    <Fragment>
      {/* <Notification /> */}
      {showLanguageModal && <Language />}
      {Settings.apk_link && showAPKModal && <DownloadAPK />}
      {showSearch && (
        <Search setShowSearch={setShowSearch} showSearch={showSearch} />
      )}
      {!showSearch && (
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
                  onClick={() => setMobileSidebar(true)}
                  className="w-[3.125rem] h-[3.125rem] ml-[0.625rem] bg-btn-primary rounded-full flex flex-col items-center justify-center md:hidden"
                  data-v-f86ae6b0
                  data-v-e9e2d909
                >
                  <img src="/assets/Category.704feee9.svg" data-v-f86ae6b0 />
                </div>
                <img
                  onClick={() => navigate("/")}
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
                    onClick={() => setShowSearch(true)}
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
                onClick={() => setShowSearch(true)}
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
                <div className="float-right flex" data-v-e9e2d909>
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
                  {Settings.language && (
                    <button
                      onClick={() => dispatch(setShowLanguageModal(true))}
                      className="relative overflow-hidden flex items-center ml-2 text-text_color_primary2 justify-center text-xs py-2 px-2 rounded-full bg-bg_color_secondary border border-border_color_primary capitalize"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 mr-0.5"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M3.6 9h16.8" />
                        <path d="M3.6 15h16.8" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                      </svg>
                      {/* {language} */}
                      <svg
                        fill="currentColor"
                        width={16}
                        height={16}
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 330 330"
                        className="w-3 h-3 ml-2"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <path
                            id="XMLID_225_"
                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                          />
                        </g>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </Fragment>
  );
};

export default Header;
