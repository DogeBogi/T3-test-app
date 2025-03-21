// import { Modal } from "./modal";

import FullImagePage from "~/components/full-image.page";

export default async function PhotoPage({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
  const photoId = Number((await params).id);
  return (
   <FullImagePage id={photoId}/>
  )
}