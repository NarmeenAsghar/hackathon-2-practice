import Buynow from "@/components/Buynow";
import Catagories from "@/components/Catagories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Monthly from "@/components/Monthly";
import Ourproducts from "@/components/Ourproducts";
import Todays from "@/components/Todays";
import TopHeader from "@/components/TopHeader";
import Features from "../components/Features";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header /> 
      <Hero /> 
      <Todays />
      <Catagories />
      <Monthly />
      <Buynow />
      <Ourproducts />
      <Features />
      <Services />
      <Footer />
    </div>
  );
}
