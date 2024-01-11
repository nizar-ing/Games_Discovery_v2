
import {Game} from "../models/GameUtils.ts";
import useData from "./useData.ts";
import {GameQuery} from "../query-objects/GameQuery.ts";

const useGames = (gameQuery: GameQuery) => useData<Game>('/games',
    {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id}}, [gameQuery]);

export default useGames;