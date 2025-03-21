import { getImage } from "~/server/queries";

export default async function FullImagePage(props:{id:number}){
  const image = await getImage(Number(props.id));
  if(!image) {
    throw new Error ('Image not found')
  };
  return (
    
    <img src={image.url} className="w-96" alt={image.name}/>
    );
}