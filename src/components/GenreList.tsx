import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";;
import useGameQueryStore from "../store.ts";
import useGenres from "../hooks/useGenres.ts";

const GenreList = () => {
    const {data, isLoading, error} = useGenres();
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
    if (error) return null;
    if (isLoading) return (<HStack justifyContent='center' alignItems='center'><Spinner/></HStack>);
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {
                    data?.results.map((genre) => (<ListItem key={genre.id} paddingY='6px'>
                            <HStack>
                                <Image boxSize='32px' objectFit='cover' borderRadius={8}
                                       src={getCroppedImageUrl(genre.image_background)}/>
                                <Button whiteSpace='normal' textAlign='left'
                                        fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'} fontSize='lg'
                                        variant='link' onClick={() => setSelectedGenreId(genre.id)}>{genre.name}
                                </Button>
                            </HStack>
                        </ListItem>
                    ))
                }
            </List>
        </>
    );
};

export default GenreList;