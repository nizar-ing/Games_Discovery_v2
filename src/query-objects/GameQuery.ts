import {Genre} from "../models/GenreUtils.ts";
import {Platform} from "../models/GameUtils.ts";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}