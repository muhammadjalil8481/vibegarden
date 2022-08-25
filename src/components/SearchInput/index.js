import React from "react";
import ButtonFilled from "../Button/ButtonFilled";

const SearchInput = () => {
  return (
    <div className="search-input-container">
      <input className="search-input" placeholder="Search by tags" />
      <div className="search-input-btn">
        <ButtonFilled text="Search" bgGradient={"yes"} />
      </div>
    </div>
  );
};

export default SearchInput;
