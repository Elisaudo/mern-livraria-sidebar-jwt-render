import { Navigate, Outlet, useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";
import API from "../API";

const ProtectedRoute = ({handleError, allowedRoles}) => {
  const [cookies] = useCookies([]);
  const navigate = useNavigate();

  if (!cookies.token) return <Navigate to="/" />;

  const { data } = API.post(
    "/",
    {},
    { withCredentials: true }
  );
  const { role } = data;

  if (allowedRoles.includes(role)) {
    return <Outlet/>;
  }
 else{
   handleError("Você não está autorizado a acessar esta página!");
   navigate(-1);
  }
};

export default ProtectedRoute;
