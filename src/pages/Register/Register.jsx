import { useDispatch } from "react-redux";
import { useLogo } from "../../context/ApiProvider";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetOtpMutation,
  useRegisterMutation,
} from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { Settings } from "../../api";
import { setUser } from "../../redux/features/auth/authSlice";
import { setShowBanner } from "../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useEffect, useState } from "react";
import { LanguageKey } from "../../const";
import useLanguage from "../../hooks/use-language";
const Register = () => {
  const { getLanguage } = useLanguage();
  const affnook_token = localStorage.getItem("affnook_token");
  const referralCode = localStorage.getItem("referralCode");
  const { logo } = useLogo();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getOTP] = useGetOtpMutation();
  const [handleRegister] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const [timer, setTimer] = useState(null);
  const [order, setOrder] = useState({
    orderId: null,
    otpMethod: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState("");

  const handleOTP = async () => {
    const res = await getOTP({ mobile }).unwrap();
    if (res?.success) {
      setTimer(60);
      setOrder({
        orderId: res?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  const onSubmit = async (data) => {
    const registerData = {
      username: "",
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      mobile: mobile,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      referralCode: referralCode || data?.referralCode,
      orderId: order.orderId,
      otpMethod: order.otpMethod,
      affnook_token: affnook_token || null,
    };

    const result = await handleRegister(registerData).unwrap();

    if (result.success) {
      if (window?.fbq) {
        window.fbq("track", "CompleteRegistration", {
          content_name: "User Signup",
          status: "success",
        });
      }
      localStorage.removeItem("referralCode");
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const memberId = result?.result?.memberId;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;
      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      localStorage.setItem("token", token);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        navigate("/");
        toast.success("Register successful");
      }
    } else {
      toast.error(result?.error?.description);
    }
  };

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };

  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) return prevTimer - 1;
          clearInterval(interval);
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);
  return (
    <div
      id="app"
      className="mx-auto h-[calc(var(--vh)_*_100)] overflow-y-auto"
      data-v-app
    >
      <div className="w-full block relative _min-h-screen">
        <img
          className="fixed z-10 inset-0 min-h-full object-cover fill-available md:object-cover auth-img"
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZIAAANqAQMAAACdEl/kAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRFKioqJnD7EgAAAJ5JREFUeJztyzEBAAAMAqDZv/QyeAs/uV4cx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx5k8DylEA2vyj8MnAAAAAElFTkSuQmCC"
        />
        <section className="flex-col justify-center block absolute z-20 inset-0 my-5">
          <div className="md:py-12 h-full">
            <div className="flex justify-center items-center flex-wrap h-full gap-6">
              <div className="flex flex-col md:flex-row md:gap-[6.25rem] md:justify-center md:items-center md:w-screen w-auto max-w-[21.875rem] md:max-w-none mx-4 sm:mx-auto m-auto">
                <div className="text-center md:w-[34.938rem]">
                  <div className="w-full relative text-[2.188rem] font-stapel-medium font-medium text-white-black text-left inline-block">
                    <img
                      onClick={() => navigate("/")}
                      src={logo}
                      className="max-w-[15.625rem] max-h-[2.813rem] md:max-w-[21.875rem] md:max-h-[4.688rem] pt-1 cursor-pointer"
                    />
                  </div>
                  <div className="w-full relative md:text-[1.875rem] md:leading-[157%] md:font-medium text-[0.928rem] font-medium leading-[18px] text-white-black text-left inline-block py-2">
                    Enjoy top-tier sports betting with competitive odds, live
                    updates, and an easy-to-use platform for football, cricket,
                    and tennis, delivering an exciting and rewarding betting
                    experience.
                  </div>
                </div>
                <div className="md:w-[36.188rem] my-5 pt-3 pb-0 block bg-primary-bg rounded-[1.063rem] overflow-hidden">
                  <div className="lg:flex lg:flex-wrap g-0">
                    <div className="lg:w-full">
                      <div className="mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div
                            className="px-4 md:px-[75px] md:pt-[49px] md:pb-[20px]"
                            data-v-9fd05652
                          >
                            <h4
                              className="mb-8 text-[1.875rem] md:text-[34px] mt-[1.563rem] md:mt-0 font-cera-pro font-bold"
                              data-v-9fd05652
                            >
                              <img
                                onClick={() => navigate("/")}
                                src={logo}
                                className="max-w-[80%] m-auto h-20"
                                data-v-9fd05652
                              />
                            </h4>
                            <div className="mb-2" data-v-9fd05652>
                              <div
                                className="form-control1 w-full flex flex-col relative"
                                data-v-63f59e8b
                              >
                                <input
                                  onChange={(e) => handleMobileNo(e)}
                                  value={mobile}
                                  placeholder="Enter Phone Number"
                                  className="rounded-full border border-solid border-[#cccc] bg-top-menu w-full relative rounded-[1.875rem] border-[#cccc] border-[0.063rem] border-solid box-border h-[2.875rem] flex flex-row items-center justify-start py-[1.063rem] px-5 text-left text-sm text-site-color"
                                  data-v-63f59e8b
                                />
                                {timer ? (
                                  <div
                                    className="absolute bottom-0 right-0 text-btn-primary  bg-btn-primary w-[90px] py-3  rounded-[1.875rem]   flex flex-row items-center justify-center  box-border  text-center text-base text-white !cursor-text"
                                    type="button"
                                  >
                                    {getLanguage(LanguageKey.RETRY_IN)} {timer}
                                  </div>
                                ) : (
                                  <button
                                    onClick={handleOTP}
                                    disabled={
                                      Settings.otp && mobile?.length < 10
                                    }
                                    className="absolute bottom-0 right-0 text-btn-primary  bg-btn-primary w-[90px] py-3  rounded-[1.875rem]   flex flex-row items-center justify-center  box-border cursor-pointer text-center text-base text-white"
                                    type="button"
                                  >
                                    {getLanguage(LanguageKey.GET_OTP)}
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="mb-2" data-v-9fd05652>
                              <div
                                className="form-control1 w-full flex flex-col relative"
                                data-v-63f59e8b
                              >
                                <input
                                  maxLength={4}
                                  {...register("otp", { required: true })}
                                  placeholder="Enter OTP"
                                  className="rounded-full border border-solid border-[#cccc] bg-top-menu w-full relative rounded-[1.875rem] border-[#cccc] border-[0.063rem] border-solid box-border h-[2.875rem] flex flex-row items-center justify-start py-[1.063rem] px-5 text-left text-sm text-site-color"
                                  data-v-63f59e8b
                                />
                              </div>
                            </div>
                            <div className="mb-5" data-v-9fd05652>
                              <div
                                className="form-control1 w-full flex flex-col relative"
                                data-v-63f59e8b
                              >
                                <input
                                  maxLength={20}
                                  {...register("password", { required: true })}
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Enter Your Password"
                                  className="rounded-full border border-solid border-[#cccc] bg-top-menu w-full relative rounded-[1.875rem] border-[#cccc] border-[0.063rem] border-solid box-border h-[2.875rem] flex flex-row items-center justify-start py-[1.063rem] px-5 text-left text-sm text-site-color"
                                  data-v-63f59e8b
                                />
                                <button
                                  className="absolute bottom-3 right-5 text-btn-primary cursor-pointer"
                                  type="button"
                                >
                                  {showPassword ? (
                                    <IoEye
                                      size={20}
                                      onClick={() => setShowPassword(false)}
                                    />
                                  ) : (
                                    <IoMdEyeOff
                                      size={20}
                                      onClick={() => setShowPassword(true)}
                                    />
                                  )}
                                </button>
                              </div>
                            </div>
                            <div className="mb-5" data-v-9fd05652>
                              <div
                                className="form-control1 w-full flex flex-col relative"
                                data-v-63f59e8b
                              >
                                <input
                                  maxLength={20}
                                  {...register("password", { required: true })}
                                  type={
                                    showConfirmPassword ? "text" : "password"
                                  }
                                  placeholder="Re-Enter Your Password"
                                  className="rounded-full border border-solid border-[#cccc] bg-top-menu w-full relative rounded-[1.875rem] border-[#cccc] border-[0.063rem] border-solid box-border h-[2.875rem] flex flex-row items-center justify-start py-[1.063rem] px-5 text-left text-sm text-site-color"
                                  data-v-63f59e8b
                                />
                                <button
                                  className="absolute bottom-3 right-5 text-btn-primary cursor-pointer"
                                  type="button"
                                >
                                  {showPassword ? (
                                    <IoEye
                                      size={20}
                                      onClick={() =>
                                        setShowConfirmPassword(false)
                                      }
                                    />
                                  ) : (
                                    <IoMdEyeOff
                                      size={20}
                                      onClick={() => setShowPassword(true)}
                                    />
                                  )}
                                </button>
                              </div>
                            </div>
                            <div className="mb-2" data-v-9fd05652>
                              <div
                                className="form-control1 w-full flex flex-col relative"
                                data-v-63f59e8b
                              >
                                <input
                                  maxLength={20}
                                  readOnly={referralCode}
                                  {...register("referralCode")}
                                  defaultValue={referralCode}
                                  placeholder="Enter referral code(Optional)"
                                  className="rounded-full border border-solid border-[#cccc] bg-top-menu w-full relative rounded-[1.875rem] border-[#cccc] border-[0.063rem] border-solid box-border h-[2.875rem] flex flex-row items-center justify-start py-[1.063rem] px-5 text-left text-sm text-site-color"
                                  data-v-63f59e8b
                                />
                              </div>
                            </div>
                            <div
                              className="text-center pt-1 mb-4 pb-1"
                              data-v-9fd05652
                            >
                              <div
                                className="flex flex-col gap-0"
                                data-v-9fd05652
                              >
                                <button
                                  className="w-full relative rounded-[1.875rem] bg-btn-primary h-[2.875rem] flex flex-row items-center justify-center py-0 box-border cursor-pointer text-center text-base text-white"
                                  type="submit"
                                  data-v-9fd05652
                                >
                                  <div
                                    className="w-full relative leading-[120%] font-semibold inline-block shrink-0"
                                    data-v-9fd05652
                                  >
                                    {getLanguage(LanguageKey.REGISTER)}
                                  </div>
                                </button>
                              </div>
                              <div className="w-full flex justify-center mt-1">
                                <span className="text-black4 text-xs">
                                  Already have account?{" "}
                                </span>
                                <Link
                                  to="/login"
                                  className="cursor-pointer text-black4 font-bold text-xs underline"
                                >
                                  {getLanguage(LanguageKey.LOGIN)}
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div
                            className="footer-bg-card w-full h-[4.375rem] flex flex-col items-center justify-center rounded-b-md"
                            data-v-9fd05652
                          ></div>
                        </form>
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
                    <i className="icon icon-age-limit-updated text-2xl" />{" "}
                    Underage gambling is an offence
                  </div>
                  <div className="flex flex-col gap-2 text-[11px]">
                    <i className="icon icon-restricted-territories text-2xl" />{" "}
                    Restricted territories
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
