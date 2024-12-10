import axios from "@/services/axios";
import { userList } from "@/types/userList";

export const getCarList = async (): Promise<userList> => {
  const response = await axios.get("/admin/carallcount", {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDE4NWNmZTZkNDc1NGRmMzdhYTg2NyIsImlhdCI6MTczMzg0Njk2MSwiZXhwIjoxNzY1MzgyOTYxfQ.TrBrnyv9SRkN-MKmEbqOvc1URxx5h0UDWSVnObpUsyo`, // Add the token to the Authorization header
    },
  });
  return response.data;
};