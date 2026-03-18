import Stats from "@/component/task1/Stats";
import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <div className="flex flex-col gap-5.5 min-h-screen items-center gap- pt-13.25 font-sans bg-white pb-20">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-[#333333] font-fustat font-medium text-[32px] leading-[100%] text-center">
          Note: Click the cards to view the animation
        </h1>
        <div className="flex flex-col gap-12 items-start">
          <div className="flex flex-col gap-5">
            <p className="text-[#414141] text-[24px] font-outfit font-normal leading-[100%]">
              Explore our classes and master trending skills!
            </p>
            <p className="text-[#2B2B2B] font-nohemi font-bold text-[32px] leading-[120%]">
              Dive Into{" "}
              <span className="text-primary">What&apos;s Hot Right Now!</span>{" "}
              🔥
            </p>
          </div>

          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Page;
