
export const formatUrl = (path: string) => {

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