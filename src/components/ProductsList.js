import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ products, setCurrentProductId }) => {
  return (
    <div className="productListContaienr">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          setCurrentProductId={setCurrentProductId}
        />
      ))}
    </div>
  );
};

export default ProductsList;
