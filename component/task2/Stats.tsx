"use client";
import Image from "next/image";
import { useState } from "react";

const Stats = () => {
  const [isHover, setIsHover] = useState(false);
  const [selectedStats, setSelectedStats] = useState<string | null>(null);
  const [isFirst, setIsFirst] = useState(true);
  const [isHoveringSecondCard, setIsHoveringSecondCard] = useState(false);
  const [isHoveringThirdCard, setIsHoveringThirdCard] = useState(false);
  return (
    <div className="flex flex-row gap-8 w-304 h-115.25 relative">
      <div
        className={`flex flex-col -top-14 ${isFirst && isHoveringSecondCard ? "left-190 opacity-100" : isFirst && isHoveringThirdCard ? "left-260 opacity-100" : "opacity-0"} gap-1 z-20 absolute `}
      >
        <p className="font-outfit font-normal text-[#2B2B2B] text-[16px] leading-[100%]">
          Click me!
        </p>
        <Image
          width={50}
          height={50}
          src={"/image/task2/arrow.png"}
          alt={"arrow"}
          unoptimized
        />
      </div>
      {/* first card */}
      <label
        htmlFor="all-courses"
        className="relative w-70 h-115.25  rounded-4xl bg-secondary-500 has-checked:w-148 transition-all duration-800 ease-bounce overflow-hidden has-checked:cursor-default cursor-pointer"
      >
        <input
          type="radio"
          name="stats"
          id="all-courses"
          defaultChecked
          className="hidden peer"
          onClick={() => {
            setSelectedStats("all-courses");
            setIsFirst(true);
          }}
        />
        <div className=" absolute -top-17.75 -left-30.5 w-160 h-160 rounded-full scale-100 bg-secondary-50 z-10 peer-checked:scale-0 transition-all duration-800 origin-[0%_100%]  ease-bounce"></div>
        <h1 className=" absolute font-nohemi text-[64px] leading-[120%] text-secondary-500 top-68.75 left-55.75 z-20 peer-checked:text-secondary-50 peer-checked:left-65.5 transition-all  duration-800  ease-bounce">
          +
        </h1>
        <div
          className="flex flex-row gap-2 absolute top-10 left-98.25 z-20 cursor-pointer text-secondary-50 opacity-0 peer-checked:opacity-100 transition-all duration-800  ease-bounce"
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          <p className="font-outfit font-semibold text-[18px] leading-[100%] text-nowrap">
            View all Courses
          </p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isHover ? "animate-side-float" : ""}`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3417 4.50833C10.7973 4.05272 11.536 4.05272 11.9916 4.50833L16.6583 9.175C17.1139 9.63061 17.1139 10.3693 16.6583 10.8249L11.9916 15.4916C11.536 15.9472 10.7973 15.9472 10.3417 15.4916C9.8861 15.036 9.8861 14.2973 10.3417 13.8417L13.0168 11.1666L4.16667 11.1666C3.52233 11.1666 3 10.6443 3 9.99996C3 9.35563 3.52233 8.83329 4.16667 8.83329H13.0168L10.3417 6.15825C9.8861 5.70264 9.8861 4.96395 10.3417 4.50833Z"
              fill="#F9EBEC"
            />
          </svg>
        </div>
        <div className="absolute top-31.5 left-184.75 flex flex-row gap-10.5 z-20 items-center opacity-0 peer-checked:left-16.5 peer-checked:opacity-100 transition-all duration-800  ease-bounce">
          <Image
            width={83}
            height={83}
            src={"/image/task2/image1.png"}
            alt="react"
            unoptimized
          />
          <Image
            width={83}
            height={83}
            src={"/image/task2/image2.png"}
            alt="react"
            unoptimized
          />
          <Image
            width={83}
            height={83}
            src={"/image/task2/image3.png"}
            alt="react"
            unoptimized
          />
          <Image
            width={83}
            height={83}
            src={"/image/task2/image4.png"}
            alt="react"
            unoptimized
          />
        </div>
        <div className="absolute left-[35.5px] top-70.75 flex flex-row w-110.5 z-20 gap-6 items-center text-secondary-500 -rotate-90 origin-[23%_50%] peer-checked:text-secondary-50 peer-checked:left-18.75 peer-checked:rotate-0 transition-all duration-800  ease-bounce">
          <h1 className="font-nohemi text-[150px] leading-[120%] text-center rotate-90 [label:has(:checked)_&]:rotate-0 transition-all duration-800  ease-bounce">
            23
          </h1>
          <div className="flex flex-col gap-3">
            <h2 className="font-outfit font-bold text-[32px] leading-[100%]">
              All Courses
            </h2>
            <p className="font-outfit font-normal text-[18px] leading-[100%]">
              courses you&apos;re powering through right now.
            </p>
          </div>
        </div>
      </label>
      {/* second card */}
      <label
        onMouseEnter={() => {
          setIsHoveringSecondCard(true);
        }}
        onMouseLeave={() => {
          setIsHoveringSecondCard(false);
        }}
        htmlFor="upcoming-courses"
        className="relative w-70 h-115.25  rounded-4xl bg-secondary-500 has-checked:w-148 transition-all duration-800 ease-bounce overflow-hidden has-checked:cursor-default cursor-pointer"
      >
        <input
          type="radio"
          name="stats"
          id="upcoming-courses"
          defaultChecked={false}
          className="hidden peer"
          onClick={() => {
            setSelectedStats("upcoming-courses");
            setIsFirst(false);
          }}
        />

        <div className=" absolute -top-17.75 -left-30.5 size-160 rounded-full scale-100 bg-secondary-50 z-10 peer-checked:scale-0 transition-all duration-800 origin-[0%_100%]  ease-bounce"></div>
        <h1
          className={`${isHoveringSecondCard && isFirst ? "top-66.75 left-57 ease-out duration-300" : isHoveringThirdCard && isFirst ? "top-65.75 left-58.75 ease-out duration-300" : "top-64.75 left-57 ease-out duration-300"} absolute font-nohemi text-[64px] leading-[120%] text-secondary-500  z-20 peer-checked:text-secondary-50 peer-checked:left-61 transition-all  duration-800  ease-bounce`}
        >
          +
        </h1>
        <div
          className="flex flex-row gap-2 absolute top-10 left-98.25 z-20 cursor-pointer text-secondary-50 opacity-0 peer-checked:opacity-100 transition-all duration-800  ease-bounce"
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          <p className="font-outfit font-semibold text-[18px] leading-[100%] text-nowrap">
            View all Courses
          </p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isHover ? "animate-side-float" : ""}`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3417 4.50833C10.7973 4.05272 11.536 4.05272 11.9916 4.50833L16.6583 9.175C17.1139 9.63061 17.1139 10.3693 16.6583 10.8249L11.9916 15.4916C11.536 15.9472 10.7973 15.9472 10.3417 15.4916C9.8861 15.036 9.8861 14.2973 10.3417 13.8417L13.0168 11.1666L4.16667 11.1666C3.52233 11.1666 3 10.6443 3 9.99996C3 9.35563 3.52233 8.83329 4.16667 8.83329H13.0168L10.3417 6.15825C9.8861 5.70264 9.8861 4.96395 10.3417 4.50833Z"
              fill="#F9EBEC"
            />
          </svg>
        </div>
        <div
          className={`absolute top-31.5 ${selectedStats === "ongoing-courses" ? "left-128.5" : "-left-128.5"} flex flex-row gap-10.5 z-20 items-center opacity-0 peer-checked:left-16.5 peer-checked:opacity-100 transition-all duration-800  ease-bounce`}
        >
          <Image
            width={83}
            height={83}
            src={"/image/task2/image1.png"}
            alt="react"
            unoptimized
          />
          <Image
            width={83}
            height={83}
            src={"/image/task2/image2.png"}
            alt="react"
            unoptimized
          />
          <Image
            width={83}
            height={83}
            src={"/image/task2/image3.png"}
            alt="react"
            unoptimized
          />
          <Image
            width={83}
            height={83}
            src={"/image/task2/image4.png"}
            alt="react"
            unoptimized
          />
        </div>
        <div className="absolute left-10.75 top-72.25 flex flex-row w-105.5 z-20 gap-6 items-center text-secondary-500 -rotate-90 origin-[23%_50%] peer-checked:text-secondary-50 peer-checked:left-10.75 peer-checked:rotate-0 peer-checked:w-127.75 transition-all duration-800  ease-bounce">
          <h1 className="font-nohemi text-[150px] leading-[120%] text-center rotate-90 [label:has(:checked)_&]:rotate-0 transition-all duration-800  ease-bounce">
            05
          </h1>
          <div className="flex flex-col gap-3">
            <h2 className="font-outfit font-bold text-[32px] leading-[100%]">
              Upcoming Courses
            </h2>
            <p className="font-outfit font-normal text-[18px] leading-[100%]">
              exciting new courses waiting to boost your skills.
            </p>
          </div>
        </div>
      </label>
      {/* third card */}
      <label
        onMouseEnter={() => {
          setIsHoveringThirdCard(true);
        }}
        onMouseLeave={() => {
          setIsHoveringThirdCard(false);
        }}
        htmlFor="ongoing-courses"
        className="relative w-70 h-115.25  rounded-4xl bg-secondary-500 has-checked:w-148 transition-all duration-800 ease-bounce overflow-hidden has-checked:cursor-default cursor-pointer"
      >
        <input
          type="radio"
          name="stats"
          id="ongoing-courses"
          defaultChecked={false}
          className="hidden peer"
          onClick={() => {
            setSelectedStats("ongoing-courses");
            setIsFirst(false);
          }}
        />
        <div className=" absolute -top-17.75 -left-30.5 w-160 h-160 rounded-full scale-100 bg-secondary-50 z-10 peer-checked:scale-0 transition-all duration-800 origin-[0%_100%]  ease-bounce"></div>
        <h1
          className={`${isHoveringSecondCard && isFirst ? "top-68.75 left-51.75 ease-out duration-300" : isHoveringThirdCard && isFirst ? " top-67.75 left-53.75 ease-out duration-300" : "top-67.25 left-51.5 ease-out duration-300"} absolute font-nohemi text-[64px] leading-[120%] text-secondary-500  z-20 peer-checked:text-secondary-50 peer-checked:left-61.5 transition-all  duration-800  ease-bounce`}
        >
          +
        </h1>
        <div
          className="flex flex-row gap-2 absolute top-10 left-98.25 z-20 cursor-pointer text-secondary-50 opacity-0 peer-checked:opacity-100 transition-all duration-800  ease-bounce"
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          <p className="font-outfit font-semibold text-[18px] leading-[100%] text-nowrap">
            View all Courses
          </p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isHover ? "animate-side-float" : ""}`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3417 4.50833C10.7973 4.05272 11.536 4.05272 11.9916 4.50833L16.6583 9.175C17.1139 9.63061 17.1139 10.3693 16.6583 10.8249L11.9916 15.4916C11.536 15.9472 10.7973 15.9472 10.3417 15.4916C9.8861 15.036 9.8861 14.2973 10.3417 13.8417L13.0168 11.1666L4.16667 11.1666C3.52233 11.1666 3 10.6443 3 9.99996C3 9.35563 3.52233 8.83329 4.16667 8.83329H13.0168L10.3417 6.15825C9.8861 5.70264 9.8861 4.96395 10.3417 4.50833Z"
              fill="#F9EBEC"
            />
          </svg>
        </div>
        <div className="absolute top-31.5 -left-184.75 flex flex-row gap-10.5 z-20 items-center opacity-0 peer-checked:left-16.5 peer-checked:opacity-100 transition-all duration-800  ease-bounce">
          <Image
            width={83}
            height={83}
            src={"/image/task2/image1.png"}
            alt="react"
            unoptimized
          />
          <Image
            width={83}
            height={83}
            src={"/image/task2/image2.png"}
            alt="react"
            unoptimized
          />
          <Image
            width={83}
            height={83}
            src={"/image/task2/image3.png"}
            alt="react"
            unoptimized
          />
          <Image
            width={83}
            height={83}
            src={"/image/task2/image4.png"}
            alt="react"
            unoptimized
          />
        </div>
        <div className="absolute left-[36.5px] top-68.75 flex flex-row w-110.5 z-20 gap-6 items-center text-secondary-500 -rotate-90 origin-[23%_50%] peer-checked:text-secondary-50 peer-checked:left-17.75 peer-checked:rotate-0 peer-checked:w-112.25 transition-all duration-800  ease-bounce">
          <h1 className="font-nohemi text-[150px] leading-[120%] text-center rotate-90 [label:has(:checked)_&]:rotate-0 transition-all duration-800  ease-bounce">
            10
          </h1>
          <div className="flex flex-col gap-3">
            <h2 className="font-outfit font-bold text-[32px] leading-[100%]">
              Ongoing Courses
            </h2>
            <p className="font-outfit font-normal text-[18px] leading-[100%]">
              currently happening—don&apos;t miss out on the action!
            </p>
          </div>
        </div>
      </label>
    </div>
  );
};
export default Stats;
