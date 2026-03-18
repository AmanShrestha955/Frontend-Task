"use client";
const SearchBar = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <input
      type="search"
      placeholder="User or Email"
      className="p-3 bg-white text-black rounded-md focus:outline-0"
      onChange={(e) => {
        onChange(e.currentTarget.value);
      }}
    />
  );
};

export default SearchBar;
