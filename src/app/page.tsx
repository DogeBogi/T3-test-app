import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic"

async function Images (){
  const images = await getMyImages();
  return (
    <div className="flex flex-row flex-wrap gap-4 p-4">
    {images.length === 0 && <h1 className="mr-auto ml-auto text-4xl  ">Send your images</h1>}
    {images.map((image) => (<div key={image.id} className="w-48 h-56 flex flex-col mb-2 items-center  text-center  "> 
      <Link href={`/img/${image.id}`} >
      <div className="w-48 h-48 bg-white rounded overflow-hidden shadow-md">
      <Image src={image.url} alt={image.name} width={192} height={192} className="w-full h-full object-cover"/> 
      </div>
      </Link>
      <div className="w-48 max-h-6 overflow-x-clip truncate mt-1  ">
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
