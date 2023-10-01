"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    // e.preventDefault();
    setSearch(e.target.value);

    // console.log(search)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    // console.log(search)
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1 "
      ></input>
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
