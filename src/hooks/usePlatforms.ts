import {useQuery} from "@tanstack/react-query";
import ms from 'ms';

import ApiClient from "../services/api-client";
import platforms from "../data/platforms.ts";
import Platform from "../models/Platform.ts";


const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime:ms('24h'),
    initialData: platforms
});

export default usePlatforms;