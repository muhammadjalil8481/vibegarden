import React from "react";
import ContainerSection from "../Container";
import SearchInput from "../SearchInput";

const BrowseByTags = () => {
  return (
    <section className="bbt bg-gradient-pink">
      <ContainerSection isFluid={"yes"}>
        <div className="container bbt-container ">
          <h2 className="bbt-heading text-center">Browse By Tags</h2>
          <SearchInput />
        </div>
      </ContainerSection>
    </section>
  );
};

export default BrowseByTags;
