
'use client';
import Header from "./Sections/Header";
import Banner from "./Sections/Banner";

import Footer from "./Sections/Footer";
import Faq from "./Sections/Faq";
// import Advantages from "./Sections/Advantages";
// import Explore from "./Sections/Explore";
import Slider from "./Sections/Slider";
import Works from "./Sections/Works";
// import TestPage from "./Sections/TestPage";
// import Features from "./Sections/Features";

import Joinnow from "./Sections/Joinnow";
import Faqs from "./Sections/Faqs";

import KeyFeatures from "./Sections/KeyFeatures";
import DotCursor from "./Components/DotCursor";
// import Why from "./Sections/Why";
// import Tokenomics from "./Sections/Tokenomics";





export default function Home() {
  return (
    <>

      <DotCursor />
      <Header />
      <Banner />
      {/* <About /> */}
      <KeyFeatures />
      {/* <ClientFeatureCarousel /> */}
      <Works />
      <Faqs />
      <Slider />

      <Joinnow />

      {/* <Why /> */}

      {/* <Advantages />
      <Explore />
      <Features /> */}

      {/* <TestPage /> */}
      
      {/* <Tokenomics /> */}
      <Faq />
      <Footer />
    </>
  );
}
