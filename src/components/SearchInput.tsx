import {useRef} from "react";
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import useGameQueryStore from "../store.ts";
import {useNavigate} from "react-router-dom";

const SearchInput = () => {
    const setSearchText = useGameQueryStore((s) => s.setSearchText);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(inputRef.current) {
                setSearchText(inputRef.current.value);
                navigate('/');
            };
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={inputRef} borderRadius={20} variant='filled' placeholder='Search games ...'/>
            </InputGroup>
        </form>
    );
};

export default SearchInput;