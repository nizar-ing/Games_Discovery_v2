import React from "react";
import {Game} from "../models/GameUtils.ts";
import DefinitionItem from "./DefinitionItem.tsx";
import {SimpleGrid, Text} from "@chakra-ui/react";
import CriticScore from "./CriticScore.tsx";

const GameAttributes: React.FC<{game: Game}> = ({game}) => {
    return (
        <SimpleGrid columns={2} as='dl'>
            <DefinitionItem term='Platforms'>
                {
                    game.parent_platforms.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)
                }
            </DefinitionItem>
            <DefinitionItem term='Metascore'>
                <CriticScore score={game.metacritic}/>
            </DefinitionItem>
            <DefinitionItem term='Genres'>
                {
                    game.genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>)
                }
            </DefinitionItem>
            <DefinitionItem term='Publishers'>
                {
                    game.publishers?.map(({id, name}) => <Text key={id}>{name}</Text>)
                }
            </DefinitionItem>
        </SimpleGrid>
    );
};

export default GameAttributes;