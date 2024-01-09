import {useEffect, useState} from "react";
import ApiClient from "../services/api-client.ts";
import {CanceledError} from "axios";
import {FetchGameResponse, Game} from "../models/GameUtils.ts";

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        ApiClient.get<FetchGameResponse>('/games', {signal: controller.signal})
            .then((res) => {
                setGames(res.data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    return {games, error, isLoading};
};

export default useGames;