import { Helmet } from "react-helmet";
import MobileNav from "../../components/Shared/MobileNav";
import Departments from "./Departments";
import Features from "./Features";
import Hero from "./Hero";
import SellComponents from "./SellComponents";
import TopContributor from "./TopContributor";
import UniCard from "./UniCard";
import ContactUs from "./ContactUs";

import pattern from '../../assets/patternproject.jpg'

const Landing = () => {


    return (
        <div className=" md:bg-cover  bg-repeat-y" style={{backgroundImage: `url(${pattern})`}}>
        
        <Helmet>
        <title>Note Nest - Home</title>
        </Helmet>
        <div className="bg-white/90 px-2 md:px-20">
            <Hero />
            <UniCard />
            <TopContributor />
            <Features />
            <SellComponents />
            <Departments />
            <ContactUs/>









            <MobileNav/>

            </div>


    </div>
    );
};

export default Landing;
