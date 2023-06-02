import Feed from "@components/Feed"

export async function getServerSideProps() {
   const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/prompt`);
   const data = await response.json();
 
   return {
     props: { data }, // will be passed to the page component as props
   }
 }
 

const Home = () => {
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
        <Feed/>
    </section>
  )
}

export default Home