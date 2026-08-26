import { useNavigate } from "react-router-dom";
import { useEditButtonValuesMutation } from "../../redux/features/events/events";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const Settings = () => {
  const { getLanguage } = useLanguage();
  const navigate = useNavigate();
  const [editButtonValue] = useEditButtonValuesMutation();
  const stakes = JSON.parse(localStorage.getItem("buttonValue"));
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      buttonGameValues: stakes,
    },
  });

  const buttonGameValues = watch("buttonGameValues");

  const onSubmit = async () => {
    const payload = {
      game: buttonGameValues?.map((btn) => ({
        label: parseFloat(btn?.label),
        value: parseFloat(btn?.value),
      })),
    };

    const res = await editButtonValue(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      localStorage.removeItem("buttonValue");
      const gameButtonsValues = buttonGameValues;
      localStorage.setItem("buttonValue", JSON.stringify(gameButtonsValues));
      navigate("/");
    }
  };

  return (
    <div
      className="block relative w-full md:w-[calc(100%-5.625rem)] md:pl-[0.375rem] font-cera-round-pro pt-0"
      data-v-c78ea7eb
    >
      <div className="w-full relative bg-getitem-bg h-[3.125rem] my-1 px-3 flex items-center text-[1.1rem] font-bold">
        {getLanguage(LanguageKey.SETTINGS)}
      </div>
      <div className="block relative w-full py-1 px-3 md:px-0 m-auto font-cera-round-pro">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full shadow py-5 px-3 rounded bg-ghost-white border-jupiter border-[0.063rem] border-solid box-border"
        >
          <div className="font-cera-pro">
            <div className="w-full md:w-1/2 grid grid-cols-4 gap-3">
              {stakes?.map((stake, i) => {
                return (
                  <div key={i}>
                    <input
                      {...register(`buttonGameValues.${i}.value`)}
                      type="text"
                      className="appearance-none text-center border rounded-[2.813rem] w-full py-2 px-3 bg-transparent text-site-color border-card-description leading-tight focus:ring-1 focus:ring-btn-primary focus:outline-none"
                      defaultValue={stake?.value}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between pt-6">
            <button
              type="submit"
              className="w-full md:w-auto relative rounded-[1.875rem] bg-btn-primary h-[2.375rem] flex flex-row items-center justify-center py-[0.688rem] px-[4.313rem] box-border text-center text-base text-white"
            >
              <div className="w-[21.625rem] md:w-auto relative leading-[120%] font-semibold inline-block shrink-0">
                {getLanguage(LanguageKey.OK)}
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
