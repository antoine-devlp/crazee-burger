import { styled } from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ checkIfClicked, Icon, label }) {
  return (
    <PrimaryButtonStyled className={checkIfClicked ? "active" : ""}>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  background-color: ${theme.colors.primary_burger};
  border: 1px solid ${theme.colors.primary_burger};
  border-radius: ${theme.borderRadius.round};
  padding: 18px 24px;
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.bold};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  &:active,
  &.active {
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
    transition: all 0.3s ease-in-out;
  }
`;
