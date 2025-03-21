import { getImage } from "~/server/queries";

export default async function FullImagePage(props:{id:number}){
  const image = await getImage(Number(props.id));
  if(!image) {
    throw new Error ('Image not found')
  };
  return (
    <div className="flex w-full h-full">
        <div className="flex flex-shrink justify-center items-center">
            <img src={image.url} className=" min-w-80 object-contain flex-shrink " alt={image.name}/>
        </div>
    <div className="w-48 flex  flex-shrink flex-col border-l">
    <div className="text-xl font-bold">{image.name}</div>
        </div>
    </div>
    );
}