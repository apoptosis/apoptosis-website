import React from 'react'
import PageHead from '../components/PageHead'
import PageHeaderBar from '../components/PageHeaderBar'
import PageFooter from '../components/PageFooter'
import Image from 'next/image'
import { ChakraProvider, ColorModeScript, Container, Center, Heading, Box } from "@chakra-ui/react"
import theme from '../data/theme'
import conf from '../data/config'
import Particles from 'react-particles-js'
import { particlesJS_config } from '../data/PJS'
import sytles from '../styles/globals.css'

const Index = () => {
    
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <PageHead/>
            <PageHeaderBar/>
            <div style={{ position: 'absolute', zIndex: -1, top: 0}}>
                <Particles height="100vh" width="100vw" params={particlesJS_config} />
            </div>
            <div style={{ paddingTop: "20vh", paddingBottom: "20vh", paddingLeft: "30vw", paddingRight: "30vw" }}>
                <Box color="black" bg="white" p="12" boxShadow="dark-lg">
                    <Center>
                        <Heading size="xl">{conf.tagline}</Heading>
                    </Center>
                </Box>
            </div>
            
            <PageFooter top="80vh"/>
        </ChakraProvider>
    )
}
export default Index
