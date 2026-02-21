import { Navigate } from "react-router-dom";

// Simulate authentication check
const isAuthenticated = () => {
  return true; // change to false to test redirect
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
