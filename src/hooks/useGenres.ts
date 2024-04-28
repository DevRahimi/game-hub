import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery({
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
		queryKey: ["genres"],
		queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
		initialData: { count: genres.length, results: genres },
	});

export default useGenres;
