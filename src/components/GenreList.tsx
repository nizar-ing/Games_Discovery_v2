import React from "react";
import useGenres from "../hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import {Genre} from "../models/GenreUtils.ts";

const GenreList: React.FC<{onSelectedGenre: (genre: Genre) => void}> = ({onSelectedGenre}) => {
    const {data, isLoading, error} = useGenres();
    if(error) return null;
    if(isLoading) return (<HStack justifyContent='center' alignItems='center'><Spinner /></HStack>);
    return (
        <List>
            {
                data.map((genre) => (<ListItem key={genre.id} paddingY='6px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                            <Button fontSize='lg' variant='link' onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))
            }
        </List>
    );
};

export default GenreList;