import React from 'react';
import {Platform} from "../models/GameUtils.ts";
import {HStack, Icon} from "@chakra-ui/react";
import {FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {BsGlobe} from "react-icons/bs";
import {SiNintendo} from "react-icons/si";
import {IconType} from "react-icons";

const PlatformIconList: React.FC<{platforms: Platform[]}> = ({platforms}) => {
    const iconMap : { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        android: FaAndroid,
        mac: FaApple,
        ios: MdPhoneIphone,
        web: BsGlobe,
        nintendo: SiNintendo
    };
    return (
        <HStack marginY={2}>
            {
                platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />)
            }
        </HStack>
    );
};

export default PlatformIconList;