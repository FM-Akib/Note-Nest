import Hero from "./Hero";
import TopContributor from "./TopContributor";
import UniCard from "./UniCard";



const Landing = () => {
 

    return (
        <div className="px-2 md:px-20">
          <Hero></Hero>
          <UniCard></UniCard>
          <TopContributor></TopContributor>



        </div>
      
    );
};

export default Landing;