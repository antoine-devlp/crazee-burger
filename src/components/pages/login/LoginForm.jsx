import { useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

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
    if (event.target.value != "") {
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
      <div className="formInfo">
        <div className="inputIcon">
          <BsPersonCircle className="icon" />
          <input
            onChange={handleChange}
            type="text"
            value={login}
            placeholder="Entrez votre prénom"
            required
          />
        </div>
        <button className={isClicked ? "clicked" : ""}>
          Accéder à mon espace <MdArrowForwardIos className="arrow" />
        </button>
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
    text-align: center;
  }
  h1 {
    margin-top: 0px;
    font-size: ${theme.fonts.P5};
    margin-bottom: 32px;
    font-weight: ${theme.weights.bold};
  }
  hr {
    border-color: ${theme.colors.red};
    margin-bottom: 40px;
  }
  h2 {
    font-size: ${theme.fonts.P4};
    margin-bottom: 18px;
  }
  .formInfo {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .formInfo .inputIcon {
    padding: 18px 24px;
    margin-bottom: 18px;
    background-color: #fff;
    display: inherit;
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
  }

  .formInfo .inputIcon .icon {
    color: ${theme.colors.greySemiDark};
    font-size: 20px;
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
  .formInfo .inputIcon input {
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    color: ${theme.colors.dark};
  }
  button {
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
  }
  button .arrow {
    margin-left: 10px;
    font-size: 15px;
  }
  button:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  button:active,
  button.clicked {
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
    transition: all 0.3s ease-in-out;
  }
`;
