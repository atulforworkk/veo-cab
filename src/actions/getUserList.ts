import axios from "@/services/axios";
import { userList } from "@/types/userList";

export const getUsers = async (): Promise<userList> => {
  const response = await axios.get("/admin/profile");
  return response.data;
};