import React from 'react'
import PageHead from '../../components/PageHead'
import PageHeaderBar from '../../components/PageHeaderBar'
import PageFooter from '../../components/PageFooter'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import sytles from '../../styles/globals.css'
import theme from '../../data/theme'
import conf from '../../data/config'
import Particles from 'react-particles-js'
import { particlesJS_config } from '../../data/PJS'
import { Box, useColorModeValue, Container, UnorderedList, ListItem, Link } from '@chakra-ui/react'

const view_lists = () => {
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <PageHead/>
            <PageHeaderBar/>
            <div style={{ position: 'absolute', zIndex: -1, top: "35vh"}}>
                <Particles height="70vh" width="100vw" params={particlesJS_config} />
            </div>
            <Box w="100%" p={4}>
                <Container color={useColorModeValue("white", "gray.800")}>
                    {`Placeholder for curriculum showcase, I have no clue how to make it look nice rn, also I have no clue why useColorModeValue() isn't working here`}
                    <UnorderedList>
                        <ListItem><Link href="./austro-libertarianism">Austro-Libertarianism</Link></ListItem>
                        <ListItem>Consectetur adipiscing elit</ListItem>
                        <ListItem>Integer molestie lorem at massa</ListItem>
                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
                </Container>
            </Box>
            <PageFooter top="80vh"/>
        </ChakraProvider>
    )
}
export default view_lists
