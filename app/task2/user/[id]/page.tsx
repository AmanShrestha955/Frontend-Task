import { getData } from "@/util/api";
import { PostArraySchema, PostData } from "@/validation/PostSchema";

const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  const response = await getData(`/posts?userId=${id}`);
  let data: PostData[] = [];
  if (response) {
    const json = await response.json();

    const result = PostArraySchema.safeParse(json);
    if (result.success) {
      data = result.data;
    } else {
      console.error("Post data doesn't match schema: ", result.error.issues);
    }
  }
  return (
    <div className="flex flex-col gap-4 p-9 min-h-screen bg-slate-800">
      {data.map((post, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 w-110 p-8 rounded-md bg-slate-700"
        >
          <p>{post.id}</p>
          <h1 className="text-[24px] font-bold">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
