import UserConponent from "@/component/task2/UserComponent";
import { getData } from "@/util/api";
import { UserArraySchema, UserData } from "@/validation/UserSchema";

const Page = async () => {
  let data: UserData[] = [];

  const response = await getData("/users");

  if (response) {
    const json = await response.json();

    const result = UserArraySchema.safeParse(json);

    if (result.success) {
      data = result.data;
    } else {
      console.error("Api data doesn't match schema: ", result.error.issues);
    }
  }
  return <UserConponent data={data} />;
};

export default Page;
