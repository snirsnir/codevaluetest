import React from "react";
import SearchBarContainer from "./SearchBarContainer";

const PageContainer = ({ setCurrentProductId, children }) => {
  return (
    <div className="pageHeadingContainer">
      <div className="pageHeading">
        <h1>My Store (snir doani - 050-8283860)</h1>
      </div>
      <SearchBarContainer setCurrentProductId={setCurrentProductId} />
      <main>{children}</main>
    </div>
  );
};

export default PageContainer;
