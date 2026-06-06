import { Fragment } from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
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
            Login
          </p>
        </Link>
      </div>
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
            Register
          </p>
        </Link>
      </div>
    </Fragment>
  );
};

export default LoginButton;
