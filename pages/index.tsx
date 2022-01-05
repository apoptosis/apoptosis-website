import React from 'react'
import PageHead from '../components/PageHead'
import PageHeaderBar from '../components/PageHeaderBar'
import PageFooter from '../components/PageFooter'
import Image from 'next/image'
import { ChakraProvider, ColorModeScript, Container, Center, Heading, Box } from "@chakra-ui/react"
import theme from '../data/theme'
import conf from '../data/config'
import Particles from 'react-tsparticles'
import { particlesJS_config } from '../data/PJS'

const Index = () => {
    return (
        <Box pt="20vh" pb="20vh" pl="30vw" pr="30vw">
            <Box p="12" boxShadow="dark-lg">
                <Center>
                    <Heading size="xl">{conf.tagline}</Heading>
                </Center>
            </Box>
        </Box>
    )
}
export default Index
