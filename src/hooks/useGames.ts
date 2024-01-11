
import {Game, Platform} from "../models/GameUtils.ts";
import useData from "./useData.ts";
import {Genre} from "../models/GenreUtils.ts";

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games',
    {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;