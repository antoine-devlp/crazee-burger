import { useState } from "react";

export const LoginForm = () => {
  // state
  const [login, setLogin] = useState("");
  // comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${login}`);
    setLogin("");
  };

  const handleChange = (event) => {
    // recup state
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
