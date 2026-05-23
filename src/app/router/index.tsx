import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicRoute from "../../pages/Auth/Public/PublicRoute";
import Login from "../../pages/Auth/Login";
import PrivateRoute from "../../pages/Auth/Private/PrivateRoute";
import MainLayout from "../../layouts/MainLayout";
import Dashboard from "../../pages/Dashboard";
import NotFound from "../../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    )
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])