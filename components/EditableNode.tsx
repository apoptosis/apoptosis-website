import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import { Box, Button, Center, } from "@chakra-ui/react"
import NodeEditPopover from './NodeEditPopover'

const EditableNode = memo(({ data }) => {
    return (
        <>
            <Box bg="gray.900" maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Box p={3} className="drag">
                    <Center>
                        { data.label }
                    </Center>
                </Box>
                <Box p={3}>
                    <Center>
                        <NodeEditPopover data={data}/>
                    </Center>
                </Box>
            </Box>
            {data.connectors}
        </>
    );
});
export default EditableNode
