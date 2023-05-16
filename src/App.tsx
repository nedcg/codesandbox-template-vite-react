function App() {
  return (
    <div className="p-4 mx-auto mt-16 mb-[86px] flex flex-col gap-4 w-full max-w-lg">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 mb-4 sm:mt-10 mt-2">
          <h1 className="flex items-center gap-2 text-4xl font-medium text-gray-900 dark:text-slate-50 max-h-[36px] sm:max-h-[44px]">
            Trade
          </h1>
          <button className="text-sm flex items-center gap-1 font-bold text-gray-600 dark:text-slate-400 hover:text-blue cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              width={16}
              height={16}
            >
              <path
                fillRule="evenodd"
                d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                clipRule="evenodd"
              />
            </svg>
            <span className="flex items-baseline gap-1 whitespace-nowrap scroll hide-scrollbar">
              1 SUSHI <span className="font-normal text-xs">($0.895892)</span> =
              0.0004915 ETH{" "}
              <span className="font-normal text-xs">($1822.66)</span>
            </span>
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button
              className="btn font-medium flex items-center justify-center gap-2 cursor-pointer transition-all bg-white dark:bg-slate-600/10 hover:dark:bg-slate-600/20 active:dark:bg-slate-600/30 px-4 h-[32px] text-sm rounded-lg"
              testdata-id="undefined-button"
            >
              Swap
            </button>
            <div className="relative z-10">
              <button
                className="btn font-medium flex items-center justify-center gap-2 cursor-pointer transition-all hover:bg-white hover:dark:bg-slate-600/20 active:dark:bg-slate-600/30 text-gray-700 hover:text-gray-800 active:text-gray-900 dark:text-slate-200 hover:dark:text-slate-100 active:dark:text-slate-50 px-4 h-[32px] text-sm rounded-lg pointer-events-none opacity-40"
                testdata-id="undefined-button"
              >
                Limit
              </button>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            width={26}
            height={26}
            className="cursor-pointer hover:animate-spin-slow hover:dark:text-slate-50 dark:text-slate-200 text-gray-700 hover:text-gray-900 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div>
          <div className="bg-white dark:bg-slate-900 rounded-xl mb-4">
            <div className="flex flex-col bg-gradient-to-r from-blue/[0.15] to-pink/[0.15] hover:from-blue/20 hover:to-pink/20 saturate-[2] dark:saturate-[1] px-4 py-3 rounded-xl">
              <div className="flex gap-3 items-center">
                <svg
                  strokeWidth={1}
                  width={24}
                  height={24}
                  className="text-blue"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width={256} height={256} fill="none" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={24}
                    d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={24}
                    points="208 48 232 72 208 96"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={24}
                    points="208 160 232 184 208 208"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={24}
                    d="M152.76794 93.858A64.00219 64.00219 0 0 1 200.93555 72H232M32 184H55.06445a64.00212 64.00212 0 0 0 48.16769-21.85814"
                  />
                </svg>
                <div className="flex flex-col">
                  <h1 className="flex gap-1.5 items-center font-semibold text-gray-900 dark:text-slate-50">
                    <span className="flex gap-1.5 items-center bg-gradient-to-r from-blue to-pink text-transparent bg-clip-text">
                      Cross Chain
                    </span>
                    <div className="flex justify-center" data-headlessui-state>
                      <label
                        id="headlessui-menu-button-:ru:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          width={16}
                          height={16}
                          className="text-gray-400 dark:text-slate-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </label>
                    </div>
                  </h1>
                  <span className="font-medium text-sm text-gray-700 dark:text-slate-400">
                    Swap tokens from one network to another.
                  </span>
                </div>
                <div className="flex justify-end flex-grow">
                  <button
                    className="bg-gray-300 dark:bg-white/[0.12] flex items-center relative inline-flex flex-shrink-0 rounded-full cursor-pointer ease-in-out duration-200 "
                    id="headlessui-switch-:rd:"
                    role="switch"
                    type="button"
                    tabIndex={0}
                    aria-checked="false"
                    data-headlessui-state
                    style={{ height: "30px", width: "48px" }}
                  >
                    <span
                      id
                      className="translate-x-[2px] bg-white transition-colors transition-transform pointer-events-none p-1 rounded-full ease-in-out duration-200 inline-flex items-center justify-center"
                      style={{ height: "26px", width: "26px" }}
                    />
                  </button>
                </div>
              </div>
              <div className="hidden pt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      className="z-10 group hover:bg-white/30 hover:dark:bg-white/[0.16] p-2 border-white transition-all rounded-full cursor-pointer"
                    >
                      <div className="transition-transform rotate-0 group-hover:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4 text-blue"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-[60px] border-gray-200 dark:border-slate-800">
                    <div className="z-10">
                      <div data-headlessui-state>
                        <button
                          className="transition-[background] bg-white/30 dark:bg-white/[0.08] hover:bg-white/50 hover:dark:bg-white/[0.16] pl-2 pr-3 font-medium flex flex-col rounded-xl py-1.5 w-full"
                          type="button"
                          aria-expanded="false"
                          data-headlessui-state
                          id="headlessui-popover-button-:re:"
                        >
                          <span className="flex gap-1 items-center font-medium px-1 text-xs text-gray-500 dark:text-slate-400 pt-0.5">
                            From
                          </span>
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-1 overflow-hidden">
                              <svg
                                viewBox="0 0 128 128"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                className="dark:text-white text-gray-700"
                              >
                                <path
                                  d="M63.993 24v29.573l24.99 11.169L63.993 24Z"
                                  fill="currentColor"
                                  fillOpacity="0.602"
                                />
                                <path
                                  d="M63.993 24 39 64.742l24.993-11.17V24Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M63.993 83.906V104L89 69.396l-25.007 14.51Z"
                                  fill="currentColor"
                                  fillOpacity="0.602"
                                />
                                <path
                                  d="M63.993 104V83.902L39 69.396 63.993 104Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="m63.993 79.255 24.99-14.513-24.99-11.162v25.675Z"
                                  fill="currentColor"
                                  fillOpacity="0.2"
                                />
                                <path
                                  d="m39 64.742 24.993 14.513V53.58L39 64.742Z"
                                  fill="currentColor"
                                  fillOpacity="0.602"
                                />
                              </svg>
                              <span className="w-full text-left truncate">
                                Ethereum
                              </span>
                            </div>
                            <div className="min-w-4 min-h-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                aria-hidden="true"
                                width={16}
                                height={16}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="z-10">
                      <div data-headlessui-state>
                        <button
                          className="transition-[background] bg-white/30 dark:bg-white/[0.08] hover:bg-white/50 hover:dark:bg-white/[0.16] pl-2 pr-3 font-medium flex flex-col rounded-xl py-1.5 w-full"
                          type="button"
                          aria-expanded="false"
                          data-headlessui-state
                          id="headlessui-popover-button-:rg:"
                        >
                          <span className="flex gap-1 items-center font-medium px-1 text-xs text-gray-500 dark:text-slate-400 pt-0.5">
                            To
                          </span>
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start gap-1 overflow-hidden">
                              <svg
                                viewBox="0 0 128 128"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                className="dark:text-white text-gray-700"
                              >
                                <path
                                  d="M63.993 24v29.573l24.99 11.169L63.993 24Z"
                                  fill="currentColor"
                                  fillOpacity="0.602"
                                />
                                <path
                                  d="M63.993 24 39 64.742l24.993-11.17V24Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M63.993 83.906V104L89 69.396l-25.007 14.51Z"
                                  fill="currentColor"
                                  fillOpacity="0.602"
                                />
                                <path
                                  d="M63.993 104V83.902L39 69.396 63.993 104Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="m63.993 79.255 24.99-14.513-24.99-11.162v25.675Z"
                                  fill="currentColor"
                                  fillOpacity="0.2"
                                />
                                <path
                                  d="m39 64.742 24.993 14.513V53.58L39 64.742Z"
                                  fill="currentColor"
                                  fillOpacity="0.602"
                                />
                              </svg>
                              <span className="w-full text-left truncate">
                                Ethereum
                              </span>
                            </div>
                            <div className="min-w-4 min-h-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                aria-hidden="true"
                                width={16}
                                height={16}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 overflow-hidden pb-2 p-3 bg-white dark:bg-slate-800 rounded-xl">
            <div className="relative flex items-center gap-4">
              <input
                inputMode="decimal"
                title="Token Amount"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                autoComplete="new-password"
                pattern="^[0-9]*[.,]?[0-9]*$"
                placeholder={"0"}
                min={0}
                minLength={1}
                maxLength={79}
                className="text-gray-900 dark:text-slate-50 text-left text-base font-medium border-none focus:outline-none focus:ring-0 p-0 bg-transparent w-full truncate font-medium without-ring !text-3xl py-1"
                testdata-id="swap-from-input"
                type="text"
                defaultValue
              />
              <button
                id="swap-from-button"
                testdata-id="swap-from-button"
                className="flex items-center gap-1 text-xl py-2 pl-2 pr-2 rounded-full font-medium bg-black/[0.06] hover:bg-black/[0.12] dark:bg-white/[0.06] hover:dark:bg-white/[0.12]"
              >
                <div className="w-[28px] h-[28px] mr-0.5">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2728%27%20height=%2728%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      />
                    </span>
                    <img
                      alt="Ether"
                      src="https://cdn.sushi.com/image/upload/f_auto,c_limit,w_64,q_auto/tokens/1/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2.jpg"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="rounded-full"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                      srcSet="https://cdn.sushi.com/image/upload/f_auto,c_limit,w_32,q_auto/tokens/1/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2.jpg 1x, https://cdn.sushi.com/image/upload/f_auto,c_limit,w_64,q_auto/tokens/1/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2.jpg 2x"
                    />
                  </span>
                </div>
                ETH
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  aria-hidden="true"
                  className="ml-1"
                  width={16}
                  height={16}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                style={{
                  position: "fixed",
                  top: "1px",
                  left: "1px",
                  width: "1px",
                  height: "0px",
                  padding: "0px",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  borderWidth: "0px",
                  display: "none",
                }}
              />
            </div>
            <div className="flex flex-row items-center justify-between h-[36px]">
              <p className="font-medium text-lg flex items-baseline select-none text-gray-500 dark:text-slate-400">
                $ 0.<span className="text-sm font-semibold">00</span>
              </p>
              <button
                data-testid="swap-from-balance-button"
                type="button"
                className="text-blue hover:text-blue-600 active:text-blue-700 hover:dark:text-slate-300 font-medium flex gap-1.5 items-center py-1 dark:text-slate-400 px-2 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  width={18}
                  height={18}
                >
                  <path
                    fill="currentColor"
                    d="M15.6 4.6H1.85v-.55l12.1-.968v.968h1.65V2.4c0-1.21-.98-2.059-2.177-1.888L2.378 2.089C1.18 2.26.2 3.39.2 4.6v11a2.2 2.2 0 002.2 2.2h13.2a2.2 2.2 0 002.2-2.2V6.8a2.2 2.2 0 00-2.2-2.2zm-1.65 7.707a1.65 1.65 0 01-.63-3.176 1.65 1.65 0 11.63 3.176z"
                  />
                </svg>
                <span className="text-lg">
                  0.<span className="text-sm font-semibold">00</span>
                </span>
              </button>
            </div>
          </div>
          <div className="left-0 right-0 mt-[-9px] mb-[-9px] flex items-center justify-center">
            <button
              type="button"
              className="z-10 group bg-gray-100 hover:bg-gray-200 hover:dark:bg-slate-700 dark:bg-slate-900 p-2 border-white transition-all rounded-full cursor-pointer"
            >
              <div className="transition-transform rotate-0 group-hover:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 text-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="space-y-2 overflow-hidden pb-2 p-3 bg-white dark:bg-slate-800 rounded-xl">
            <div className="relative flex items-center gap-4">
              <input
                inputMode="decimal"
                title="Token Amount"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                autoComplete="new-password"
                pattern="^[0-9]*[.,]?[0-9]*$"
                placeholder={"0"}
                min={0}
                minLength={1}
                maxLength={79}
                className="text-gray-900 dark:text-slate-50 text-left text-base font-medium border-none focus:outline-none focus:ring-0 p-0 bg-transparent w-full truncate font-medium without-ring !text-3xl py-1"
                testdata-id="swap-to-input"
                disabled
                readOnly
                type="text"
                defaultValue
              />
              <button
                id="swap-to-button"
                testdata-id="swap-to-button"
                className="flex items-center gap-1 text-xl py-2 pl-2 pr-2 rounded-full font-medium bg-black/[0.06] hover:bg-black/[0.12] dark:bg-white/[0.06] hover:dark:bg-white/[0.12]"
              >
                <div className="w-[28px] h-[28px] mr-0.5">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2728%27%20height=%2728%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      />
                    </span>
                    <img
                      alt="SushiToken"
                      src="https://cdn.sushi.com/image/upload/f_auto,c_limit,w_64,q_auto/tokens/1/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2.jpg"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="rounded-full"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                      srcSet="https://cdn.sushi.com/image/upload/f_auto,c_limit,w_32,q_auto/tokens/1/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2.jpg 1x, https://cdn.sushi.com/image/upload/f_auto,c_limit,w_64,q_auto/tokens/1/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2.jpg 2x"
                    />
                  </span>
                </div>
                SUSHI
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  aria-hidden="true"
                  className="ml-1"
                  width={16}
                  height={16}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                style={{
                  position: "fixed",
                  top: "1px",
                  left: "1px",
                  width: "1px",
                  height: "0px",
                  padding: "0px",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  borderWidth: "0px",
                  display: "none",
                }}
              />
            </div>
            <div className="flex flex-row items-center justify-between h-[36px]">
              <p className="font-medium text-lg flex items-baseline select-none text-gray-500 dark:text-slate-400">
                $ 0.<span className="text-sm font-semibold">00</span>
              </p>
              <button
                data-testid="swap-to-balance-button"
                type="button"
                className="text-gray-500 dark:text-slate-500 font-medium flex gap-1.5 items-center py-1 dark:text-slate-400 px-2 rounded-md"
                disabled
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  width={18}
                  height={18}
                >
                  <path
                    fill="currentColor"
                    d="M15.6 4.6H1.85v-.55l12.1-.968v.968h1.65V2.4c0-1.21-.98-2.059-2.177-1.888L2.378 2.089C1.18 2.26.2 3.39.2 4.6v11a2.2 2.2 0 002.2 2.2h13.2a2.2 2.2 0 002.2-2.2V6.8a2.2 2.2 0 00-2.2-2.2zm-1.65 7.707a1.65 1.65 0 01-.63-3.176 1.65 1.65 0 11.63 3.176z"
                  />
                </svg>
                <span className="text-lg">
                  0.<span className="text-sm font-semibold">00</span>
                </span>
              </button>
            </div>
          </div>
          <div className="pt-4">
            <div className="relative w-full" data-headlessui-state>
              <button
                className="btn w-full font-medium flex items-center justify-center gap-2 cursor-pointer transition-all bg-blue hover:bg-blue-600 active:bg-blue-700 text-white px-6 h-[52px] rounded-xl text-base font-semibold"
                testdata-id="connect-wallet-button-button"
                aria-expanded="false"
                data-headlessui-state
                type="button"
                id="headlessui-popover-button-:r10:"
              >
                <span className="hidden md:block">Connect Wallet</span>
                <span className="block md:hidden">Connect Wallet</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          top: "1px",
          left: "1px",
          width: "1px",
          height: "0px",
          padding: "0px",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0px, 0px, 0px, 0px)",
          whiteSpace: "nowrap",
          borderWidth: "0px",
          display: "none",
        }}
      />
      <div className="h-[68px] w-full" />
    </div>
  );
}

export default App;
