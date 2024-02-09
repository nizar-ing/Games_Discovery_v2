import useGenres from "./useGenres.ts";
import Genre from "../models/Genre.ts";

const UseGenre = (genreId?: number) => {
    const {data: genres} = useGenres();
    return genres?.results.find((g: Genre) => g.id === genreId);
};

export default UseGenre;