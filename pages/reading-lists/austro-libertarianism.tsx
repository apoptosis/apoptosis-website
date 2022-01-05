import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge, Background } from 'react-flow-renderer';
import make_rl from '../../utils/make-reading-list'
import { FLAGS } from '../../olddata/data'
import theme from '../../olddata/theme'
import reading_list, { cats, levels, vis } from '../../olddata/reading-lists/rl/rl-austro-libertarianism'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import PageHead from '../../components/PageHead'
import PageHeaderBar from '../../components/PageHeaderBar'
// import ReadingList from '../../components/ReadingLists/ReadingList'

const initialElements = make_rl(
    reading_list,
    [
        FLAGS.GROUPS.CAT_ETHICS,
        FLAGS.GROUPS.CAT_STATE_CRITICS,
        FLAGS.GROUPS.CAT_ECONOMICS
    ],
    cats,
    vis
);

const austrolibRL = () => {
    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = (elementsToRemove) =>
        setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => addEdge(params, els));

    return (null
        // <ReadingList
        //     reading_list={reading_list}
        //     cat_flags={[
        //         FLAGS.GROUPS.CAT_ETHICS,
        //         FLAGS.GROUPS.CAT_STATE_CRITICS,
        //         FLAGS.GROUPS.CAT_ECONOMICS
        //     ]}
        //     cats={cats}
        //     vis={vis}
        //     onLoad={reactFlowInstance => {
        //         // go back to this when list is populated, looks shit with just the category headers
        //         reactFlowInstance.fitView(vis.reactFlowInstance.fitView);
        //     }} />
    );
};
export default austrolibRL
