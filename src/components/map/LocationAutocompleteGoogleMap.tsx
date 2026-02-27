"use client";

import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { Input } from "@/components/ui/input";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSelectLocation: (data: {
    address: string;
    lat: number;
    lng: number;
  }) => void;
};

const libraries: ("places")[] = ["places"];

export default function LocationAutocompleteGoogleMap({
  value,
  onChange,
  onSelectLocation,
}: Props) {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
    libraries,
  });

  const onPlaceChanged = () => {
    if (!autocompleteRef.current) return;

    const place = autocompleteRef.current.getPlace();

    const lat = place.geometry?.location?.lat();
    const lng = place.geometry?.location?.lng();
    const address = place.formatted_address || "";

    if (lat && lng) {
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
      onPlaceChanged={onPlaceChanged}
    >
      <Input
        variant="yelloBg2"
        placeholder="Enter Your Location"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Autocomplete>
  );
}