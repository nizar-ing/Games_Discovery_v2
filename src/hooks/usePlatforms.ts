import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import {FetchResponse} from "../models/FetchResponse";
import {Platform} from "../models/GameUtils";
import platforms from "../data/platforms";




const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => ApiClient.get<FetchResponse<Platform>>('/platforms/lists/parent')
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: platforms.length, results: platforms}
});

export default usePlatforms;