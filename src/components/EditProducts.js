import React, { useState, useEffect } from "react";

const EditProducts = ({ products, setProducts, currentProductId }) => {
  const currentProduct = products.find(
    (product) => product.id === currentProductId
  );

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  useEffect(() => {
    if (!currentProduct) {
      setProductName("");
      setProductDescription("");
      setProductPrice("");
    } else {
      setProductName(currentProduct.name);
      setProductDescription(currentProduct.description);
      setProductPrice(currentProduct.price);
    }
  }, [currentProductId, currentProduct]);

  const productToSubmitId = currentProduct
    ? currentProduct.id
    : products.length + 1;

  const handleSubmit = (e) => {
    const productToSubmit = {
      id: productToSubmitId,
      name: productName,
      description: productDescription,
      price: Number(productPrice)
    };
    e.preventDefault();
    if (!currentProduct) {
      console.log([...products, productToSubmit]);
      setProducts([...products, productToSubmit]);
    }

    const newProducts = products;
    newProducts[newProducts.indexOf(currentProduct)] = productToSubmit;
    setProducts([...newProducts]);
  };

  return (
    <form onSubmit={handleSubmit} className="editProductsContainer">
      <div className="inputContainer">
        <label to="productName">Name</label>
        <input
          id="productName"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <label to="description">Description</label>
        <textarea
          id="description"
          placeholder="Product Name"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <label to="price">Price</label>
        <input
          id="price"
          placeholder="Product Price"
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <input type="submit" value="Save" className="submitButton" />
    </form>
  );
};

export default EditProducts;
