import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
     <div className="flex flex-wrap gap-4">
     {[...MOCKIMAGES,...MOCKIMAGES,...MOCKIMAGES].map((image) => (<div key={image.id} className="w-48"> 
        <img src={image.url} alt="image" />
     </div>))}
     </div>
    </main>
  );
}
