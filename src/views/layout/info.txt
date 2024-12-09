import { useEffect,  } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prepareState = async () => {
      const token = await localStorage.getItem("token");

      if (token) {
        return navigate("/my-wallet");
      }
      return navigate("/home  ");
    };

    prepareState();
  }, [navigate]);

  return <Outlet />;
};

export default Layout;
