import { useState } from "react";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const navigate = useNavigate();
  // state
  const [login, setLogin] = useState("");
  // comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/order", { state: { login } });
    setLogin("");
  };

  const handleChange = (event) => {
    setLogin(event.target.value);
  };
  // render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        onChange={handleChange}
        type="text"
        value={login}
        placeholder="Entrez votre prénom..."
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
};
