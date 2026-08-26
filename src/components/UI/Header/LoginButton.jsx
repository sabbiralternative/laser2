import { Fragment } from "react";
import { Link } from "react-router-dom";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";
import { Settings } from "../../../api";

const LoginButton = () => {
  const { getLanguage } = useLanguage();

  return (
    <Fragment>
      <div
        className="p-[0.938rem] h-[3.125rem] mr-2 grid gap-2 bg-btn-primary rounded-[1.875rem] relative divide-x divide-white w-[5.438rem] grid-cols-1"
        data-v-e9e2d909
      >
        <Link
          to="/login"
          className="flex flex-col justify-center text-white text-[0.813rem]"
          data-v-e9e2d909
        >
          <p className="block w-full text-center" data-v-e9e2d909>
            {getLanguage(LanguageKey.LOGIN)}
          </p>
        </Link>
      </div>
      {Settings.registration && (
        <div
          className="p-[0.938rem] h-[3.125rem] mr-2 grid gap-2 bg-btn-primary rounded-[1.875rem] relative divide-x divide-white w-[5.438rem] grid-cols-1"
          data-v-e9e2d909
        >
          <Link
            to="/register"
            className="flex flex-col justify-center text-white text-[0.813rem]"
            data-v-e9e2d909
          >
            <p className="block w-full text-center" data-v-e9e2d909>
              {getLanguage(LanguageKey.REGISTER)}
            </p>
          </Link>
        </div>
      )}
    </Fragment>
  );
};

export default LoginButton;
