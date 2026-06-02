import { useSelector } from "react-redux";

const UserButton = ({ setShowRightDrawer }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      onClick={() => setShowRightDrawer(true)}
      className="py-0 px-2 md:pl-[0.188rem] md:h-[2.5rem] flex items-center flex-row justify-between bg-btn-primary rounded-[1.875rem] md:rounded-[2.625rem] mr-2"
      data-v-e9e2d909
    >
      <div
        className="flex items-center text-sm md:h-9 md:w-9 md:bg-white md:rounded-full font-cera-round-pro"
        data-v-e9e2d909
      >
        <svg
          width={16}
          height={19}
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-6 h-6 m-auto min-h-[1.75rem] md:hidden p-1"
          data-v-e9e2d909
        >
          <g id="User">
            <circle
              id="Ellipse 33"
              cx={4}
              cy={4}
              r={4}
              transform="matrix(-1 0 0 1 12 1)"
              stroke="#fff"
              strokeWidth="1.5"
            />
            <path
              id="Rectangle 2"
              d="M1 14.9347C1 14.0743 1.54085 13.3068 2.35109 13.0175V13.0175C6.00404 11.7128 9.99596 11.7128 13.6489 13.0175V13.0175C14.4591 13.3068 15 14.0743 15 14.9347V16.2502C15 17.4376 13.9483 18.3498 12.7728 18.1818L11.8184 18.0455C9.28565 17.6837 6.71435 17.6837 4.18162 18.0455L3.22721 18.1818C2.0517 18.3498 1 17.4376 1 16.2502V14.9347Z"
              stroke="#fff"
              strokeWidth="1.5"
            />
          </g>
        </svg>
        <svg
          width={16}
          height={19}
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 m-auto min-h-[1.75rem] hidden md:block p-1"
          data-v-e9e2d909
        >
          <g id="User">
            <circle
              id="Ellipse 33"
              cx={4}
              cy={4}
              r={4}
              transform="matrix(-1 0 0 1 12 1)"
              stroke="#000"
              strokeWidth="1.5"
            />
            <path
              id="Rectangle 2"
              d="M1 14.9347C1 14.0743 1.54085 13.3068 2.35109 13.0175V13.0175C6.00404 11.7128 9.99596 11.7128 13.6489 13.0175V13.0175C14.4591 13.3068 15 14.0743 15 14.9347V16.2502C15 17.4376 13.9483 18.3498 12.7728 18.1818L11.8184 18.0455C9.28565 17.6837 6.71435 17.6837 4.18162 18.0455L3.22721 18.1818C2.0517 18.3498 1 17.4376 1 16.2502V14.9347Z"
              stroke="#000"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
      <div
        className="text-xs flex flex-col items-center cursor-pointer text-white py-[0.388rem] md:py-1 mx-2 min-w-[3.125rem]"
        data-v-e9e2d909
      >
        <span className="truncate" data-v-e9e2d909>
          {user}
        </span>
        {/* <span className data-v-e9e2d909>
          1
        </span> */}
      </div>
      <div
        className="flex text-primary-color font-cera-round-pro py-1 md:px-2 rounded items-end md:items-center leading-4"
        data-v-e9e2d909
      >
        <svg
          viewBox="0 0 448 512"
          className
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
            transform="translate(224 256)"
            transformOrigin="112 0"
            data-v-7e44f4d4
          >
            <g transform="translate(0,0) scale(1,1) " data-v-7e44f4d4>
              <path
                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                fill="currentColor"
                transform="translate(-256 -256)"
                data-v-7e44f4d4
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default UserButton;
