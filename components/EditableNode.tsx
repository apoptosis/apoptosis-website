import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import { Box, Button, Center, } from "@chakra-ui/react"
import NodeEditPopover from './NodeEditPopover'

const EditableNode = memo(({ data }) => {
    switch(data.type){
        case "IN": {
            {
                return (
                    <>
                        <Box bg="gray.900" maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Box p={3} className="drag">
                                <NodeEditPopover class="editPopover" data={data}/>
                            </Box>
                        </Box>
                        {data.customConnectors ? data.connectors : (
                            <>
                                <Handle
                                    type="source"
                                    position="bottom"
                                    id="b"
                                    style={{ bottom: 10, top: 'auto', background: '#555' }}/>
                            </>
                        )}
                    </>
                )
            }
            break;
        }

        case "MID": {
            {
                return (
                    <>
                        <Box style={{zIndex:-2}} bg="gray.900" maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Box p={3} className="drag">
                                <NodeEditPopover class="editPopover" data={data}/>
                            </Box>
                        </Box>
                        {data.customConnectors ? data.connectors : (
                            <>
                                <Handle
                                    type="target"
                                    position="top"
                                    id="a"
                                    style={{ top: 10, background: '#555' }}/>
                                <Handle
                                    type="source"
                                    position="bottom"
                                    id="b"
                                    style={{ bottom: 10, top: 'auto', background: '#555' }}/>
                            </>
                        )}
                    </>
                )
            }
        }

        case "OUT": {
            {
                return (
                    <>
                        <Box bg="gray.900" maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Box p={3} className="drag">
                                <NodeEditPopover class="editPopover" data={data}/>
                            </Box>
                        </Box>
                        {data.customConnectors ? data.connectors : (
                            <>
                                <Handle
                                    type="target"
                                    position="top"
                                    id="a"
                                    style={{ top: 10, background: '#555' }}/>
                            </>
                        )}
                    </>                    
                )
            }
        }
    }
});
export default EditableNode
