import React, { useEffect, useState, useCallback } from 'react'
import ReactFlow, {
    removeElements,
    addEdge,
    Background,
    useZoomPanHelper,
    Handle,
    getBezierPath,
    EdgeText,
    getEdgeCenter,
    getMarkerEnd,
    BezierEdge,
    StraightEdge,
    StepEdge,
    SmoothStepEdge,
} from 'react-flow-renderer'
import make_rl from '../utils/make-reading-list'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu"
import { Node } from 'react-flow-renderer/dist/types'
import {
    Heading,
    Image,
    useColorMode,
    useColorModeValue,
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    HStack,
    RadioGroup,
    Radio,
    Link,
    Divider,
    ButtonGroup,
    Button,
    useToast,
} from '@chakra-ui/react'
import EditableNode from '../components/EditableNode'
//import EdgeEditPopover from './EdgeEditPopover'
//import EditableEdge from '../components/EditableEdge'

const onNodeDragStop = (event, node) => console.log('drag stop', node)
const onElementClick = (event, element) => console.log('click', element)

const ReadingList = params => {
    
    const { project } = useZoomPanHelper()
    const initialElements = params.reading_list
    
    const [rfInstance, setRfInstance] = useState(null);
    const [elements, setElements] = useState(initialElements);
    const [connectionLineComponent, setConnectionLineComponent] = useState(BezierEdge)
    const [connectionType, setConnectionType] = useState('default')
    const [animateEdges, setAnimateEdges] = useState(false)

    const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
    const toast = useToast()
    
    const onLoad = (reactFlowInstance) => {
        console.log('flow loaded:', reactFlowInstance);
        params.onLoad(reactFlowInstance)
    }

    const addSource = useCallback((e) => {
        const nodeId = getNodeId()
        const newNode = {
            type: 'editable',
            id: nodeId,
            data: {
                update: updateNode,
                customConnectors: false,
                type: "IN",
                id: nodeId,
                label: (
                    <>
                        placeholder input text
                    </>
                ),
                onChange: () => {}
            },
            position: {
                x: e.clientX,
                y: e.clientY,
            },
        };
        setElements((els) => els.concat(newNode));
    }, [setElements])

    const onAdd = useCallback((e) => {
        const nodeId = getNodeId()
        const newNode = {
            type: 'editable',
            id: nodeId,
            data: {
                type: "MID",
                update: updateNode,
                delete: deleteNode,
                id: nodeId,
                label: (
                    <>
                        <img style={{ width:100, height:150, zIndex:-1 }} src="/img/list-content/placeholder-book.png" alt="Placeholder Book Cover"/>
                    </>
                ),
                onChange: () => {},
                color: '#fff',
                customConnectors: false,
            },
            position: {
                x: e.clientX,
                y: e.clientY,
            },
        }
        setElements((els) => els.concat(newNode));
    }, [setElements]);

    const onSave = useCallback(() => {
        if (rfInstance) {
            const flow = rfInstance.toObject();
            const json =JSON.stringify(flow) 
            
            let hiddenElement = document.createElement('a')
            hiddenElement.href = 'data:application/octet-stream;base64,' + btoa(JSON.stringify(flow.elements))
            hiddenElement.target = '_blank'
            hiddenElement.download = 'rfInstance.json'
            hiddenElement.click()
            hiddenElement.remove()
        }
    }, [rfInstance]);

    const onUpload = useCallback(() => {
        const restoreFlow = async () => {

            let input = document.createElement('input');
            input.type = 'file';

            input.onchange = e => { 

                // getting a hold of the file reference
                var file = e.target.files[0];

                // setting up the reader
                var reader = new FileReader();
                reader.readAsText(file,'UTF-8');

                // here we tell the reader what to do when it's done reading...
                reader.onload = readerEvent => {
                    var content = JSON.parse(readerEvent.target.result); // this is the content!
                    console.log('content is', content)
                    let loadElements = []
                    for(let el of content){
                        if(!!el.data){
                            const elChildren = el.data.label.props.children
                            switch(typeof elChildren){
                                case typeof '':{
                                    {
                                        loadElements.push(
                                            {
                                                ...el,
                                                data: {
                                                    ...el.data,
                                                    label: elChildren
                                                }
                                            }
                                        )
                                    }
                                    break;
                                }

                                case typeof {}:{
                                    {
                                        switch(elChildren.type){
                                            case 'img':{
                                                {
                                                    loadElements.push(
                                                        {
                                                            ...el,
                                                            data: {
                                                                ...el.data,
                                                                label:(
                                                                    <>
                                                                        <img style={{ width:100, height:150, zIndex:-1 }} src={elChildren.props.src} alt={elChildren.props.alt}/>
                                                                    </>
                                                                )
                                                            }
                                                        }
                                                    )            
                                                }
                                                break;
                                            }
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                        else{
                            loadElements.push(el)
                        }
                    }
                    console.log(loadElements)
                    setElements( loadElements || [] );
                }
            }
            input.click();
        }
        restoreFlow();
    }, [setElements])

    const updateNode = useCallback((editButtonId, newNodeData) => {
        setElements((els) =>
            els.map((el) => {
                console.log(editButtonId,' ',`edit__${el.id}`)
                if (editButtonId === `edit__${el.id}`) {
                    // it's important that you create a new object here
                    // in order to notify react flow about the change
                    el = {
                        ...el,
                        data: newNodeData
                    };
                }
                return el;
            })
        );
    }, [setElements]);

    const deleteNode = useCallback(nodeId => {
        console.log(nodeId)
        setElements((els) =>
            els.map((el) => {
                if (nodeId === el.id) {
                    return removeElements([el], els)
                }
                return el;
            })
        );
    }, [setElements, removeElements])

    const updateEdgeType = useCallback((et, anim=false) => {
        try{
            const edgeTypes = {
                default: BezierEdge,
                straight: StraightEdge,
                step: StepEdge,
                smoothstep: SmoothStepEdge
            }

            setConnectionType(et)
            setAnimateEdges(anim)
            
            toast({
                title: "Success.",
                description: "Edge type hase been set.",
                status: "success",
                duration: 2000,
                isClosable: true,
            })
        }catch(e){
            console.log(e)
            toast({
                title: "Error.",
                description: `Edge type could not be set (see logs for details): ${e}`,
                status: "error",
                duration: 2000,
                isClosable: true,
            })
        }
    }, [setConnectionType, setAnimateEdges])

    const onConnect = useCallback( params => {
        setElements(els => {
            return addEdge({
                ...params,
                type: connectionType,
                animated: animateEdges
            }, els)
        })
    }, [connectionType, animateEdges, setElements])

    const getNodeId = () => `randomnode_${+new Date()}`;

    if(!!params.edit){
        return (
            <div>
                <ContextMenuTrigger id="flow_edit_menu" holdToDisplay={1000}>
                    <Box style={{position:'fixed', top:'10vh', left: '2vw', zIndex: 99, }} bg="gray.900" maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Box p={3}>
                            <FormControl as="fieldset">
                                <FormLabel as="legend">Regular</FormLabel>
                                <HStack spacing="1vw">
                                    <Button onClick={()=>{updateEdgeType('bezier')}}>Bezier</Button>
                                    <Button onClick={()=>{updateEdgeType('straight')}}>Straight</Button>
                                    <Button onClick={()=>{updateEdgeType('step')}}>Stepped</Button>
                                    <Button onClick={()=>{updateEdgeType('smoothstep')}}>Smooth Stepped</Button>
                                </HStack>
                                <FormHelperText>See: <Link href="https://reactflow.dev/examples/edges/">https://reactflow.dev/examples/edges/</Link></FormHelperText>
                            </FormControl>
                            
                            <br/><Divider/><br/>
                            
                            <FormControl as="fieldset">
                                <FormLabel as="legend">Animated</FormLabel>
                                <HStack spacing="1vw">
                                    <Button onClick={()=>{updateEdgeType('bezier',true)}}>Bezier</Button>
                                    <Button onClick={()=>{updateEdgeType('straight',true)}}>Straight</Button>
                                    <Button onClick={()=>{updateEdgeType('step',true)}}>Stepped</Button>
                                    <Button onClick={()=>{updateEdgeType('smoothstep',true)}}>Smooth Stepped</Button>
                                </HStack>
                                <FormHelperText>See: <Link href="https://reactflow.dev/examples/edges/">https://reactflow.dev/examples/edges/</Link></FormHelperText>
                            </FormControl>
                        </Box>
                    </Box>
                    <div style={{height: "92vh"}}>
                        <ReactFlow
                            elements={elements}
                            onLoad={setRfInstance}
                            snapToGrid={true}
                            snapGrid={[1, 1]}
                            onConnect={onConnect}
                            nodeTypes={{
                                editable: EditableNode,
                            }}
                            connectionLineComponent={connectionLineComponent}
                            onConnect={onConnect}>
                            <Background
                                gap={25}
                                size={1}/>
                        </ReactFlow>
                    </div>
                </ContextMenuTrigger>
                
                <ContextMenu id="flow_edit_menu">
                    <MenuItem onClick={()=>{}}>
                        Exit Menu
                    </MenuItem>
                    <MenuItem onClick={onAdd}>
                        Create Book Node
                    </MenuItem>
                    <MenuItem onClick={addSource}>
                        Create Source Node
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem onClick={onSave}>
                        Save react-flow Elements
                    </MenuItem>
                    <MenuItem onClick={onUpload}>
                        Upload react-flow Elements
                    </MenuItem>
                </ContextMenu>
            </div>
        )
    }
    else{
        return (
            <div style={{height: "92vh"}}>
                <ReactFlow
                    elements={elements}
                    onLoad={onLoad}
                    snapToGrid={true}
                    snapGrid={[1, 1]}>
                    <Background
                        gap={25}
                        size={1}/>
                </ReactFlow>
            </div>
        )    
    }
}
export default ReadingList
