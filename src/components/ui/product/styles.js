import styled from "styled-components";

export const ItemWrapper = styled.div`
  position: relative;
  padding: 8px;
`;

export const Thumbnail = styled.div`
  position: relative;
`;

export const DescContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const LinkThumb = styled.a`
  display: block;
`;

export const ImgThumb = styled.img`
  object-fit: cover;
  height: auto;
  width: 100%;
`;

export const ButtonAddToCart = styled.button`
  width: 100%;
  color: #ffffff;
  background-color: #204d9c;
  border: none;
  padding: 5px;
  margin-top: 15px;
  border-radius: 5px;
  cursor: pointer;
`;
