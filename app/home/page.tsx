import CallToAction from "./CallToAction";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import FeaturedProductsShowcase from "./Product";
import Services from "./Services";
import Testimonials from "./Testimonials";
import VideoParallax from "./VideoParallax";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <VideoParallax />
      <Services />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <FeaturedProductsShowcase />
      <Footer />
    </>
  );
};

export default HomePage;
