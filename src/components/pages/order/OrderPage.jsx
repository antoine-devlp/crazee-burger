import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const OrderPage = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>Bonjour {state.login}</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
};
