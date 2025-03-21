// import { Modal } from "./modal";

import { getImage } from "~/server/queries";

export default async function PhotoModal({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
  const photoId = (await params).id;
  const image = await getImage(Number(photoId));
  if(!image) {
    throw new Error ('Image not found')
  };
  return (
    <div>
    <img src={image.url} alt={image.name}/>
    </div>);
}