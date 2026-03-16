import Image from "next/image";
const JobCard = () => {
  return (
    <div className="w-148 h-85.25 rounded-2xl bg-[#A88964] py-14.5 pl-8.75 flex flex-row relative justify-start items-center">
      <div className="flex flex-col gap-8 max-w-87.75 max-h-56.25">
        <div className="flex flex-col gap-2.5 items-start">
          <h1 className="text-[32px] text-white leading-[120%] font-nohemi">
            Achieve & Showcase
          </h1>
          <h2 className="text-[24px] font-medium text-left leading-[100%] text-white font-outfit text-nowrap">
            Build your portfolio, get job-ready.
          </h2>
        </div>
        <p className="text-[18px] font-normal text-left leading-[120%] text-white font-outfit">
          Your journey ends with achievement. Each completed project builds a
          portfolio showcasing your skills and job readiness, bringing you
          closer to that dream job, promotion, or your own venture.
        </p>
      </div>
      <Image
        width={280.03}
        height={310.76}
        src="/image/job.png"
        alt="Job"
        unoptimized
        className="absolute -right-9 top-27 object-contain scale-100 animate-float "
      />
    </div>
  );
};

export default JobCard;
