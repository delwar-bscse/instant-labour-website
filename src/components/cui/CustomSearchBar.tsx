/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function CustomSearchBar({ placeholder = "Search here...", query = "query" }: { placeholder?: string, query?: string }) {
  const [searchValue, setSearchValue] = useState("");
  const searchParams = useSearchParams();
  const queryValue = searchParams.get(query) || "";
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  

  useEffect(() => {
    setSearchValue(queryValue);
  }, []);

  useEffect(() => {
    if (!searchValue) {
      params.delete(query);
      replace(`?${params.toString()}`, { scroll: false });
    }
  }, [searchValue]);
  
  // set search value to url query with debounce of 1 second
  const handleSearch = useDebouncedCallback((value: string) => {
    if (value.trim() !== "") {
      params.set(query, value);
    } else {
      params.delete(query);
    }
    replace(`?${params.toString()}`, { scroll: false });
  }, 1000);

  useEffect(() => {
    handleSearch(searchValue);
  }, [searchValue]);

  return (
    <div className="relative w-full flex items-center gap-2 border border-gray-300 rounded-full px-4  focus-within:ring focus-within:ring-gray-300">
      <Search className="text-gray-400" />

      <div className="flex-1">
        <input
          type="text"
          className="w-full py-2.5 focus:outline-none"
          placeholder={placeholder ?? "Search location..."}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
}