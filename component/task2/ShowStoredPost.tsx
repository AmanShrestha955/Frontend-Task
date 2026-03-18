"use client";
import { LocalPostData } from "@/validation/PostSchema";
import { useState } from "react";

const ShowStoredPost = ({ data }: { data: LocalPostData[] }) => {
  const post_per_page = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / post_per_page);
  const start = (currentPage - 1) * post_per_page;
  const currentPost = data.slice(start, start + post_per_page);
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-slate-700 rounded-md p-6 gap-4 flex flex-row flex-wrap items-start text-white">
        {data.length === 0 && <p>No posts.</p>}
        {currentPost.map((post, index) => (
          <div
            key={index}
            className="bg-slate-600 rounded-md p-6 gap-4 flex flex-col items-start"
          >
            <p className="text-[24px] font-bold">{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex gap-2 mt-4 justify-center">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-slate-600 text-white rounded disabled:opacity-40"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-white text-black font-bold"
                  : "bg-slate-600 text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-slate-600 text-white rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowStoredPost;
