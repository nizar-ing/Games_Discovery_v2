import React from 'react';
import {Badge} from "@chakra-ui/react";

const CriticScore: React.FC<{ score: number }> = ({score}) => {
    let color = (score > 80) ? 'green' : (score > 60) ? 'yellow' : 'crimson';
    return (
        <Badge fontSize='16px' paddingX={2} borderRadius='4px' colorScheme={color}>{score}</Badge>
    );
};

export default CriticScore;