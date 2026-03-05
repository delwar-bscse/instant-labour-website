

// export const formatUrl = (path?: string | null): string => {
//   if (!path) return "";

//   if (path.startsWith("http")) {
//     return path;
//   }

//   const base = process.env.NEXT_PUBLIC_IMAGE_URL ?? "";

//   return path.startsWith("/")
//     ? `${base}${path}`
//     : `${base}/${path}`;
// };

export const formatUrl = (path?: string | null | undefined) => {

  if (!path || path === "" || path === null || path === undefined) {
    return "";
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