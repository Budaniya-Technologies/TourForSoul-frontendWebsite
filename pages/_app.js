import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
import HomePageSliderImg from "@/component/HomePageSliderImg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux'
import Head from "next/head"; // Removed the extra '-'
import { store } from "@/redux/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="tourforsoul is a travel website. tourforsoul website developer is ajay budaniya. tourforsoul travel package is available 365 Days"
        />
        <meta
          name="keywords"
          content="Best travel website, tourforsoul, ajay budaniya, ajay kumar, travel website, the bag packer, india travel website"
        />
        <meta name="author" content="ajay budaniya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <HomePageSliderImg />
      <Component {...pageProps} />
      <Footer />
      </Provider>
    </>
  );
}
