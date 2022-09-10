import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  useEffect(()=>{console.log(user)},[loading])
  if (loading) return <h1>Loading</h1>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}