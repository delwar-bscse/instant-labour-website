"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

type Suggestion = {
  display_name: string;
  lat: string;
  lon: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSelectLocation: (data: {
    address: string;
    lat: number;
    lng: number;
  }) => void;
  inputClassVarient?: string;
  placeholder?: string;
};

export default function LocationAutocompleteOpenStreetMap({
  value,
  onChange,
  onSelectLocation,
  inputClassVarient,
  placeholder,
}: Props) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const isSelecting = useRef(false);

  useEffect(() => {
    if (isSelecting.current) {
      isSelecting.current = false;
      return;
    }

    if (!value || value.length < 3) {
      setSuggestions([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${value}`,
        {
          headers: {
            "User-Agent": "your-app-name",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data);
        });
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [value]);

  return (
    <div className="relative">
      <Input
        variant={inputClassVarient ? inputClassVarient : "yelloBg2"}
        placeholder={placeholder ? placeholder : "Search location..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {suggestions.length > 0 && (
        <div className="absolute z-50 bg-white border rounded-lg mt-1 w-full max-h-60 overflow-y-auto shadow">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="p-3 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => {
                isSelecting.current = true;

                onChange(item.display_name);

                onSelectLocation({
                  address: item.display_name,
                  lat: parseFloat(item.lat),
                  lng: parseFloat(item.lon),
                });

                setSuggestions([]);
              }}
            >
              {item.display_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}