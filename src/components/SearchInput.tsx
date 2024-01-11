import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />}/>
            <Input borderRadius={20} variant='filled' placeholder='Search games ...'/>
        </InputGroup>
    );
};

export default SearchInput;