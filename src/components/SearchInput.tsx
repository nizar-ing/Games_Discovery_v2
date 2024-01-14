import React, {useRef} from "react";
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";

const SearchInput: React.FC<{onSearch: (searchText: string) => void}> = ({onSearch}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(inputRef.current) onSearch(inputRef.current.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={inputRef} borderRadius={20} variant='filled' placeholder='Search games ...'/>
            </InputGroup>
        </form>
    );
};

export default SearchInput;