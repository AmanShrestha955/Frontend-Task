import { z } from "zod";

const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export const PostArraySchema = z.array(PostSchema);
export type PostData = z.infer<typeof PostSchema>;
export type LocalPostData = z.infer<typeof PostFormSchema>;
export const PostFormSchema = PostSchema.omit({ id: true, userId: true });
export default PostSchema;
