
import {Game} from "../models/GameUtils.ts";
import useData from "./useData.ts";
import {Genre} from "../models/GenreUtils.ts";

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;