import React from 'react';
import { Box, Flex, Spacer, Image, Heading, Link, Button, useColorMode, Tooltip } from "@chakra-ui/react"
import conf from '../data/config'
import { MoonIcon, SunIcon  } from '@chakra-ui/icons'
import { AiFillGithub } from 'react-icons/ai'

const PageHeaderBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box bg="#111111" w="100%" p={4} color="white" boxShadow="dark-lg">
            <Flex>
                <Box p="0" w="12" mr="2">
                    <Link href="/" isExternal>
                        <Image src="/img/logo.png" alt="Apoptosis Logo"/>
                    </Link>
                </Box>
                <Box p="1" mr="4">
                    <Link href="/" isExternal>
                        <Heading size="lg">{conf.title}</Heading>
                    </Link>
                </Box>
                <Link href="/reading-lists">
                    <Button color="white" colorScheme="whiteAlpha" variant="ghost" size="lg" mr="2">Reading Lists</Button>
                </Link>
                <Link href="/blog">
                    <Button color="white" colorScheme="whiteAlpha" variant="ghost" size="lg" mr="2">Articles</Button>
                </Link>
                <Spacer />
                <Tooltip label={colorMode === "light" ? "Dark Mode" : "Light Mode"} aria-label="A tooltip">
                    <Button size="lg" color="white" colorScheme="whiteAlpha" variant="ghost" onClick={toggleColorMode} mr="2">
                        {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                    </Button> 
                </Tooltip>
                <Tooltip label="Fork this site on GitHub" aria-label="A tooltip">
                    <Link href={`${conf.repo_host}${conf.repo}`} isExternal>
                        <Button size="lg" color="white" colorScheme="whiteAlpha" variant="ghost">
                            <AiFillGithub />
                        </Button>
                    </Link>
                </Tooltip>
                
            </Flex>
        </Box>
    )
}
export default PageHeaderBar
