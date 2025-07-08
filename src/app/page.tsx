
'use client';
import Header from "./Sections/Header";
import Banner from "./Sections/Banner";
import About from "./Sections/About";
import Footer from "./Sections/Footer";
// import Faq from "./Sections/Faq";
// import Advantages from "./Sections/Advantages";
// import Explore from "./Sections/Explore";
// import Slider from "./Sections/Slider";
import Works from "./Sections/Works";  
// import TestPage from "./Sections/TestPage";
// import Features from "./Sections/Features";
import ClientFeatureCarousel from "./Sections/ClientFeatureCarousel";
import Joinnow from "./Sections/Joinnow";
// import Why from "./Sections/Why";
// import Tokenomics from "./Sections/Tokenomics";





export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
       <ClientFeatureCarousel />
     
      <Works />
      {/* <Why /> */}
       <Joinnow />
      {/* <Advantages />
      <Explore />
      <Features /> */}
      
      {/* <TestPage /> */}
      {/* <Slider /> */}
      {/* <Tokenomics /> */}
      {/* <Faq /> */}
      <Footer />
    </>
  );
}
