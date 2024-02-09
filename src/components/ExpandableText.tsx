import React, {useState} from "react";
import {Button, Text} from "@chakra-ui/react";

const ExpandableText: React.FC<{ children: string, limit: number }> = ({children, limit}) => {
    const [expanded, setExpanded] = useState(false);

    if(!children) return null;
    if (children.length <= limit) return <Text>{children}</Text>
    const summary = expanded ? children :  (children.substring(0, limit) + ' ...');
    return (
        <Text>
            {summary}
            <Button size={'xs'} fontWeight='bold' colorScheme='yellow' marginLeft={1}
                    onClick={() => setExpanded(!expanded)}>{expanded ? 'Show Less' : 'Read More'}</Button>
        </Text>
    );
};

export default ExpandableText;