import React from "react";
import Navbar from "./component/navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Workflow from "./component/Workflow";
import Pricing from "./component/Pricing";
import Testimonials from "./component/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
