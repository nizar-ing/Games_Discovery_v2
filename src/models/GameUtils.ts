import {Genre} from "./GenreUtils.ts";
import {Publisher} from "./Publisher.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
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

