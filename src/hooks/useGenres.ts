import {useQuery} from "@tanstack/react-query";
import ms from "ms";

import ApiClient from "../services/api-client.ts";

import genres from "../data/genres";
import Genre from "../models/Genre.ts";

const apiClient = new ApiClient<Genre>('/genres');
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 hours
    initialData: genres
});

export default useGenres;