"use client";
import { LocalPostData, PostFormSchema } from "@/validation/PostSchema";
import { useState, SubmitEventHandler } from "react";

const AddPostForm = ({ onAdd }: { onAdd: (post: LocalPostData) => void }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const result = PostFormSchema.safeParse({ title, body });
    if (result.success) {
      const localdata = localStorage.getItem("post");
      const data = localdata ? JSON.parse(localdata) : [];
      const safeData = Array.isArray(data) ? data : [];

      localStorage.setItem("post", JSON.stringify([...safeData, result.data]));
      onAdd(result.data);
    } else {
      console.error(result.error.issues);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-8 items-center text-black bg-slate-700"
    >
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={(e) => {
          setTitle(e.currentTarget.value);
        }}
        className="p-3 bg-white rounded-md focus:outline-0 "
      />
      <input
        type="text"
        placeholder="body"
        name="body"
        onChange={(e) => {
          setBody(e.currentTarget.value);
        }}
        className="p-3 bg-white rounded-md focus:outline-0 "
      />
      <button
        type="submit"
        className="py-3 px-5 rounded-md bg-primary cursor-pointer text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default AddPostForm;
