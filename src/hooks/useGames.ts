
import {Game} from "../models/GameUtils.ts";
import useData from "./useData.ts";
import {GameQuery} from "../query-objects/GameQuery.ts";

const useGames = (gameQuery: GameQuery) => useData<Game>('/games',
    {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder}}, [gameQuery]);

export default useGames;