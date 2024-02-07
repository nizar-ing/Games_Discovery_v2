import React from 'react';
import {GameQuery} from "../query-objects/GameQuery.ts";
import {Heading} from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform.ts";
import useGenre from "../hooks/useGenre.ts";

const GameHeading: React.FC<{gameQuery: GameQuery}> = ({gameQuery}) => {
    const genre = useGenre(gameQuery.genreId);
    const platform = usePlatform(gameQuery.platformId);
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
    return (
        <Heading as='h1' fontSize='5xl' marginY={5}>
            {heading}
        </Heading>
    );
};

export default GameHeading;