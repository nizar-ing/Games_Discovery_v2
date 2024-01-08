import {Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";


const GameGrid = () => {
    const {games, error} = useGames();
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