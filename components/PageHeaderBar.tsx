import React from 'react';
import { Box, Flex, Spacer, Heading, Button, useColorMode } from "@chakra-ui/react"
import conf from '../olddata/config'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from "./Link"

import { useColor } from './colors';

const logo = require('../public/img/logo.png');

const MenuButton = ({ link, label }) => {
    const fg = useColor('foreground')

    return <Link href={link}>
        <Button pt="3px" color={fg} colorScheme="whiteAlpha" variant="ghost" size="lg" mr="2">{label}</Button>
    </Link>
}

const PageHeaderBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const background = useColor('background')
    const foreground = useColor('foreground')
    console.log(`header backgorund: ${background}`)
    console.log(`header foreground: ${foreground}`)
    return (
        <Flex flexDir="row" alignItems="center" bg={background} p={4} color={foreground} boxShadow="dark-lg">
            <Box>
                <Link href="/" isExternal>
                    <Button color={foreground} colorScheme="whiteAlpha" variant="ghost" size="lg" mr="2" fontSize="2em">
                        <Flex>
                            <Box w="12" mr="5">
                                <Link href="/" isExternal>
                                    <img src={logo} alt="Apoptosis Logo" />
                                </Link>
                            </Box>
                        </Flex>
                        {conf.title}
                    </Button>
                    {/* <Heading size="lg">{conf.title}</Heading> */}
                </Link>
            </Box>
            <MenuButton link="/reading-lists" label="Reading Lists" />
            <Spacer />
            <Button color={foreground} size="lg" colorScheme="whiteAlpha" variant="ghost" onClick={toggleColorMode} mr="2">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Link href={`${conf.repo_host}${conf.repo}`} isExternal>
                <Button color={foreground} size="lg" colorScheme="whiteAlpha" variant="ghost">
                    <AiFillGithub />
                </Button>
            </Link>
        </Flex>
    )
}
export default PageHeaderBar
