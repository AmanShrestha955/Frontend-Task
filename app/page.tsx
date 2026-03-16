"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
    <div className="flex flex-col gap-5.5 min-h-screen items-center gap- pt-13.25 font-sans bg-white pb-20">
      <button
        className="bg-primary px-4 py-3 rounded-lg cursor-pointer"
        onClick={() => {
          route.push("/task1");
        }}
      >
        Task 1
      </button>
      <button
        className="bg-primary px-4 py-3 rounded-lg cursor-pointer"
        onClick={() => {
          route.push("/task2");
        }}
      >
        Task 2
      </button>
    </div>
  );
}
