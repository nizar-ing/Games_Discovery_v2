import React from "react";

import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";

import {Game} from "../models/GameUtils.ts";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import Emoji from "./Emoji.tsx";

const GameCard: React.FC<{ game: Game }> = ({
                                                game:
                                                    {
                                                        background_image,
                                                        name,
                                                        parent_platforms,
                                                        metacritic,
                                                        rating_top
                                                    }
                                            }) => {

    return (
        <Card>
            <Image src={getCroppedImageUrl(background_image)}/>
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={parent_platforms.map(({platform}) => platform)}/>
                    <CriticScore score={metacritic}/>
                </HStack>
                <Heading fontSize='2xl'>{name} <Emoji rating={rating_top} /></Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;