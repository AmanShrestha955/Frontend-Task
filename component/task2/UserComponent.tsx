"use client";
import { UserData } from "@/validation/UserSchema";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import { useState } from "react";

const UserConponent = ({ data }: { data: UserData[] }) => {
  const [filter, setFilter] = useState<UserData[]>(data);
  const onfilter = (value: string) => {
    const lowerValue = value.toLowerCase();
    if (value === "") {
      setFilter(data);
      return;
    }
    setFilter(
      data.filter((user) => {
        return (
          user.name.toLowerCase().includes(lowerValue) ||
          user.email.toLowerCase().includes(lowerValue)
        );
      }),
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 p-25 flex flex-col items-start gap-4">
      <SearchBar onChange={onfilter} />
      {filter.map((item: UserData, index) => (
        <UserCard
          key={index}
          name={item.name}
          companyName={item.company.name}
          email={item.email}
          id={item.id}
        />
      ))}
    </div>
  );
};
export default UserConponent;
