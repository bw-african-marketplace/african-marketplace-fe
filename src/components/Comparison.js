// Comparison Page Component

import React from "react";
import { Container } from "semantic-ui-react";
import ProductCard from "./ProductCard";

const Comparison = () => {
  return (
    <Container>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  );
};

export default Comparison;
