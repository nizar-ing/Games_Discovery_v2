import {Box} from "@chakra-ui/react";
import React, {ReactNode} from "react";

const GameCardContainer: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <Box borderRadius={10} overflow='hidden'>
            {children}
        </Box>
    );
};

export default GameCardContainer;