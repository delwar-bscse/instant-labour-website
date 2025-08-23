"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Suspense } from "react";

function CustomSearchBarSuspense({ placeholder = "Search here...", query = "query" }: { placeholder?: string, query?: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleSearch = useDebouncedCallback((term: string) => {
    if (term) {
      params.set(query, term);
    } else {
      params.delete(query);
    }
    replace(`?${params.toString()}`);
  }, 300);

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-500" />
      <Input
        className="w-full rounded-full bg-background pl-12 h-12 focus-visible:ring focus-visible:ring-gray-300 focus-visible:border-gray-300 outline-none sm:text-lg md:text-xl text-gray-500 font-normal"
        placeholder={placeholder}
        type="search"
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export function CustomSearchBar({ placeholder = "Search here...", query = "query" }: { placeholder?: string, query?: string }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomSearchBarSuspense placeholder={placeholder} query={query} />
    </Suspense>
  );
}