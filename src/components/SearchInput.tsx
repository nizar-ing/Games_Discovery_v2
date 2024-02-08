import {useRef} from "react";
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import useGameQueryStore from "../store.ts";

const SearchInput = () => {
    const setSearchText = useGameQueryStore((s) => s.setSearchText);
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(inputRef.current) setSearchText(inputRef.current.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={inputRef} borderRadius={20} variant='filled' placeholder='Search games ...'/>
            </InputGroup>
        </form>
    );
};

export default SearchInput;