import Feed from "@components/Feed"
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
 


export default async function Home() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/prompt`, { cache: 'no-store' })
   const prompts = await res.json()
   console.log(prompts)

   return (
      <section className="w-full flex-center flex-col">
         <h1 className="head_text text-center">
            Discover & Share 
            <br className="max-md:hidden"/>
            <span className="blue_gradient text-center"> AI-Powered Prompts</span>
         </h1>
         <p className="desc text-center">
            An open-source AI prompting 
            tool for modern world to discover, create 
            and share creative prompts
         </p>
         <Feed
            prompts={prompts}
         />
      </section>
   )
}

