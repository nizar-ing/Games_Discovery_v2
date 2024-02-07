import {useState} from "react";
import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";

import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {GameQuery} from "./query-objects/GameQuery.ts";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";



function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    return (
        <Grid templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
             }}
              templateColumns={{
                  base: '1fr',
                  lg: '200px 1fr'
              }}
        >
            <GridItem area='nav'>
                <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
            </GridItem>
            <Show above='lg'>
                <GridItem area='aside' paddingX={5}>
                    <GenreList
                        selectedGenreId={gameQuery.genreId}
                        onSelectedGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}
                    />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <Box paddingLeft={3}>
                    <GameHeading gameQuery={gameQuery}/>
                    <HStack spacing={5} marginBottom={5}>
                        <PlatformSelector selectedPlatformId={gameQuery.platformId}
                                          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}/>
                        <SortSelector selectedOrder={gameQuery.sortOrder}
                                      onSelectOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                    </HStack>
                </Box>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    )
}

export default App
