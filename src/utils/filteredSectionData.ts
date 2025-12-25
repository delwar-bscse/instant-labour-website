
export const filteredSectionData = ({ data, section }: { data: any, section: string }) => {
  const isArray = Array.isArray(data);
  if (!data || !isArray || data.length <= 0) return [];

  // console.log("Data Type", isArray);
  const result = data?.filter((data: any) => data.sectionType === section)[0];
  return result
}