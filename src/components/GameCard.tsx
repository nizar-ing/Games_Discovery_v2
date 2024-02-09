import React from "react";

import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";

import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import Emoji from "./Emoji.tsx";
import {Link} from "react-router-dom";
import Game from "../models/Game.ts";

const GameCard: React.FC<{ game: Game }> = ({
                                                game:
                                                    {
                                                        background_image,
                                                        name,
                                                        slug,
                                                        parent_platforms,
                                                        metacritic,
                                                        rating_top
                                                    }
                                            }) => {

    return (
        <Card width='310px' height='400px'>
            <Image src={getCroppedImageUrl(background_image)}/>
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={parent_platforms.map(({platform}) => platform)}/>
                    <CriticScore score={metacritic}/>
                </HStack>
                <Heading fontSize='2xl'>
                    <Link to={'games/' + slug}>{name}</Link>
                    <Emoji rating={rating_top}/>
                </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;