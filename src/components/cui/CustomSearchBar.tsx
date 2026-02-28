/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import LocationAutocompleteOpenStreetMap from "../map/LocationAutocompleteOpenStreetMap";

function CustomSearchBarSuspense({ placeholder = "Search here...", query = "query" }: { placeholder?: string, query?: string }) {
  const [address, setAddress] = useState("");
  const searchParams = useSearchParams();
  const location = searchParams.get(query) || "";
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleSearch = (address: string) => {

    if (address.trim() !== "") {
      params.set(query, address);
    } else {
      params.delete(query);
      // toast.error("Type something to search! Then press Enter.");
    }
    replace(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    setAddress(location);
  }, []);

  return (
    <div className="relative w-full flex items-center gap-2 border border-gray-300 rounded-full px-4  focus-within:ring focus-within:ring-gray-300">
      <Search className="text-gray-400" />

      <div className="flex-1">
        <LocationAutocompleteOpenStreetMap
          value={address}
          onChange={(address) => setAddress(address)}
          onSelectLocation={(data) => {
            console.log(data)
            handleSearch(data.address);

          }}
          inputClassVarient="transparent"
          placeholder={placeholder}
        />
      </div>
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