import React from "react";
import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import InfiniteScroll from "react-infinite-scroll-component";


const GameGrid = () => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const {
        data,
        error,
        isLoading,
        /*isFetchingNextPage,*/
        fetchNextPage,
        hasNextPage
    } = useGames();
    const fetchedGamesCount = data?.pages.reduce(
        (total, page) => total + page.results.length, 0
    ) || 0;

    if (error) return <Text>{error.message}</Text>;

    return (
        <InfiniteScroll
            next={() => fetchNextPage()}
            hasMore={!!hasNextPage}
            loader={<Spinner/>}
            dataLength={fetchedGamesCount}
        >
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6} padding='10px'>
                {
                    isLoading && skeletons.map(((skeleton) => (<GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>)))
                }
                {
                    data?.pages.map((page, index) => <React.Fragment key={index}>
                        {
                            page?.results.map((game) => (<GameCardContainer key={game.id}>
                                <GameCard game={game}/>
                            </GameCardContainer>))
                        }
                    </React.Fragment>)
                }
            </SimpleGrid>
        </InfiniteScroll>
            /*hasNextPage &&
                <Button marginY={5} onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </Button>*/

    );
};

export default GameGrid;