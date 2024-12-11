import { useEffect,  } from "react";
import { Outlet, useNavigate } from 'react-router-dom'

type Props = {}

const PreAuthLayout = (props: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const prepareState = async () => {
      const token = await localStorage.getItem("token");

      if (token) {
        return navigate("/dashboard");
      }
      return navigate("/");
    };

    prepareState();
  }, [navigate]);
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default PreAuthLayout