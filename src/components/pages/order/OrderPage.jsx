import { useLocation, useNavigate } from "react-router";

export const OrderPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Bonjour {state.login}</h1>
      <br />
      <button onClick={handleClick}>Déconnexion</button>
    </div>
  );
};
