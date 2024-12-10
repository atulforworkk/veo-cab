import { getUsers } from "@/actions/getUserList";
import { useQuery } from "react-query";

export const useUserQuery = () =>
  useQuery({
    queryKey: ["get_User"],
    queryFn: getUsers,
  });
