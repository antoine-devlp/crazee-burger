import { useNavigate } from "react-router";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div id="error-page">
      <h1>ErrorPage</h1>
      <button onClick={handleClick}>Retourner à la page d'accueil</button>
    </div>
  );
};
