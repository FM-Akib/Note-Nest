import MobileNav from "../../components/Shared/MobileNav";
import Departments from "./Departments";
import Features from "./Features";
import Hero from "./Hero";
import SellComponents from "./SellComponents";
import TopContributor from "./TopContributor";
import UniCard from "./UniCard";
const Landing = () => {


    return (
        <div className="px-2 md:px-20">
            <Hero />
            <UniCard />
            <TopContributor />
            <Features />
            <SellComponents />
            <Departments />










            <MobileNav/>




    </div>
    );
};

export default Landing;
