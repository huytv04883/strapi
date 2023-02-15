import React from "react";
import { Col, Row } from "antd";
import Product from "../product/product";
import { useProducts } from "../../../hook/useProudcts";
import { ProductsWrapper } from "./styles";
import { MiniCart } from "../miniCart";
import { useSelector } from "react-redux";

const Products = () => {
  const { dataProducts } = useProducts();
  const products = useSelector((state) => state.cart.products);
  const totalPr = products.reduce(
    (total, currentTotal) => total + currentTotal.qty,
    0
  );

  return (
    <ProductsWrapper>
      <Row>
        {dataProducts?.map((item, index) => {
          return (
            <Col span={6} key={index}>
              <Product item={item} />
            </Col>
          );
        })}
      </Row>
      <MiniCart count={totalPr} />
    </ProductsWrapper>
  );
};

export default Products;
