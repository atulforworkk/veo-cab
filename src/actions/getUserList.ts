import axios from "@/services/axios";
import { userList } from "@/types/userList";

export const getUsers = async (token: string): Promise<userList> => {
  const response = await axios.get("/admin/profile", {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDE4NWNmZTZkNDc1NGRmMzdhYTg2NyIsImlhdCI6MTczMzg0Njk2MSwiZXhwIjoxNzY1MzgyOTYxfQ.TrBrnyv9SRkN-MKmEbqOvc1URxx5h0UDWSVnObpUsyo`, // Add the token to the Authorization header
    },
  });
  return response.data;
};