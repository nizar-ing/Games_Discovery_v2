import useGenres from "./useGenres.ts";

const UseGenre = (genreId?: number) => {
    const {data: genres} = useGenres();
    return genres?.results.find((g) => g.id === genreId);
};

export default UseGenre;