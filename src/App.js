import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import GradientImageInfoSection from "./components/GradientImageInfoSection";
import VideoCard from "./components/VideoCard/VideoCard";
import HowItWorks from "./components/howItWorks/HowItWorks";
import WhiteImageInfoSection from "./components/WhiteImageInfoSection.js";
import FourColumnInfoSection from "./components/fourColumnInfoSection";
import LineBreak from "./components/lineBreak";
import SampleTools from "./components/SampleToolsSection";
import MoreVG from "./components/MoreVGSection.js";
import StayInTouch from "./components/StayInTouchSection";
import WhiteInfoCard from "./components/WhiteInfoCard.js";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
