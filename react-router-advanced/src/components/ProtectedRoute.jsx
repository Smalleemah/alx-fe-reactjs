import { Navigate } from "react-router-dom";

// Simulate an authentication hook
const useAuth = () => {
  // Example: you could replace this with real logic
  const user = { loggedIn: true }; // set false to test redirect
  return user && user.loggedIn;
};

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
