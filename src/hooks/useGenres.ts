
import { Genre} from "../models/GenreUtils.ts";
import useData from "./useData.ts";

const useGenres = () => useData<Genre>('/genres');

export default useGenres;