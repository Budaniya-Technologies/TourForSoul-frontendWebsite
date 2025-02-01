import ConnectWithUs from "@/component/ConnectWithUs";
import CustomerFeedBack from "@/component/CustomerFeedBack";
import FeaturedCitiesHomePage from "@/component/FeaturedCitiesHomePage";
import LatestTrips from "@/component/latestTrips";
import PackageInfo from "@/component/PackageInfo";
import QuerySectionHomePage from "@/component/QuerySectionHomePage";
import TripCategories from "@/component/TripCategories";
import WhyChooseUs from "@/component/WhyChooseUs";

export default function Home({data}) {
  return (
    <>
      <TripCategories/>
      <PackageInfo />
      <WhyChooseUs />
      <FeaturedCitiesHomePage />
      <LatestTrips/>
      <CustomerFeedBack />
      <ConnectWithUs />
      <QuerySectionHomePage />
    </>
  );
}

