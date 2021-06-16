import React from "react";

const SearchBarContainer = ({ setCurrentProductId }) => {
  return (
    <div>
      <button onClick={() => setCurrentProductId(null)}>+ Add</button>
      <input
        placeholder="Search products"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default SearchBarContainer;
