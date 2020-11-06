import { Container } from "@material-ui/core";
import { NextSeo } from "next-seo";
import FutureOfPrint from "../Component/HomePage/FutureOfPrint";
import HomeHero from "../Component/HomePage/Hero";
import MilkyWay from "../Component/HomePage/MilkyWay";
import OurPartner from "../Component/HomePage/OurPartner";
import ProductMap from "../Component/HomePage/ProductMap";
import Testimonials from "../Component/HomePage/Testimonials";

const Index = () => {
	return (
		<>
			<NextSeo
				title="Print MIS | Print Workflow | Print Estimating Software | printIQ"
				description="printIQ is a cloud-based management workflow system. You get a seamless, end-to-end estimating, ordering, and production workflow system."
				openGraph={{
					url: "https://www.printiq.com/",
					title: "printIQ Far more than just an MIS",
					description:
						"printIQ is a cloud-based management workflow system. You get a seamless, end-to-end estimating, ordering, and production workflow system.",
					images: [
						{
							url:
								"https://iq-website.vercel.app/images/homepage/printIQ-Universe2020-map.jpg",
							width: 800,
							height: 600,
							alt: "printIQ product Map",
						},
					],
					locale: "en_US",
				}}
				twitter={{
					handle: "https://www.printiq.com/",
					site: "@printIQGlobal",
					cardType: "summary_large_image",
				}}
			/>
			<HomeHero />
			<ProductMap />
			<MilkyWay />
			<FutureOfPrint />
			<OurPartner />
			<Testimonials />
		</>
	);
};

export default Index;
