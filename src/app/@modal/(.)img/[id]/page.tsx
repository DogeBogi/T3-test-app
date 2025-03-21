
import { Modal } from "./modal";
import FullImagePage from "~/components/full-image.page";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = Number((await params).id);
 
  return (
    <Modal>
    <FullImagePage id={photoId}/>
    </Modal>
    );
}