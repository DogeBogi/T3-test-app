import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullImagePage(props:{id:number}){
  const image = await getImage(Number(props.id));
  if(!image) {
    throw new Error ('Image not found')
  };
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
      {}
    </div>
        </div>
    </div>
    );
}