import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {Heading, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttributes from "../components/GameAttributes.tsx";


const GameDetailPage = () => {
    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);

    if (isLoading) return <Spinner/>;
    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
            <GameAttributes game={game} />
        </>
    );
};

export default GameDetailPage;