import ConnectWithUs from "@/component/ConnectWithUs";
import CustomerFeedBack from "@/component/CustomerFeedBack";
import FeaturedCitiesHomePage from "@/component/FeaturedCitiesHomePage";
import PackageInfo from "@/component/PackageInfo";
import QuerySectionHomePage from "@/component/QuerySectionHomePage";
import WhyChooseUs from "@/component/WhyChooseUs";

export default function Home({data}) {
  return (
    <>
      
      <PackageInfo />
      <WhyChooseUs />
      <FeaturedCitiesHomePage />
      <CustomerFeedBack />
      <ConnectWithUs />
      <QuerySectionHomePage />
    </>
  );
}

