import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetArtists = () => {
  const { data } = useQuery({
    queryKey: ["artists"],
    queryFn: async () => {
      const res = await axios.get("http://192.168.0.6:3333/users");
      return res.data;
    },
  });

  return { data };
};
