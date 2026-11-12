
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ProductShowcase from "./components/ProductShowcase";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [contactMessage, setContactMessage] = useState("");

  const handlePlanSelect = (plan) => {
    setContactMessage(`I'm interested in the ${plan} plan.`);
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar onGetStarted={() => handlePlanSelect("Free")} />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ProductShowcase />
        <Pricing onPlanSelect={handlePlanSelect} />
        <Contact
          initialMessage={contactMessage}
          onMessageChange={setContactMessage}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
