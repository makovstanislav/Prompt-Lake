import Feed from "@components/Feed"



export default async function Home() {
   async function getPrompts() {  
      const response = await fetch("http://localhost:3000/api/prompt", { cache: 'no-store' });  
      const data = await response.json();  
      if (!response.ok) {
         // This will activate the closest `error.js` Error Boundary
         throw new Error('Failed to fetch data')
       }
       console.log(data)
      return data  
   } 

   const prompts = await getPrompts()

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

