import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageAndInfoSection from "./components/imageAndInfoSection";
import HowItWorks from "./components/howItWorks/HowItWorks";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ImageAndInfoSection
        makeFluid
        makeBgGradient
        videoCardLeftMargin={"30px"}
      />
      <ImageAndInfoSection
        // makeBgGradient
        makeFluid
        makeReverse
        headingColor="#1B5B2F"
        textColor="rgba(22, 20, 20, 1)"
        button={"filled"}
      />
      <HowItWorks />
    </div>
  );
}

export default App;
