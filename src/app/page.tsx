import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

const MOCKURLS = [
  'https://h9mzil57jv.ufs.sh/f/gnvNKQdkwAKcFLlyuxZPXmfwtRnCsx8pK7yIDUG3QkcOqdVo',
  'https://h9mzil57jv.ufs.sh/f/gnvNKQdkwAKctzF2JLsXAweNE7ujO0V6L3cflMWGz4dg5SCY',
  'https://h9mzil57jv.ufs.sh/f/gnvNKQdkwAKcnxwjmU8Ifwd2n1pTO6smIc3kKoUqMCyHNRaB',
  'https://h9mzil57jv.ufs.sh/f/gnvNKQdkwAKcaD1X9CGfFMgbzT0s4E1uNDU9PqKAWZ8kRjiv'
]

const MOCKIMAGES = MOCKURLS.map((url,index)=>({
  id: index+1,
  url
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()

  return (
    <main className="">
     <div className="flex flex-wrap gap-4">
      {posts.map(post=>(<div key={post.id}>{post.name}</div>))}
     {[...MOCKIMAGES,...MOCKIMAGES,...MOCKIMAGES].map((image, index) => (<div key={image.id + '-' + index} className="w-48"> 
        <img src={image.url} alt="image" /> 
     </div>))}
     </div>
    </main>
  );
}
