import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullImagePage(props:{id:number}){
  const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);
  
  // const uploaderInfo = await clerkClient.users.getUser(image.userId);
  
  return (
    <div className="flex w-full h-full">
        <div className="flex flex-shrink justify-center items-center">
            <img src={image.url} className=" min-w-80 object-contain flex-shrink " alt={image.name}/>
        </div>
    <div className="flex w-48 flex-shrink flex-col border-l gap-2">
    <div className=" text-lg border-b text-center p-2">{image.name}</div>

    <div className="flex flex-col px-2"><span>Uploade Date:</span>
    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
    </div>
    <div className="flex flex-col px-2">
      <form action={async ()=>{
        "use server"
        
        await deleteImage(props.id);
      }}>
      <Button  type="submit" variant="destructive">Delete</Button>
      </form>
    </div>
        </div>
    </div>
    );
}