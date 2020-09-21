import { Container } from "@material-ui/core";
import FutureOfPrint from "../Component/HomePage/FutureOfPrint";
import HomeHero from "../Component/HomePage/Hero";
import MilkyWay from "../Component/HomePage/MilkyWay";
import OurPartner from "../Component/HomePage/OurPartner";
import ProductMap from "../Component/HomePage/ProductMap";

const Index = () => {
  return (
    <>
      <HomeHero />
      <ProductMap />
      <MilkyWay />
      <FutureOfPrint />
      <OurPartner />
    </>
  );
};

export default Index;
