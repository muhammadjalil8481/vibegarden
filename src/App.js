import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import GradientImageInfoSection from "./components/GradientImageInfoSection";
import HowItWorks from "./components/howItWorks/HowItWorks";
import WhiteImageInfoSection from "./components/WhiteImageInfoSection.js";
import FourColumnInfoSection from "./components/fourColumnInfoSection";
import LineBreak from "./components/lineBreak";
import SampleTools from "./components/SampleToolsSection";
import MoreVG from "./components/MoreVGSection.js";
import StayInTouch from "./components/StayInTouchSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <GradientImageInfoSection videoCardLeftMargin={"30px"} />
      <WhiteImageInfoSection />
      <HowItWorks />
      <FourColumnInfoSection />
      <LineBreak />
      <SampleTools />
      <MoreVG />
      <StayInTouch />
    </div>
  );
}

export default App;
