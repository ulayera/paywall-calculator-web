import { Link } from "react-router-dom";
import { useAuth } from "../../../services/auth-context.service";

export default function Home() {
  const auth = useAuth();
  return (
    <>
      <p>Welcome!</p>
      {auth.token ? (
        <p>Please, use the menu to navigate the site.</p>
      ) : (
        <p>
          Please <Link to="/login">login</Link> to access the application.
        </p>
      )}
    </>
  );
}
