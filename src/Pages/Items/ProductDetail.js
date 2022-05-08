import React from "react";
import { useParams } from "react-router";
import useProductDetail from "../hooks/useProductDetail";

const ProductDetail = () => {
  const {productId} = useParams();
  const [product] = useProductDetail(productId);
  return (
  <div>Protected page ProductDetail {product.name}</div>
  )
};

export default ProductDetail;
