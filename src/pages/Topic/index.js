import React from "react";
import NavBar from "../../components/Navbar";
import GreenLineBreak from "../../components/GreenLineBreak";
import VideoCardSlider from "../../components/VideoCardSlider";
import images from "../../constants/images";
import BrowseByTags from "../../components/BrowseByTags";
import Footer from "../../components/Footer";

const Topic = () => {
  return (
    <div>
      <NavBar />
      <div className="topic-headingAndDesc">
        <h2>BUDDHISIM</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasLorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et jus\
        </p>
      </div>
      <GreenLineBreak />
      <div className="topic-slider container-xxl">
        <VideoCardSlider
          heading="Related GroundWork"
          twoRowsFour
          recentVibes
          groundwork
        />
      </div>
      <div className="topic-slider container-xxl">
        <VideoCardSlider
          heading="Related Tools"
          twoRowsFour
          recentVibes
          tools
        />
      </div>
      <div className="topic-slider container-xl">
        <VideoCardSlider
          heading="Related GroundWork"
          twoRowsThree
          recentVibes
          groundwork
        />
      </div>
      <div className="topic-slider container-xl">
        <VideoCardSlider
          heading="Related Tools"
          twoRowsThree
          recentVibes
          tools
        />
      </div>
      <div className="topic-slider-single container-xl">
        <VideoCardSlider heading="Related GroundWork" recentVibes tools />
      </div>
      <div className="topic-slider-single container-xl">
        <VideoCardSlider heading="Related Tools" recentVibes tools />
      </div>
      <section className="idgw-5 container">
        <h2>Related Teachers</h2>
        <div className="idgw-5-row">
          <div className="idgw-5-col-1">
            <img src={images.teacher1} />
          </div>
          <div className="idgw-5-col-2">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasLorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor I Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut.<span>Link</span>
            </p>
          </div>
        </div>
        <div className="idgw-5-row">
          <div className="idgw-5-col-1">
            <img src={images.teacher2} />
          </div>
          <div className="idgw-5-col-2">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasLorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor I Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut.<span>Link</span>
            </p>
          </div>
        </div>
      </section>
      <BrowseByTags />
      <Footer />
    </div>
  );
};

export default Topic;
