import {useEffect, useState} from "react";
import ApiClient from "../services/api-client.ts";
import {CanceledError} from "axios";
import {FetchGenreRespone, Genre} from "../models/GenreUtils.ts";

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        ApiClient.get<FetchGenreRespone>('/genres', {signal: controller.signal})
            .then((res) => {
                setGenres(res.data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    return {genres, error, isLoading};
};

export default useGenres;