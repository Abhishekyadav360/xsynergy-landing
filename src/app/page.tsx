'use client';

import dynamic from 'next/dynamic';

// Dynamically import DotCursor with SSR disabled
const DotCursor = dynamic(() => import('./Components/DotCursor'), {
  ssr: false,
});

import Header from "./Sections/Header";
import Banner from "./Sections/Banner";
import Footer from "./Sections/Footer";
// import Faq from "./Sections/Faq";
import Slider from "./Sections/Slider";
import Works from "./Sections/Works";
import Joinnow from "./Sections/Joinnow";
import Faqs from "./Sections/Faqs";
import KeyFeatures from "./Sections/KeyFeatures";
import Faqtabs from './Sections/Faqtabs';




export default function Home() {
  return (
    <>
      <DotCursor />
      <Header />
      <Banner />
      <KeyFeatures />
      <Works />
      <Faqs />
      <Slider />
      <Joinnow />
      {/* <Faq /> */}
<Faqtabs />
      <Footer />
    </>
  );
}
