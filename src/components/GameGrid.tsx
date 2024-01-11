import React from "react";
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {Genre} from "../models/GenreUtils.ts";
import {Platform} from "../models/GameUtils.ts";



const GameGrid: React.FC<{selectedGenre: Genre | null, selectedPlatform: Platform | null}> = ({selectedGenre, selectedPlatform}) => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform);
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={4} padding='10px'>
                {
                    isLoading && skeletons.map(((skeleton) => (<GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>)))
                }
                {
                    data.map((game) => (<GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>))
                }
            </SimpleGrid>
        </>
    );
};

export default GameGrid;