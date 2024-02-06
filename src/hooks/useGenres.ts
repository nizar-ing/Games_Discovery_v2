import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import {Genre} from "../models/GenreUtils.ts";
import genres from "../data/genres";

const apiClient = new ApiClient<Genre>('/genres');
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {count: genres.length, results: genres}
});

export default useGenres;