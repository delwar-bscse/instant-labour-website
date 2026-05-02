
import { defaultImage } from "@/assets/assets";

export const formatUrl = (path?: string | null | undefined) => {

  if (!path || path === "" || path === null || path === undefined) {
    return defaultImage.src;
  } else if (path.startsWith("http")) {
    return path;
  } else {
    if (path.startsWith("/")) {
      return `${process.env.NEXT_PUBLIC_IMAGE_URL}${path}`;
    } else {
      return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    }
  }
};