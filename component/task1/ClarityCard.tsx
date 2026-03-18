"use client";
import Image from "next/image";
import Button from "./Button";

const ClarityCard = () => {
  return (
    <div className="w-148 h-85.25 group cursor-pointer float-left relative">
      <div className="w-148 h-85.25 rounded-2xl bg-[#F45B5B] py-14.5 pr-8.75 flex flex-row relative justify-end items-center group-hover:-translate-x-150 group-hover:opacity-0 pointer-events-none transition-all duration-500 ease-in-out ">
        <Image
          width={257}
          height={338}
          src="/image/clarity.png"
          alt="Clarity"
          unoptimized
          className="absolute -left-12.25 top-15 object-contain scale-125 animate-float "
        />
        <div className="flex flex-col gap-8 max-w-87.75 max-h-56.25">
          <div className="flex flex-col gap-2.5 items-end">
            <h1 className="text-[32px] text-white leading-[120%] font-nohemi">
              Start with Clarity
            </h1>
            <h2 className="text-[24px] font-medium text-righ leading-[100%] text-white font-outfit">
              Step into a better learning path.
            </h2>
          </div>
          <p className="text-[18px] font-normal text-right text-white font-outfit leading-[120%]">
            Overwhelmed by too many learning options? SkillShikshya provides a
            clear, curated roadmap from the start. Whether you&apos;re a
            beginner or upskilling, we have a path tailored to your growth.
          </p>
        </div>
      </div>
      <div className="absolute flex flex-row top-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-in-out">
        {/* button */}
        <Button right={false} onClick={() => {}} active />

        <svg
          width="592"
          height="341"
          viewBox="0 0 592 341"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M560 0C577.673 8.76194e-06 592 14.3269 592 32V97.8274C592 109.227 579.4 117 568 117C538.729 117 515 140.729 515 170C515 199.271 538.729 223 568 223C579.4 223 592 230.772 592 242.172V309C592 326.673 577.673 341 560 341H32C14.3269 341 0 326.673 0 309V242.172C0 230.772 12.6002 223 24 223C53.2711 223 77 199.271 77 170C77 140.729 53.2711 117 24 117C12.6002 117 0 109.227 0 97.8274V32C5.47654e-06 14.3269 14.3269 0 32 0H560Z"
            fill="#F45B5B"
          />
        </svg>
        <Image
          className="absolute bottom-0 left-6 scale-100"
          width={470}
          height={373}
          src="/image/image1.png"
          alt="image"
        />
        <p className="absolute font-nohemi text-white text-[20px] w-60.25 leading-[120%] right-6.25 top-14">
          Clarity unlocked—stickers, sips, and skills all in one go!
        </p>
        {/* button */}
        <Button right={true} onClick={() => {}} active />
      </div>
    </div>
  );
};

export default ClarityCard;
