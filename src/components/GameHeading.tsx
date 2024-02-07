import React from 'react';
import {GameQuery} from "../query-objects/GameQuery.ts";
import {Heading} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres.ts";
import usePlatforms from "../hooks/usePlatforms.ts";

const GameHeading: React.FC<{gameQuery: GameQuery}> = ({gameQuery}) => {
    const {data: genres} = useGenres();
    const {data: platforms} = usePlatforms();
    const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
    const platform = platforms?.results.find((p) => p.id === gameQuery.platformId);
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
    return (
        <Heading as='h1' fontSize='5xl' marginY={5}>
            {heading}
        </Heading>
    );
};

export default GameHeading;