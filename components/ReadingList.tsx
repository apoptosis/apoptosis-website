import React, { useEffect, useState, useCallback } from 'react'
import ReactFlow, { removeElements, addEdge, Background, useZoomPanHelper, Handle } from 'react-flow-renderer'
import make_rl from '../utils/make-reading-list'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu"
import { Node } from 'react-flow-renderer/dist/types'
import { Heading, Image } from '@chakra-ui/react'
import EditableNode from '../components/EditableNode'

const onNodeDragStop = (event, node) => console.log('drag stop', node)
const onElementClick = (event, element) => console.log('click', element)

const editNode = params => {
    alert('si senor')
}

const ReadingList = params => {
    
    const { project } = useZoomPanHelper()
    const initialElements = params.reading_list
    
    const [rfInstance, setRfInstance] = useState(null);
    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => addEdge(params, els));
    const [nodeBookId, setNodeBookId] = useState('/img/list-content/placeholder-book.png')
    
    const onLoad = (reactFlowInstance) => {
        console.log('flow loaded:', reactFlowInstance);
        params.onLoad(reactFlowInstance)
    }

    const addSource = useCallback((e) => {
        const nodeId = getNodeId()
        const newNode = {
            type: 'input',
            id: nodeId,
            data: {
                label: (
                    <>
                        placeholder input text
                    </>
                ),
                onChange: () => {}
            },
            position: project({
                x: e.clientX,
                y: e.clientY,
            }),
        };
        setElements((els) => els.concat(newNode));
    }, [setElements])

    const onAdd = useCallback((e) => {
        const nodeId = getNodeId()
        const newNode = {
            type: 'editable',
            id: nodeId,
            data: {
                update: id => setNodeBookId(id),
                id: nodeId,
                label: (
                    <>
                        <Image maxW="100" maxH="150" src="/img/list-content/placeholder-book.png" alt="Placeholder Book Cover"/>
                    </>
                ),
                onChange: () => {},
                color: '#fff',
                connectors: (
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
                )
            },
            position: project({
                x: e.clientX,
                y: e.clientY,
            }),
        }
        setElements((els) => els.concat(newNode));
    }, [setElements]);

    const onSave = useCallback(() => {
        if (rfInstance) {
            const flow = rfInstance.toObject();
            
            let hiddenElement = document.createElement('a')
            hiddenElement.href = 'data:application/json,' + encodeURI(JSON.stringify(flow.elements))
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
                    var content = readerEvent.target.result; // this is the content!
                    setElements( JSON.parse(content) );
                }

            }

            input.click();
        }
        restoreFlow();
    }, [setElements])

    useEffect(nodeId => {
        setElements((els) =>
            els.map((el) => {
                console.log(el)
                if (el.id === nodeId) {
                    // it's important that you create a new object here
                    // in order to notify react flow about the change
                    el = {
                        ...el,
                        label: (
                            <>
                                <Image maxW="100" maxH="150" src={`/img/list-content/${nodeBookId}`} alt={nodeBookId}/>
                            </>
                        )
                    };
                }
                
                return el;
            })
        );
    }, [nodeBookId, setElements]);

    const getNodeId = () => `randomnode_${+new Date()}`;

    if(!!params.edit){
        return (
            <div>
                <ContextMenuTrigger id="flow_edit_menu" holdToDisplay={1000}>
                    <div style={{height: "92vh"}}>
                        <ReactFlow
                            elements={elements}
                            onLoad={setRfInstance}
                            snapToGrid={true}
                            snapGrid={[25, 25]}
                            onConnect={onConnect}
                            nodeTypes={{
                                editable: EditableNode,
                            }}>
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
                    snapGrid={[25, 25]}>
                    <Background
                        gap={25}
                        size={1}/>
                </ReactFlow>
            </div>
        )    
    }
}
export default ReadingList
