"use client";
import { useRouter } from "next/navigation";

const UserCard = ({
  name,
  email,
  companyName,
  id,
}: {
  name: string;
  email: string;
  companyName: string;
  id: number;
}) => {
  const router = useRouter();
  return (
    <div className="p-6 rounded-lg bg-slate-700 text-white flex flex-col gap-3 items-start">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Company Name: {companyName}</p>
      <button
        className="py-3 px-5 rounded-md bg-primary cursor-pointer "
        onClick={() => {
          router.push(`/task2/user/${id}`);
        }}
      >
        View Posts
      </button>
    </div>
  );
};

export default UserCard;
