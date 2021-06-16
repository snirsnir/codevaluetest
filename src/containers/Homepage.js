import React, { useState } from "react";
import PageContainer from "../components/PageContainer";
import EditProducts from "../components/EditProducts";
import ProductsList from "../components/ProductsList";

const HomePage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "shampoo",
      description: "the best shampoo",
      price: 10
    },
    {
      id: 2,
      name: "pencil",
      description: "the best pencil in the world",
      price: 1
    },
    {
      id: 3,
      name: "phone",
      description: "redmi sucks",
      price: 1000
    }
  ]);

  const [currentProductId, setCurrentProductId] = useState(null);

  return (
    <PageContainer setCurrentProductId={setCurrentProductId}>
      <ProductsList
        products={products}
        setCurrentProductId={setCurrentProductId}
      />
      <EditProducts
        products={products}
        setProducts={setProducts}
        currentProductId={currentProductId}
      />
    </PageContainer>
  );
};

export default HomePage;
