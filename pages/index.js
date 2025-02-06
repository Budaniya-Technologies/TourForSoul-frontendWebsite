import ConnectWithUs from "@/component/ConnectWithUs";
import CustomerFeedBack from "@/component/CustomerFeedBack";
import FeaturedCitiesHomePage from "@/component/FeaturedCitiesHomePage";
import LatestTrips from "@/component/latestTrips";
import PackageInfo from "@/component/PackageInfo";
import QuerySectionHomePage from "@/component/QuerySectionHomePage";
import TripCategories from "@/component/TripCategories";
import WhyChooseUs from "@/component/WhyChooseUs";

export default function Home({packages}) {
  return (
    <>
      {/* <TripCategories/> */}
      <PackageInfo packages = {packages}/>
      <FeaturedCitiesHomePage />
      <WhyChooseUs />
      <LatestTrips/>
      <CustomerFeedBack />
      <ConnectWithUs />
      <QuerySectionHomePage />
    </>
  );
}

