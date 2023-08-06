import { styled } from "styled-components";
import { theme } from "../../theme";

export const TextInput = ({ value, onChange, Icon, ...extraProps }) => {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  );
};

const TextInputStyled = styled.div`
  padding: 18px 24px;
  margin-bottom: 18px;
  background-color: #fff;
  display: inherit;
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  input {
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    color: ${theme.colors.dark};
  }
`;
