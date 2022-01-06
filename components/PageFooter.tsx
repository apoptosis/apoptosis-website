import React from 'react'
import { Box, Flex, Heading, VStack, HStack, StackDivider, Button, Center, Link } from "@chakra-ui/react"
import { SiDuckduckgo } from 'react-icons/si'
import { FaYoutube } from 'react-icons/fa'

import { useColor } from './colors';


const Toe = ({ url, children }) => {
    const fg = useColor('primaryLight')
    return <Link href={url}>
        {children}
        {/* <Button color={fg} colorScheme="whiteAlpha" variant="solid" size="xs">{children}</Button> */}
    </Link>
}

const PageFooter = (props) => {
    const background = useColor('background')
    const foreground = useColor('foreground')

    return (
        <Box bg={background} w="100%" p={4} color={foreground} boxShadow="0px -5px 300px black">
            <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch">
                <Center>
                    <HStack align="top" spacing={20}>
                        <Box p="4">
                            <Flex>
                                <VStack align="left">
                                    <Heading size="md">Book Repositories</Heading>
                                    <Toe url="https://z-lib.org/">Z-Lib</Toe>
                                    <Toe url="https://duckduckgo.com/?q=Library+Genesis">Libgen</Toe>
                                    <Toe url="https://duckduckgo.com/?q=Sci-Hub">Sci-Hub</Toe>
                                </VStack>
                            </Flex>
                        </Box>
                        <Box p="4">
                            <Flex>
                                <VStack align="left">
                                    <Heading size="md">Apoptosis</Heading>
                                    <Toe url="/reading-lists">Reading Lists</Toe>
                                    <Toe url="/blog">Articles</Toe>
                                    <Toe url="/contributors">Site Contributors</Toe>
                                </VStack>
                            </Flex>
                        </Box>
                        <Box p="4">
                            <Flex>
                                <VStack align="left">
                                    <Heading size="md">Other Resources</Heading>
                                    <Toe url="https://mises.org/">Mises Institute</Toe>
                                    <Toe url="https://www.youtube.com/channel/UCTf0py7ryuSldOsDm4abSsg">LiquidZulu YT</Toe>
                                    <Toe url="http://ldlework.com">ldlework.com</Toe>
                                </VStack>
                            </Flex>
                        </Box>
                    </HStack>
                </Center>
            </VStack>
        </Box>
    )
}
export default PageFooter
