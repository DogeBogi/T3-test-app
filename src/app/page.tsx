import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"


async function Images (){
  const images = await getMyImages();
  return (
    <div className="flex flex-row flex-wrap gap-4">
    {images.length === 0 && <h1 className="mr-auto ml-auto text-4xl ">Send your images</h1>}
    {images.map((image) => (<div key={image.id} className="w-48 flex flex-col"> 
      <img src={image.url} alt="image"  /> 
      <div>
        {image.name}
      </div>
   </div>))}
    </div>
  )
}


export default async function HomePage() {
  
  return (
    <main>
     <div className="flex flex-wrap gap-4 justify-center">
      <SignedOut>
        <div className=" text-2xl">
        Please sign to see images
        </div>
      </SignedOut>
     </div>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
