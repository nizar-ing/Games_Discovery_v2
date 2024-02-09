import Platform from "./Platform.ts";
import Genre from "./Genre.ts";
import Publisher from "./Publisher.ts";



export default interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    genres: Genre[];
    publishers: Publisher[];
    metacritic: number;
    rating_top: number;
    description_raw: string;
}

