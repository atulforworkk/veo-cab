import { getCarList } from "@/actions/getUserList";
import { useQuery } from "react-query";

export const useUserQuery = () =>
  useQuery({
    queryKey: ["get_Car"],
    queryFn: getCarList,
  });
