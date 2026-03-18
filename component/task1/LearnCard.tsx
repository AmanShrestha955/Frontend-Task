"use client";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

const LearnCard = () => {
  const [next, setNext] = useState(false);
  return (
    <div className="w-148 h-85.25 group cursor-pointer float-left relative">
      <div className="w-148 h-85.25 rounded-2xl bg-[#5492A0] py-14.5 pl-8.75 flex flex-row relative justify-start items-center group-hover:-translate-x-150 group-hover:opacity-0 pointer-events-none transition-all duration-500 ease-in-out ">
        <div className="flex flex-col gap-8 max-w-87.75 max-h-56.25">
          <div className="flex flex-col gap-2.5 items-start">
            <h1 className="text-[32px] text-white leading-[120%] font-nohemi">
              Learn by Doing
            </h1>
            <h2 className="text-[24px] font-medium text-left leading-[100%] text-white font-outfit">
              Practical skills, real projects.
            </h2>
          </div>
          <p className="text-[18px] font-normal text-left leading-[120%] text-white font-outfit">
            Theory is great, but action is better. At SkillShikshya, you learn
            by doing. Hands-on projects and real-world scenarios help you build,
            break, and create—leading to true mastery.
          </p>
        </div>
        <Image
          width={180}
          height={367}
          src="/image/learn.png"
          alt="Learn"
          unoptimized
          className="absolute right-7 top-17 object-contain scale-130 animate-float "
        />
      </div>
      <div className="absolute flex flex-row top-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-in-out">
        {/* button */}
        <Button
          active={next}
          right={false}
          onClick={() => {
            if (next) {
              setNext(false);
            }
          }}
        />

        <svg
          width="592"
          height="341"
          viewBox="0 0 592 341"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M560 0C577.673 8.76194e-06 592 14.3269 592 32V97.8274C592 109.227 579.4 117 568 117C538.729 117 515 140.729 515 170C515 199.271 538.729 223 568 223C579.4 223 592 230.772 592 242.172V309C592 326.673 577.673 341 560 341H32C14.3269 341 0 326.673 0 309V242.172C0 230.772 12.6002 223 24 223C53.2711 223 77 199.271 77 170C77 140.729 53.2711 117 24 117C12.6002 117 0 109.227 0 97.8274V32C5.47654e-06 14.3269 14.3269 0 32 0H560Z"
            fill="#5492A0"
          />
        </svg>
        {next ? (
          <>
            <Image
              className="absolute bottom-0 left-6 scale-100"
              width={470}
              height={373}
              src="/image/image3.png"
              alt="image"
            />
            <p className="absolute font-nohemi text-[20px] w-88.25 text-center leading-[120%] left-29.75 top-10.25">
              Laptops, lessons, and a whole lot of growth!
            </p>
          </>
        ) : (
          <>
            <Image
              className="absolute bottom-0 right-0 scale-100"
              width={520}
              height={373}
              src="/image/image2.png"
              alt="image"
            />
            <p className="absolute font-nohemi text-[20px] w-60.25 leading-[120%] left-20 top-9">
              Focused faces—learning mode: ON!
            </p>
          </>
        )}

        {/* button */}
        <Button
          right={true}
          active={!next}
          onClick={() => {
            if (!next) {
              console.log("clicked", next);
              setNext(true);
            }
          }}
        />
      </div>
    </div>
  );
};

export default LearnCard;
