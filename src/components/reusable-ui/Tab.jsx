import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ className, onClick, texte, icon }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      {icon}
      {texte && <span className="texte">{texte}</span>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  padding: 10px 22px;
  background: ${theme.colors.background_white};
  box-shadow: 0px -6px 8px -2px #0000001a;
  border-radius: 5px 5px 0px 0px;
  margin: 0px 1px;
  display: flex;
  align-items: center;
  height: 43px;
  color: ${theme.colors.greySemiDark};
  font-size: ${theme.fonts.SM};
  .texte {
    margin: 3px 0px 3px 13px;
  }
  &:hover {
    cursor: pointer;
    border-bottom: 0;
    .texte {
      border-bottom: 2px solid ${theme.colors.greySemiDark};
    }
  }
`;
