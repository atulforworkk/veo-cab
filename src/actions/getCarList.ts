import axios from "@/services/axios";
import { userList } from "@/types/userList";

export const getCarList = async (): Promise<userList> => {
  const response = await axios.get("/admin/carallcount");
  return response.data;
};