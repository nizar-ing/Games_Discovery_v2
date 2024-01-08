import {useEffect, useState} from "react";
import ApiClient from "../services/api-client.ts";
import {Text} from "@chakra-ui/react";

interface Game {
    id: number,
    name: string
}

interface FetchGameResponse {
    count: number,
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        ApiClient.get<FetchGameResponse>('/games')
            .then((res) => setGames(res.data.results))
            .catch((err) => setError(err.message));
    }, []);

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {
                    games.map(({id, name}) => <li key={id}>{name}</li>)
                }
            </ul>
        </>
    );
};

export default GameGrid;