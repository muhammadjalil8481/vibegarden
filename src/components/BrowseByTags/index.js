import React from "react";
import ContainerSection from "../Container";
import SearchInput from "../SearchInput";

const BrowseByTags = ({ heading = "Browse By Tags" }) => {
  return (
    <section className="bbt bg-gradient-pink">
      <ContainerSection isFluid={"yes"}>
        <div className="container bbt-container d-flex flex-column ">
          <h2 className="bbt-heading text-center">Browse By Tags</h2>
          <SearchInput />
          <div className="bbt-subTextContainer">
            <h5 className="bbt-subtext">Recent Search Tags</h5>
            <div />
          </div>
          <div className="row bbt-tags-row">
            <div className="col-3 bbt-tag">#Lorem_Ispum</div>
            <div className="col-3 bbt-tag">#Lorem_Ispum</div>
            <div className="col-3 bbt-tag">#Lorem_Ispum</div>
            <div className="w-100"></div>
            <div className="col-3 bbt-tag">#Lorem_Ispum</div>
            <div className="col-3 bbt-tag">#Lorem_Ispum</div>
            <div className="col-3 bbt-tag">#Lorem_Ispum</div>
            <div className="w-100"></div>
            <div className="col-3 bbt-tag">#Lorem_Ispum</div>
            <div className="col-3 bbt-tag">#Lorem_Ispum</div>
            <div className="col-3 bbt-tag">#Lorem_Ispum</div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default BrowseByTags;
