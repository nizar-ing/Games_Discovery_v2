import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import {Genre} from "../models/GenreUtils.ts";
import genres from "../data/genres";
import {FetchResponse} from "../models/FetchResponse.ts";

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => ApiClient.get<FetchResponse<Genre>>('/genres')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {count: genres.length, results: genres}
});

export default useGenres;