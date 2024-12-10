import { createBrowserRouter } from "react-router-dom";
import Home from "@/page/home/Home";
import PreAuthLayout from "@/layout/PreAuthLayout";
import AdminLogin from "@/page/adminLogin/AdminLogin";
import SubAdminLogin from "@/page/subAdminLogin/SubAdminLogin";
import PostAuthLayout from "@/layout/PostAuthLayout";
import UserList from "@/page/dashboard/usersList/UsersList";
import Dashboard from "@/page/dashboard/Dashboard";
import ForgotPassword from "@/page/forgotPassword/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PreAuthLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admin-login",
        element: <AdminLogin />,
      },
      {
        path: "/subadmin-login",
        element: <SubAdminLogin />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword/>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PostAuthLayout />,
    children: [
      {
        path: "", // Correct: Relative path to "/dashboard"
        element: <Dashboard />,
      },
      {
        path: "users-list", // Correct: Relative path to "/dashboard"
        element: <UserList />,
      },
    ],
  },
]);

export default router;
