
import {Game} from "../models/GameUtils.ts";
import {GameQuery} from "../query-objects/GameQuery.ts";
import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import {FetchResponse} from "../models/FetchResponse.ts";

const useGames = (gameQuery: GameQuery) =>
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => ApiClient.get<FetchResponse<Game>>('/games', {
            params: {genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText}
        }).then((response) => response.data)
    });
export default useGames;