import React from "react";
import FeaturesSection from "./FeaturesSection.jsx";
import AboutSection from "./AboutSection.jsx";
import FindDeliveryBoySection from "./FindDeliveryBoySection.jsx";
import StoriesSection from "./StoriesSection.jsx";

const HomePage = () => (
  <main>
    <FindDeliveryBoySection />
    <AboutSection />
    <FeaturesSection />
    <StoriesSection />
  </main>
);

export default HomePage;
