import { HeroSection } from "../components";
import CallToAction from "../components/HomeComponents/CallToActionSection";

import InfoSection from "../components/HomeComponents/InfoSection";

import ServiceSection from "../components/HomeComponents/ServicesSection";
import WelcomeSection from "../components/HomeComponents/WelcomeSection";

function Home() {
  return (
    <div className="bg-hero bg-center md:bg-cover bg-no-repeat">
      <HeroSection />
      <WelcomeSection />
      <ServiceSection />
      <InfoSection />
      <CallToAction />
      {/* <CircleIcons />
       */}
    </div>
  );
}

export default Home;
