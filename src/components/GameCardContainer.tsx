import {Box} from "@chakra-ui/react";
import React, {ReactNode} from "react";

const GameCardContainer: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <Box borderRadius={10} overflow='hidden' _hover={
            {
                transform: 'scale(1.03)',
                transition: 'transform 0.15s ease-in'
            }
        }>
            {children}
        </Box>
    );
};

export default GameCardContainer;