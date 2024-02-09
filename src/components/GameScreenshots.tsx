import React from "react";
import useScreenshots from "../hooks/useScreenshots.ts";
import {Image, SimpleGrid} from "@chakra-ui/react";
import Screenshot from "../models/Screenshot.ts";

const GameScreenshots: React.FC<{gameId: number}> = ({gameId}) => {
    const {data, isLoading, error} = useScreenshots(gameId);
    if(isLoading) return null;
    if(error) throw error;
    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
            {
                data?.results.map((file: Screenshot) => <Image key={file.id} src={file.image} />)
            }
        </SimpleGrid>
    );
};

export default GameScreenshots;