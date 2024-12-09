import Login from "@/page/login/Login";
import { createBrowserRouter } from "react-router-dom";

import Home from "@/page/home/Home";
import PreAuthLayout from "@/layout/PreAuthLayout";
import AdminLogin from "@/page/adminLogin/AdminLogin";
const router = createBrowserRouter([
  {

    path:"/",
    element:<PreAuthLayout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/admin-login",
        element: <AdminLogin/>,
      },

      {
        path: "/login",
        element: <Login />,
      },


    ]
  }
 


]);

export default router;
