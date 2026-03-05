"use client";

import { useRef } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import { Input } from "@/components/ui/input";

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

const libraries: ("places")[] = ["places"];

export default function LocationAutocompleteGoogleMap({
  value,
  onChange,
  onSelectLocation,
  inputClassVarient,
  placeholder,
}: Props) {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  const handlePlaceChanged = () => {
    if (!autocompleteRef.current) return;

    const place = autocompleteRef.current.getPlace();

    const address = place.formatted_address || "";
    const lat = place.geometry?.location?.lat();
    const lng = place.geometry?.location?.lng();

    if (lat !== undefined && lng !== undefined) {
      onChange(address);

      onSelectLocation({
        address,
        lat,
        lng,
      });
    }
  };

  if (!isLoaded) return null;

  return (
    <Autocomplete
      onLoad={(auto) => (autocompleteRef.current = auto)}
      onPlaceChanged={handlePlaceChanged}
    >
      <Input
        variant={inputClassVarient ?? "yelloBg2"}
        placeholder={placeholder ?? "Search location..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Autocomplete>
  );
}