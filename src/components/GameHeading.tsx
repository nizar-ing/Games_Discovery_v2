import React from 'react';
import {GameQuery} from "../query-objects/GameQuery.ts";
import {Heading} from "@chakra-ui/react";

const GameHeading: React.FC<{gameQuery: GameQuery}> = ({gameQuery}) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
    return (
        <Heading as='h1' fontSize='5xl' marginY={5}>
            {heading}
        </Heading>
    );
};

export default GameHeading;