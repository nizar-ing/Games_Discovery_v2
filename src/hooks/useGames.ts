import {useInfiniteQuery} from "@tanstack/react-query";
import ms from "ms";

import {Game} from "../models/GameUtils.ts";
import {GameQuery} from "../query-objects/GameQuery.ts";
import ApiClient from "../services/api-client.ts";
import {FetchResponse} from "../models/FetchResponse.ts";

const apiClient = new ApiClient<Game>('/games');
const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam}) => apiClient.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms('24h') // 24 hours
    });
export default useGames;