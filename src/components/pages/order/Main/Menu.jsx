import React, { useState } from 'react'
import { fakeMenu2, fakeMenu1 } from "../../../../fakeData/fakeMenu";
import styled from 'styled-components';
import Card from '../../../reusable-ui/Card';
export default function Menu() {
  const [Menu, setMenu] = useState(fakeMenu2)
  return (
    <MenuStyled>
      {Menu.map((menu) => {
        return(
          <Card 
            key={menu.id}
            image={menu.imageSource}
            titre={menu.title}
            prix={menu.price}/>
        );
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  display: grid;
  grid-template: auto / repeat(1, 1fr);
  grid-gap: 30px;
  justify-items: center;
  padding: 50px 50px 150px;

  @media (min-width: 768px) {
    grid-template: auto / repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-gap: 45px;
    grid-template: auto / repeat(3, 1fr);
  }
  @media (min-width: 1400px) {
    grid-gap: 60px;
    grid-template: auto / repeat(4, 1fr);
  }
`;

