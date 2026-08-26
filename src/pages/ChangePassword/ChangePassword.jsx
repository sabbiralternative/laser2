import { useForm } from "react-hook-form";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const ChangePassword = () => {
  const { getLanguage } = useLanguage();
  const [handleChangePassword] = useChangePasswordMutation();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
      nonce: crypto.randomUUID(),
    };

    const res = await handleChangePassword(payload).unwrap();

    if (res.success) {
      localStorage.removeItem("changePassword");
      toast.success(res?.result?.message);
      navigate("/");
    } else {
      toast.error(res?.error?.errorMessage || res?.error);
    }
  };
  return (
    <div
      className="block relative w-full md:w-[calc(100%-5.625rem)] md:pl-[0.375rem] font-cera-round-pro pt-0"
      data-v-c78ea7eb
    >
      <div className="bg-page-content" data-v-7b3ac909 data-v-c78ea7eb>
        <div
          className="w-full relative bg-getitem-bg h-[3.125rem] my-1 px-3 flex items-center text-[1.1rem] font-bold"
          data-v-7b3ac909
        >
          {getLanguage(LanguageKey.CHANGE_PASSWORD)}
        </div>
        <section
          className="h-full1 gradient-form change-pass-box md:h-screen1 font-cera-pro min-h-screen"
          data-v-7b3ac909
        >
          <div className="py-1 px-3 md:px-0 h-full" data-v-7b3ac909>
            <div
              className="md:flex justify-center items-center flex-wrap h-full text-gray-800"
              data-v-7b3ac909
            >
              <div className="xl:w-full" data-v-7b3ac909>
                <div
                  className="block w-full relative py-3 md:py-1 rounded-md bg-ghost-white border-jupiter border-[0.063rem] border-solid box-border min-h-[21rem] md:min-h-[11.25rem]"
                  data-v-7b3ac909
                >
                  <div
                    className="lg:flex lg:flex-wrap g-0 text-site-color"
                    data-v-7b3ac909
                  >
                    <div className="px-4" data-v-7b3ac909>
                      <div className="pt-3" data-v-7b3ac909>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="form-change-pas text-sm md:grid md:grid-cols-3 md:gap-3 md:w-2/3"
                          data-v-7b3ac909
                        >
                          <div className="mb-4 relative" data-v-7b3ac909>
                            <label
                              htmlFor="cpass"
                              className="text-xs ml-1 font-medium"
                              data-v-7b3ac909
                            >
                              {getLanguage(LanguageKey.NEW_PASSWORD)}
                            </label>
                            <input
                              {...register("password", { required: true })}
                              className="mt-2 w-full rounded-[1.875rem] bg-transparent border-card-border border-[0.063rem] border-solid box-border h-[2.875rem] text-left text-site-color pl-5 focus:ring-1 focus:ring-btn-primary focus:outline-none"
                              type="password"
                              data-v-7b3ac909
                            />
                            <svg
                              viewBox="0 0 640 512"
                              className="absolute bottom-4 right-5"
                              aria-hidden="true"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              data-v-7e44f4d4
                              data-v-7b3ac909
                              style={{
                                height: "1em",
                                verticalAlign: "-0.125em",
                                transformOrigin: "center center",
                                overflow: "visible",
                              }}
                            >
                              <g
                                transform="translate(320 256)"
                                transformOrigin="160 0"
                                data-v-7e44f4d4
                              >
                                <g
                                  transform="translate(0,0) scale(1,1) "
                                  data-v-7e44f4d4
                                >
                                  <path
                                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z"
                                    fill="currentColor"
                                    transform="translate(-256 -256)"
                                    data-v-7e44f4d4
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="mb-4 relative" data-v-7b3ac909>
                            <label
                              htmlFor="cpass"
                              className="text-xs ml-1 font-medium"
                              data-v-7b3ac909
                            >
                              {getLanguage(LanguageKey.NEW_PASSWORD)}
                            </label>
                            <input
                              {...register("newPassword", {
                                required: true,
                              })}
                              className="mt-2 w-full rounded-[1.875rem] bg-transparent border-card-border border-[0.063rem] border-solid box-border h-[2.875rem] text-left text-site-color pl-5 focus:ring-1 focus:ring-btn-primary focus:outline-none"
                              type="password"
                              data-v-7b3ac909
                            />
                            <svg
                              viewBox="0 0 640 512"
                              className="absolute bottom-4 right-5"
                              aria-hidden="true"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              data-v-7e44f4d4
                              data-v-7b3ac909
                              style={{
                                height: "1em",
                                verticalAlign: "-0.125em",
                                transformOrigin: "center center",
                                overflow: "visible",
                              }}
                            >
                              <g
                                transform="translate(320 256)"
                                transformOrigin="160 0"
                                data-v-7e44f4d4
                              >
                                <g
                                  transform="translate(0,0) scale(1,1) "
                                  data-v-7e44f4d4
                                >
                                  <path
                                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z"
                                    fill="currentColor"
                                    transform="translate(-256 -256)"
                                    data-v-7e44f4d4
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="mb-4 relative" data-v-7b3ac909>
                            <label
                              htmlFor="cpass"
                              className="text-xs ml-1 font-medium"
                              data-v-7b3ac909
                            >
                              {getLanguage(LanguageKey.CONFIRM_PASSWORD)}
                            </label>
                            <input
                              {...register("newPasswordConfirm", {
                                required: true,
                              })}
                              className="mt-2 w-full rounded-[1.875rem] bg-transparent border-card-border border-[0.063rem] border-solid box-border h-[2.875rem] text-left text-site-color pl-5 focus:ring-1 focus:ring-btn-primary focus:outline-none"
                              type="password"
                              data-v-7b3ac909
                            />
                            <svg
                              viewBox="0 0 640 512"
                              className="absolute bottom-4 right-5"
                              aria-hidden="true"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              data-v-7e44f4d4
                              data-v-7b3ac909
                              style={{
                                height: "1em",
                                verticalAlign: "-0.125em",
                                transformOrigin: "center center",
                                overflow: "visible",
                              }}
                            >
                              <g
                                transform="translate(320 256)"
                                transformOrigin="160 0"
                                data-v-7e44f4d4
                              >
                                <g
                                  transform="translate(0,0) scale(1,1) "
                                  data-v-7e44f4d4
                                >
                                  <path
                                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z"
                                    fill="currentColor"
                                    transform="translate(-256 -256)"
                                    data-v-7e44f4d4
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div
                            className="mt-4 md:mt-0 flex items-center justify-between pb-6 text-sm"
                            data-v-7b3ac909
                          >
                            <button
                              type="submit"
                              className="mt-2 w-full relative rounded-[1.875rem] bg-btn-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.688rem] px-[4.313rem] box-border text-center text-base text-white font-px-16px-semibold"
                              data-v-7b3ac909
                            >
                              <div
                                className="w-[21.625rem] relative leading-[120%] font-semibold inline-block shrink-0"
                                data-v-7b3ac909
                              >
                                {getLanguage(LanguageKey.SAVE)}
                              </div>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default ChangePassword;
