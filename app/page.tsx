"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
    <div className="flex flex-col gap-5.5 min-h-screen items-center pt-13.25 font-sans text-white bg-slate-800 pb-20">
      <h1 className="text-[30px] font-bold"> Task 1</h1>
      <button
        className="bg-primary px-4 py-3 rounded-lg cursor-pointer"
        onClick={() => {
          route.push("/task1/1");
        }}
      >
        Task 1
      </button>
      <button
        className="bg-primary px-4 py-3 rounded-lg cursor-pointer"
        onClick={() => {
          route.push("/task1/2");
        }}
      >
        Task 2
      </button>
      <h1 className="text-[30px] font-bold"> Task 2</h1>
      <button
        className="bg-primary px-4 py-3 rounded-lg cursor-pointer"
        onClick={() => {
          route.push("/task2/user");
        }}
      >
        User List Page
      </button>
      <button
        className="bg-primary px-4 py-3 rounded-lg cursor-pointer"
        onClick={() => {
          route.push("/task2/addPost");
        }}
      >
        Add New Post
      </button>
    </div>
  );
}
