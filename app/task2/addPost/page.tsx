"use client";
import AddPostForm from "@/component/task2/AddPostForm";
import ShowStoredPost from "@/component/task2/ShowStoredPost";
import { LocalPostData } from "@/validation/PostSchema";
import { useState, useEffect } from "react";

const Page = () => {
  const [data, setData] = useState<LocalPostData[]>([]);
  useEffect(() => {
    const local = localStorage.getItem("post");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setData(local ? JSON.parse(local) : []);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleAdd = (newPost: LocalPostData) => {
    setData((prev) => [...prev, newPost]);
  };
  return (
    <div className="flex flex-col bg-slate-800 gap-6 items-center min-h-screen">
      <AddPostForm onAdd={handleAdd} />
      <ShowStoredPost data={data} />
    </div>
  );
};

export default Page;
