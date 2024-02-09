import ApiClient from "../services/api-client.ts";
import {Screenshot} from "../models/Screenshot.ts";
import {useQuery} from "@tanstack/react-query";

const useScreenshots = (gameId: number) => {
    const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);
    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll
    });
};

export default useScreenshots;