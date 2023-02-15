import React from "react";
import { ButtonMiniCart } from "./styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MiniCart = ({ count }) => {
  return (
    <>
      {count ? (
        <Link to="/cart">
          <ButtonMiniCart>Cart: 1  {count}</ButtonMiniCart>
        </Link>
      ) : null}
    </>
  );
};

MiniCart.propTypes = {
  count: PropTypes.number,
};

export default MiniCart;
