import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import GradientImageInfoSection from "./components/GradientImageInfoSection";
import HowItWorks from "./components/howItWorks/HowItWorks";
import TwoColumnSection from "./components/TwoColumnSection";
import WhiteImageInfoSection from "./components/WhiteImageInfoSection.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <GradientImageInfoSection videoCardLeftMargin={"30px"} />
      <WhiteImageInfoSection />
      {/* <HowItWorks /> */}
      {/* <TwoColumnSection /> */}
    </div>
  );
}

export default App;
