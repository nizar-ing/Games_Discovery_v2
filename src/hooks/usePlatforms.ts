import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import {Platform} from "../models/GameUtils";
import platforms from "../data/platforms.ts";


const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms
});

export default usePlatforms;