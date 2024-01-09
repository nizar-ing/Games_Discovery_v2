
export interface  Genre {
    id: number;
    name: string;
}

export interface FetchGenreRespone {
    count: number;
    results: Genre[];
}