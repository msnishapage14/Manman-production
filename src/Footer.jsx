import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
const index = () => {
  const [mode, setMode] = useState('auto');
  return (
    <div className="pt-12">
      <footer id="footer" className="relative z-50 dark:bg-gray-900 pt-24">
        <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Components
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Templates
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Pricing
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          FAQ
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <a
                        href="javascript:void(0)"
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                      >
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Free components
                        </a>
                      </Link>
                    </li>

                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Blog
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Changelog
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Terms of service
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                  <div className="flex items-center mb-6">
                    <a href="javascript:void(0)">
                      <div className="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand ">
                        <svg
                          className="footer-icon feather feather-github"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)">
                      <div className="pl-4">
                        <svg
                          className="footer-icon feather feather-twitter text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand "
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="relative w-36">
                    {mode == 'auto' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-device-laptop"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={3} y1={19} x2={21} y2={19} />
                        <rect x={5} y={6} width={14} height={10} rx={1} />
                      </svg>
                    )}
                    {mode == 'light' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-brightness-up"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx={12} cy={12} r={3} />
                        <line x1={12} y1={5} x2={12} y2={3} />
                        <line x1={17} y1={7} x2="18.4" y2="5.6" />
                        <line x1={19} y1={12} x2={21} y2={12} />
                        <line x1={17} y1={17} x2="18.4" y2="18.4" />
                        <line x1={12} y1={19} x2={12} y2={21} />
                        <line x1={7} y1={17} x2="5.6" y2="18.4" />
                        <line x1={6} y1={12} x2={4} y2={12} />
                        <line x1={7} y1={7} x2="5.6" y2="5.6" />
                      </svg>
                    )}
                    {mode == 'dark' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-moon"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                      </svg>
                    )}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none absolute inset-0 m-auto mr-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-chevron-down"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 flex flex-col justify-center items-center">
          <Link href="javascript:void(0)">
            <a>
              <svg
                className="dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={86}
                height={58}
                viewBox="0 0 86 58"
                fill="none"
              >
                <path
                  d="M42.4701 4.49449H47.7911V0H42.4701V4.49449Z"
                  fill="#E2E2E2"
                />
                <path
                  d="M47.7914 4.49449H53.1124V0H47.7914V4.49449Z"
                  fill="#FF3565"
                />
                <path
                  d="M42.4701 8.98888H47.7911V4.49438H42.4701V8.98888Z"
                  fill="#FF3565"
                />
                <path
                  d="M47.7914 8.98888H53.1124V4.49438H47.7914V8.98888Z"
                  fill="#E2E2E2"
                />
                <path
                  d="M75.0956 23.7122L86.0001 8.98898H73.2641L65.5874 20.8944V0H55.0228V39.1479H65.5874V32.7501L67.6415 29.9918L72.5134 39.1479H85.485L75.0956 23.7122Z"
                  fill="currentColor"
                />
                <path
                  d="M42.5478 28.2899C42.5421 28.2956 42.5356 28.3021 42.5307 28.3086C42.4859 30.6529 40.5794 32.5423 38.2237 32.5423C35.8403 32.5423 33.9085 30.6105 33.9085 28.2271V0H23.4141V29.1628C23.4141 36.1931 29.8909 39.143 34.7815 39.143C39.7708 39.143 41.1133 37.9766 42.5478 36.7026V39.1479H53.1124V10.7993H42.5478V28.2899Z"
                  fill="#FF3565"
                />
                <path
                  d="M42.4704 28.8132C42.1827 30.9153 40.4058 32.5423 38.2237 32.5423C35.8403 32.5423 33.9085 30.6105 33.9085 28.2271V0H23.4141V29.1628C23.4141 36.1931 29.8909 39.143 34.7815 39.143C39.6811 39.143 41.0644 38.0173 42.4704 36.7702V28.8132Z"
                  fill="currentColor"
                />
                <path
                  d="M42.5479 39.1479H53.1124V38.0271H42.5479V39.1479Z"
                  fill="#FF3565"
                />
                <path
                  d="M42.4701 39.1479H53.1121V10.7993H42.4701V39.1479Z"
                  fill="#FF3565"
                />
                <path
                  d="M0 0V9.76985H10.5059V39.1479H21.6851V9.78371H23.4139V10.3298H33.9084V0H0Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
};
export default index;
