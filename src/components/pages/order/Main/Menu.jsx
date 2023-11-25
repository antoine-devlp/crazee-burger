import React, { useState } from "react";
import { fakeMenu2, fakeMenu1 } from "../../../../fakeData/fakeMenu";
import styled from "styled-components";
import Card from "../../../reusable-ui/Card";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
export default function Menu() {
  const [Menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled>
      {Menu.map(({ id, imageSource, title, price }) => {
        return <Card key={id} image={imageSource} titre={title} prix={formatPrice(price)} />;
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template: auto / repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  justify-items: center;
  padding: 50px 50px 150px;
  overflow-y: scroll;

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: ${theme.borderRadius.round};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (min-width: 1200px) {
    grid-gap: 45px;
  }
  @media (min-width: 1400px) {
    grid-gap: 60px;
  }
`;
