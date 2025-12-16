import { myFetch } from "./myFetch";

export const updateImage = async ({ image, type }: { image: File, type: string }) => {
  const data = { type }
  const formData = new FormData();
  formData.append('images', image);
  formData.append('data', JSON.stringify(data));
  const res = await myFetch(`/user/upload-images`, {
    method: "POST",
    body: formData
  })
  console.log("Common function --- Update Image Response : ", res);
}