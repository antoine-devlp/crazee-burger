import { Link } from "react-router";

export const ErrorPage = () => {
  return (
    <div id="error-page">
      <h1>ErrorPage</h1>
      <Link to="/">
        <button>Retourner à la page d accueil</button>
      </Link>
    </div>
  );
};
