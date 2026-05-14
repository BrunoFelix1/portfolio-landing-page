import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import ClinicInfo from "./components/ClinicInfo";
import Navbar from "./components/Navbar";
import OurSolutions from "./components/OurSolutions";
import { OurTeam } from "./components/OurTeam";
import { Testimonials } from "./components/Testimonials";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <main className="pt-28">
      <Navbar />
      <Hero />
      <OurSolutions />
      <WhyUs />
      <Testimonials />
      <OurTeam />
      <ClinicInfo />
      <Footer />
    </main>
  );
}

export default App;
