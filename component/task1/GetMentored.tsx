import Image from "next/image";

const GetMentored = () => {
  return (
    <div className="w-148 h-85.25 rounded-2xl bg-[#6C64A8] py-14.5 pr-8.75 flex flex-row relative justify-end items-center">
      <Image
        width={307}
        height={249}
        src="/image/getMentored.png"
        alt="Get Mentored"
        unoptimized
        className="absolute -left-12.25 top-33 object-contain scale-120 animate-float "
      />
      <div className="flex flex-col gap-8 max-w-87.75 max-h-56.25 items-end">
        <div className="flex flex-col gap-2.5 items-end">
          <h1 className="text-[32px] text-white leading-[120%] font-nohemi text-nowrap">
            Get Mentored & Supported
          </h1>
          <h2 className="text-[24px] font-medium text-righ leading-[100%] text-white font-outfit">
            You&apos;re not learning alone.
          </h2>
        </div>
        <p className="text-[18px] w-77.75 font-normal text-right text-white font-outfit leading-[120%]">
          Stuck or need feedback? SkillShikshya&apos;s community of mentors and
          learners has your back with live support, interactive discussions, and
          expert insights. You&apos;re never on your own.
        </p>
      </div>
    </div>
  );
};

export default GetMentored;
