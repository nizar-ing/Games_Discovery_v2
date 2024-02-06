import {Game} from "../models/GameUtils.ts";
import {GameQuery} from "../query-objects/GameQuery.ts";
import {useInfiniteQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import {FetchResponse} from "../models/FetchResponse.ts";

const apiClient = new ApiClient<Game>('/games');
const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam}) => apiClient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        }
    });
export default useGames;