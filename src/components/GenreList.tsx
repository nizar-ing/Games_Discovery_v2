import useGenres from "../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

const GenreList = () => {
    const {data, isLoading, error} = useGenres();
    if(error) return null;
    if(isLoading) return (<Spinner />);
    return (
        <List>
            {
                data.map((genre) => (<ListItem key={genre.id} paddingY='6px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                            <Text fontSize='lg'>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                ))
            }
        </List>
    );
};

export default GenreList;