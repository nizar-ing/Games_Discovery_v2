import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";

function App() {
    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}>
            <GridItem area='nav'>
                <NavBar/>
            </GridItem>
            <Show above='lg'>
                <GridItem area='aside' bg='crimson'>Aside</GridItem>
            </Show>
            <GridItem area='main' bg='whitesmoke'>Main</GridItem>
        </Grid>
    )
}

export default App
