import {useQuery} from "@tanstack/react-query";
import ms from "ms";

import ApiClient from "../services/api-client.ts";
import {Genre} from "../models/GenreUtils.ts";
import genres from "../data/genres";

const apiClient = new ApiClient<Genre>('/genres');
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 hours
    initialData: genres
});

export default useGenres;