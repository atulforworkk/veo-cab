
import { createBrowserRouter } from "react-router-dom";
import Home from "@/page/home/Home";
import PreAuthLayout from "@/layout/PreAuthLayout";
import AdminLogin from "@/page/adminLogin/AdminLogin";
import SubAdminLogin from "@/page/subAdminLogin/SubAdminLogin";
import PostAuthLayout from "@/layout/PostAuthLayout";
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
        element: <SubAdminLogin/>,
      },


    ],
  },
  {
    path: "/dashboard",
    element: <PostAuthLayout />,
    children: [
     

    ],
  },
]);

export default router;
