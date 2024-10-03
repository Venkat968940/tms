import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../../app/Layout/MainLayout";
import {
  DashboardPage,
  LoginPage
} from "../../app/Pages";
import { IsAuth, IsLoggedIn } from "./Auth";
import CompanyForm from "../../app/Pages/CompanyInfo/CompanyForm";

export const AppRoutes = () => {
  const routes = [
    { path: "/", element: <Navigate to="/dashboard" replace /> },
    {
      path: "/",
      element: <IsLoggedIn> <MainLayout /></IsLoggedIn>,
      children: [
        { path: "dashboard", element: <DashboardPage /> },
        {path : 'company-info', element : <CompanyForm />}
      ],
    },
    {path : '/login', element : <IsAuth><LoginPage /></IsAuth>}
  ];
  const element = useRoutes(routes);
  return element;
};
