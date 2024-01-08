import React from "react";

import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";

import {Game} from "../models/GameUtils.ts";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";

const GameCard: React.FC<{ game: Game }> = ({
                                                game:
                                                    {
                                                        background_image,
                                                        name,
                                                        parent_platforms,
                                                        metacritic
                                                    }
                                            }) => {

    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={background_image}/>
            <CardBody>
                <Heading fontSize='2xl'>{name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={parent_platforms.map(({platform}) => platform)}/>
                    <CriticScore score={metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;