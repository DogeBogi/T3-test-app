import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"


async function Images (){
  const images = await db.query.images.findMany({
    orderBy: (model, {asc})=> asc(model.name)
  })
  return (
    <div className="flex flex-row flex-wrap gap-4">
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
