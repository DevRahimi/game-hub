import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    staleTime: ms("24h"),
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    initialData: platforms,
  });

export default usePlatforms;
