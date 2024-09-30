import { useState } from "react";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { VRSection } from "./components/VRSection/VRSection";
import { CreationSection } from "./components/CreationSection/CreationSection";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
      <VRSection />
      <CreationSection />
      <Footer />
    </>
  );
}

export default App;
