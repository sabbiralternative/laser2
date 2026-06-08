import { Outlet, useLocation } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Settings } from "../api";
import Header from "../components/UI/Header/Header";
import MobileSidebar from "../components/shared/Sidebar/MobileSidebar";
import Sidebar from "../components/shared/Sidebar/Sidebar";

const MainLayout = () => {
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  const { group } = useSelector((state) => state.global);
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, group]);

  useEffect(() => {
    const newVersion = Settings?.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        localStorage.setItem("build_version", newVersion);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [stored_build_version]);

  return (
    <div
      id="app"
      className="mx-auto h-[calc(var(--vh)_*_100)] overflow-y-auto"
      data-v-app
    >
      <div
        className="min-h-screen w-full __overflow-y-auto h-[calc(var(--vh)_*_100)+66px]"
        data-v-c78ea7eb
      >
        <Header setMobileSidebar={setMobileSidebar} />

        <MobileSidebar
          mobileSidebar={mobileSidebar}
          setMobileSidebar={setMobileSidebar}
        />
        <div
          className="w-full md:pt-0 pb-[0rem] md:mt-auto h-[calc(100vh-4.375rem)] pt-[4.75rem]"
          data-v-c78ea7eb
        >
          <div
            className="flex items-stretch min-h-[calc(100vh-4.375rem)]"
            data-v-c78ea7eb
          >
            <Sidebar />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
