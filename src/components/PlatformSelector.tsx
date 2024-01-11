import React from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import {Platform} from "../models/GameUtils.ts";

const PlatformSelector: React.FC<{selectedPlatform: Platform | null, onSelectPlatform: (platform: Platform) => void}> = ({selectedPlatform ,onSelectPlatform}) => {
    const {data, error} = usePlatforms();

    if(error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {
                     selectedPlatform?.name || 'Platforms'
                }
            </MenuButton>
            <MenuList>
                {
                    data.map((platform) => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)
                }
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;