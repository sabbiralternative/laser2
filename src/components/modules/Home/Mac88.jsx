import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { API } from "../../../api";
import toast from "react-hot-toast";

const Mac88 = () => {
  const navigate = useNavigate();
  const { token, bonusToken } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [warnMessage, setWarnMessage] = useState("");

  useEffect(() => {
    const getGames = async () => {
      const res = await AxiosSecure.post(API.mac88, {
        gameList: "ALL",
        product: "ALL",
        isHome: false,
      });

      if (res?.status === 200) {
        const result = res?.data;
        setData(result);
      }
    };
    getGames();
  }, []);

  const handleAuraCasino = (code, name) => {
    if (token) {
      if (bonusToken) {
        return setWarnMessage("Bonus wallet is available only on sports.");
      } else {
        navigate(`/casino/${name.replace(/ /g, "")}/${code}`);
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (warnMessage) {
      return toast.error(warnMessage);
    }
  }, [warnMessage]);
  return (
    <div className="w-full px-[0.625rem] overflow-hidden" data-v-d5bc6381>
      <div className="w-full py-3 overflow-hidden" data-v-d5bc6381>
        <div className="flex gap-3 overflow-x-auto w-screen" data-v-d5bc6381>
          {data?.data?.map((item, i) => (
            <div
              onClick={() => handleAuraCasino(item?.game_id, item?.game_name)}
              key={i}
              className="h-[4.75rem] w-[4.75rem] rounded-[0.625rem] cursor-pointer skeleton shrink-0 relative flex flex-col items-center justify-center"
              data-v-d5bc6381
            >
              <div className="lazy-image" data-v-4dc478d3 data-v-d5bc6381>
                <img
                  src={item?.img}
                  className="h-24 w-24 rounded-[0.625rem] object-cover"
                  data-v-4dc478d3
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mac88;
