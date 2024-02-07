import React from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import {Platform} from "../models/GameUtils.ts";

const PlatformSelector: React.FC<{selectedPlatformId?: number, onSelectPlatform: (platform: Platform) => void}> = ({selectedPlatformId ,onSelectPlatform}) => {
    const {data, error} = usePlatforms();
    const platform = data?.results.find((p) => p.id === selectedPlatformId);
    if(error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {
                     platform?.name || 'Platforms'
                }
            </MenuButton>
            <MenuList>
                {
                    data?.results.map((platform) => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)
                }
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;