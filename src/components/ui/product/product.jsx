import React from "react";
import {
  ItemWrapper,
  DescContent,
  Thumbnail,
  LinkThumb,
  ImgThumb,
  ButtonAddToCart,
} from "./styles";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../redux/features/cart/cartReducer";

const Product = ({ item }) => {
  const attr = item?.attributes;
  const dispatch = useDispatch();

  return (
    <ItemWrapper>
      <Thumbnail>
        <LinkThumb href="#">
          <ImgThumb
            src={"http://localhost:1337" + attr.img.data.attributes.url}
            alt={"Product" + attr.title}
          />
        </LinkThumb>
      </Thumbnail>
      <DescContent>
        <span>{attr.title}</span>
        <span>{attr.price}</span>
      </DescContent>
      <ButtonAddToCart
        onClick={() =>
          dispatch(
            addProductToCart({
              id: item.id,
              title: attr.title,
              price: attr.price,
              qty: 1,
            })
          )
        }
      >
        Add Cart
      </ButtonAddToCart>
    </ItemWrapper>
  );
};

Product.propTypes = {
  item: PropTypes.object,
};

export default Product;
