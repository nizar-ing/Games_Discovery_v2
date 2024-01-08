import React from "react";

import {Card, CardBody, Heading, Image} from "@chakra-ui/react";

import {Game} from "../models/GameUtils.ts";
import PlatformIconList from "./PlatformIconList.tsx";

const GameCard: React.FC<{ game: Game }> = ({
                                                game:
                                                    {
                                                        background_image,
                                                        name,
                                                        parent_platforms
                                                    }
                                            }) => {

    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={background_image}/>
            <CardBody>
                <Heading fontSize='2xl'>{name}</Heading>
                <PlatformIconList platforms={parent_platforms.map(({platform}) => platform)} />
            </CardBody>
        </Card>
    );
};

export default GameCard;