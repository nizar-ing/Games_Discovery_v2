import {Box, Heading} from "@chakra-ui/react";
import React, {ReactNode} from "react";

const DefinitionItem: React.FC<{term: string, children: ReactNode | ReactNode[]}> = ({term, children}) => {
    return (
        <Box marginY={5}>
            <Heading as='dt' fontSize='md' color='gray.600'>
                {term}
            </Heading>
            <dd>
                {children}
            </dd>
        </Box>
    );
};

export default DefinitionItem;