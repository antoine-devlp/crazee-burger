import { useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

import { theme } from "../../../theme";
import { TextInput } from "../../reusable-ui/TextInput";

import { MdArrowForwardIos } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export const LoginForm = () => {
  const navigate = useNavigate();
  // state
  const [login, setLogin] = useState("");
  const [isClicked, setisClicked] = useState(false);

  // comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`order/${login}`);
    setLogin("");
  };
  const handleChange = (event) => {
    setLogin(event.target.value);
    if (event.target.value) {
      setisClicked(true);
    } else {
      setisClicked(false);
    }
  };
  // render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div className="form">
        <TextInput
          value={login}
          onChange={handleChange}
          Icon={<BsPersonCircle className="icon" />}
          placeholder={"Entrez votre prénom"}
          required
        />
        <PrimaryButton
          checkIfClicked={isClicked}
          label={"Accéder à mon espace"}
          Icon={<MdArrowForwardIos className="arrow" />}
        />
      </div>
    </LoginFormStyled>
  );
};
const LoginFormStyled = styled.form`
  box-sizing: border-box;
  max-width: 464px;
  width: 100%;
  padding: 0px 32px;
  h1,
  h2 {
    color: ${theme.colors.white};
    font-family: ${theme.family.Amatic};
    font-weight: ${theme.weights.bold};
    text-align: center;
  }
  h1 {
    margin-top: 0px;
    font-size: ${theme.fonts.P5};
    margin-bottom: ${theme.fonts.lg};
    font-weight: ${theme.weights.bold};
  }
  hr {
    border: 1.5px solid ${theme.colors.red};
    margin-bottom: 40px;
  }
  h2 {
    font-size: ${theme.fonts.P4};
    margin-bottom: 18px;
  }
  .form {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .icon {
    color: ${theme.colors.greySemiDark};
    font-size: 20px;
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
  .arrow {
    margin-left: 10px;
    font-size: 15px;
  }
`;
