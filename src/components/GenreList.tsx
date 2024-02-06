import React from "react";
import useGenres from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import {Genre} from "../models/GenreUtils.ts";

const GenreList: React.FC<{ onSelectedGenre: (genre: Genre) => void, genreId: number | undefined }> = ({
                                                                                                           onSelectedGenre,
                                                                                                           genreId
                                                                                                       }) => {
    const {data, isLoading, error} = useGenres();
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
                                        fontWeight={genreId === genre.id ? 'bold' : 'normal'} fontSize='lg'
                                        variant='link' onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
                            </HStack>
                        </ListItem>
                    ))
                }
            </List>
        </>
    );
};

export default GenreList;