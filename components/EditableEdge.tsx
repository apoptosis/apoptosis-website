import React, { useCallback } from 'react';
import { getBezierPath, EdgeText, getEdgeCenter, } from 'react-flow-renderer'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import EdgeEditPopover from './EdgeEditPopover'

const EditableEdge = ({
    id,
    source,
    target,
    sourceX,
    sourceY,
    targetX,
    targetY,
    selected,
    animated,
    sourcePosition,
    targetPosition,
    label,
    labelStyle,
    labelShowBg,
    labelBgStyle,
    labelBgPadding,
    labelBgBorderRadius,
    style,
    arrowHeadType,
    markerEndId,
    data,
    sourceHandleId,
    targetHandleId,
}) => {
    const updateEdge = useCallback((newEdgeEl) => {
        setElements((els) =>
            els.map((el) => {
                console.log(id,' ',el.id)
                if (id === el.id) {
                    // it's important that you create a new object here
                    // in order to notify react flow about the change
                    el = newEdgeEl
                }
                
                return el;
            })
        );
    }, [setElements])

    const getEl = () => {
        return {
            id:id,
            source:source,
            target:target,
            sourceX:sourceX,
            sourceY:sourceY,
            targetX:targetX,
            targetY:targetY,
            selected:selected,
            animated:animated,
            sourcePosition:sourcePosition,
            targetPosition:targetPosition,
            label:label,
            labelStyle:labelStyle,
            labelShowBg:labelShowBg,
            labelBgStyle:labelBgStyle,
            labelBgPadding:labelBgPadding,
            labelBgBorderRadius:labelBgBorderRadius,
            style:style,
            arrowHeadType:arrowHeadType,
            markerEndId:markerEndId,
            data:data,
            sourceHandleId:sourceHandleId,
            targetHandleId:targetHandleId,
        }
    }
    
    const { colorMode, toggleColorMode } = useColorMode()
    const [centerX, centerY] = getEdgeCenter({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition })
    
    return (
        <g>
            <path
                fill="none"
                stroke={useColorModeValue("white", "gray.800")}
                strokeWidth={20}
                className="animated"
                d={getBezierPath({
                    sourceX,
                    sourceY,
                    sourcePosition,
                    targetX,
                    targetY,
                    targetPosition,
                })}
            />
            <EdgeText
                x={centerX}
                y={centerY}
                label={
                    <>
                        <EdgeEditPopover
                            data={{
                                id:id,
                                update:updateEdge,
                                el:getEl()
                            }}/>
                    </>}
                labelStyle={labelStyle}
                labelShowBg={labelShowBg}
                labelBgStyle={labelBgStyle}
                labelBgPadding={labelBgPadding}
                labelBgBorderRadius={labelBgBorderRadius}
            />
        </g>
    );
};
export default EditableEdge






// this was in ReadingList, doesnt work becasue edge labels have to be strings rather than react components
    // this is hideous, FIXME as soon as someone figures out how to pass setElements to a separate file in this context.
    const EditableEdge = ({
        id,
        source,
        target,
        sourceX,
        sourceY,
        targetX,
        targetY,
        selected,
        animated,
        sourcePosition,
        targetPosition,
        label,
        labelStyle,
        labelShowBg,
        labelBgStyle,
        labelBgPadding,
        labelBgBorderRadius,
        style,
        arrowHeadType,
        markerEndId,
        data,
        sourceHandleId,
        targetHandleId,
    }) => {
        const updateEdge = useCallback((newEdgeEl) => {
            setElements((els) =>
                els.map((el) => {
                    console.log(id,' ',el.id)
                    if (id === el.id) {
                        // it's important that you create a new object here
                        // in order to notify react flow about the change
                        el = newEdgeEl
                    }
                    
                    return el;
                })
            );
        }, [setElements])
        
        const getEl = () => {
            return {
                id:id,
                source:source,
                target:target,
                sourceX:sourceX,
                sourceY:sourceY,
                targetX:targetX,
                targetY:targetY,
                selected:selected,
                animated:animated,
                sourcePosition:sourcePosition,
                targetPosition:targetPosition,
                label:label,
                labelStyle:labelStyle,
                labelShowBg:labelShowBg,
                labelBgStyle:labelBgStyle,
                labelBgPadding:labelBgPadding,
                labelBgBorderRadius:labelBgBorderRadius,
                style:style,
                arrowHeadType:arrowHeadType,
                markerEndId:markerEndId,
                data:data,
                sourceHandleId:sourceHandleId,
                targetHandleId:targetHandleId,
            }
        }
        
        const { colorMode, toggleColorMode } = useColorMode()
        const [centerX, centerY] = getEdgeCenter({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition })

        // FIXME Popper: "arrow" element must be an HTMLElement (not an SVGElement). To use an SVG arrow, wrap it in an HTMLElement that will be used as the arrow.
        return (
            <g>
            <path
            fill="none"
            stroke={useColorModeValue("white", "gray.800")}
            strokeWidth={20}
            className="animated"
            markerEnd={getMarkerEnd(arrowHeadType, markerEndId)}
            d={getBezierPath({
                sourceX,
                sourceY,
                sourcePosition,
                targetX,
                targetY,
                targetPosition,
            })}
            />
            <EdgeText
            x={centerX}
            y={centerY}
            label={
                <>
                <EdgeEditPopover
                class="editPopover"
                data={{
                    id:id,
                    update:updateEdge,
                    label:(label ? label : 'label'),
                    el:getEl()
                }}/>
                    </>
            }
            labelStyle={{}}
            labelShowBg={true}
            labelBgStyle={labelBgStyle}
            labelBgPadding={labelBgPadding}
            labelBgBorderRadius={labelBgBorderRadius}
            />
            </g>
        );
    };
