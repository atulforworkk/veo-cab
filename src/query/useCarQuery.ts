import { getCarList } from "@/actions/getCarList";
import { useQuery } from "react-query";

export const useCarQuery = () =>
  useQuery({
    queryKey: ["get_Car"],
    queryFn: getCarList,
  });
