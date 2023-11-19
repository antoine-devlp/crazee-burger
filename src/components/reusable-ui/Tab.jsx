import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ keyElement, conditionClass, onClick, texte, icon }) {
  return (
    <TabStyled className={conditionClass} b-key={keyElement || ""} onClick={onClick}>
      {icon}
      {texte ? <div className="texte noclick">{texte}</div> : ""}
    </TabStyled>
  );
}

const TabStyled = styled.div`
  padding: 10px 22px;
  background: ${theme.colors.background_white};
  box-shadow: 0px -6px 8px -2px #0000001a;
  border-radius: 5px 5px 0px 0px;
  margin: 0px 1px;
  display: flex;
  align-items: center;
  height: 43px;
  color: ${theme.colors.greySemiDark};
  .texte {
    margin: 3px 0px 3px 13px;
  }
  & > * {
    pointer-events: none;
  }
  &.active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.background_white};
    &:hover {
      .texte {
        border-bottom: 2px solid ${theme.colors.background_white};
      }
    }
  }
  &:hover {
    cursor: pointer;
    .texte {
      border-bottom: 2px solid ${theme.colors.greySemiDark};
    }
  }
`;
