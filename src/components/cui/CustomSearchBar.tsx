/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";
import { Suspense, useEffect, useState } from "react";
import { toast } from "sonner";
import LocationAutocompleteOpenStreetMap from "../map/LocationAutocompleteOpenStreetMap";

function CustomSearchBarSuspense({ placeholder = "Search here...", query = "query" }: { placeholder?: string, query?: string }) {
  const [address, setAddress] = useState("");
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const location = searchParams.get(query) || "";
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleSearch = (address: string) => {
    // if (e.key !== "Enter") return;
    // e.preventDefault();
    // e.stopPropagation();

    if (address.trim() !== "") {
      params.set(query, address);
    } else {
      params.delete(query);
      toast.error("Type something to search! Then press Enter.");
    }
    replace(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    setSearch(location);
  }, []);

  return (
    <div className="relative w-full flex items-center gap-2 border border-gray-300 rounded-full px-4  focus-within:ring focus-within:ring-gray-300">
      <Search className="" />

      <div className="flex-1">
        <LocationAutocompleteOpenStreetMap
        value={address}
        onChange={(address) => setAddress(address)}
        onSelectLocation={(data) => 
          { 
            console.log(data)
            handleSearch(data.address); 

          }}
        inputClassVarient="transparent"
        placeholder={placeholder}
      />
      </div>
      {/* <Input
        className="w-full rounded-full bg-background pl-12 h-12 focus-visible:ring focus-visible:ring-gray-300 focus-visible:border-gray-300 outline-none sm:text-lg md:text-xl text-gray-500 font-normal"
        placeholder={placeholder}
        type="search"
        value={search}
        onKeyDown={handleSearch}
        onChange={(e) => setSearch(e.target.value)}
      /> */}
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