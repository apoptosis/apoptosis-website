import React from 'react'
import PageHead from '../../components/PageHead'
import PageHeaderBar from '../../components/PageHeaderBar'
import PageFooter from '../../components/PageFooter'
import Hero from '../../components/Hero'
import FeaturedBooks from '../../components/FeaturedBooks'
import Image from 'next/image'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from '../../data/theme'
import conf from '../../data/config'
import Particles from 'react-particles-js'
import { particlesJS_config } from '../../data/PJS'
import sytles from '../../styles/globals.css'

const ReadingLists = () => {
    
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <PageHead/>
            <PageHeaderBar/>
            <div style={{ position: 'absolute', zIndex: -1, top: "35vh"}}>
                <Particles height="70vh" width="100vw" params={particlesJS_config} />
            </div>
            <Hero title="Reading Lists" subtitle="Community curated topical reading cirriculums"/>
            <FeaturedBooks/>
            <PageFooter top="90vh"/>
        </ChakraProvider>
    )
}
export default ReadingLists
