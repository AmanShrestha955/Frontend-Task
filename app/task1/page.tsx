import ClarityCard from "@/component/ClarityCard";
import GetMentored from "@/component/GetMentored";
import JobCard from "@/component/JobCard";
import LearnCard from "@/component/LearnCard";
import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <div className="flex flex-col gap-5.5 min-h-screen items-center gap- pt-13.25 font-sans bg-white pb-20">
      <h1 className="text-centerfont-fustat font-medium text-[32px] leading-[100%] text-[#333333]">
        Note: Hover the component to view the animation & Click the arrow icon
      </h1>
      <div className="flex flex-col gap-12 items-start">
        <h1 className="font-outfit font-medium text-[24px] leading-[100%] text-[#414141]  ">
          Your SkillShikshya Journey
        </h1>
        <p className="font-nohemi text-[32px] leading-[120%] text-[#2B2B2B]">
          <span className="text-primary">Step</span> In.{" "}
          <span className="text-primary">Skill</span> Up.{" "}
          <span className="text-primary">Stand</span> Out. 🚀
        </p>
        <div className="grid grid-cols-2 gap-8">
          <ClarityCard />
          <LearnCard />
          <GetMentored />
          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
