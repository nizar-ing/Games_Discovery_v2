
import {Game} from "../models/GameUtils.ts";
import useData from "./useData.ts";

const useGames = () => useData<Game>('/games');

export default useGames;