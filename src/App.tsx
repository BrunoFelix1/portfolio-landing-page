import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurSolutions from "./components/OurSolutions";
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
    </main>
  );
}

export default App;
