import React from 'react'
import PageHead from '../../../components/PageHead'
import PageHeaderBar from '../../../components/PageHeaderBar'
import ReadingList from '../../../components/ReadingList'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from '../../../data/theme'
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';

const Index = () => {
    
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <PageHead/>
            <PageHeaderBar/>
            <ReactFlowProvider>
                <ReadingList
                    reading_list={[]}
                    onLoad={() => {}}
                    edit={true}/>
            </ReactFlowProvider>
        </ChakraProvider>
    )
}
export default Index
