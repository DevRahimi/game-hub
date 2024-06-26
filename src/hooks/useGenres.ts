import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    staleTime: ms("24h"),
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    initialData: genres,
  });

export default useGenres;
