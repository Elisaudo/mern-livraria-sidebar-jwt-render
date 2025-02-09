import { Navigate, Outlet, useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = ({allowedRoles}) => {
  const [cookies] = useCookies([]);
  const token = cookies.token;
  const navigate = useNavigate();

  if (!token) return <Navigate to="/" />;

  if (allowedRoles.includes(token.role)) {
    return <Outlet/>;
  }
 else{
   navigate(-1);
  }
};

export default ProtectedRoute;
