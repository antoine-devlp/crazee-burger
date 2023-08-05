import { useState } from "react";

export const LoginPage = () => {
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
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={login}
          placeholder="Entrez votre prénom..."
          required
        />
        <button>Accédez à votre espace</button>
      </form>
    </div>
  );
};
