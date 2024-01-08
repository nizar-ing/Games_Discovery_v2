import React from "react";

import {Game} from "../models/GameUtils.ts";
import {Card, CardBody, Heading, Image} from "@chakra-ui/react";

const GameCard: React.FC<{game: Game}> = ({ game: {background_image, name}}) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;