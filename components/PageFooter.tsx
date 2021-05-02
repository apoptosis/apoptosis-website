import React from 'react'
import { Box, Flex, Heading, VStack, HStack, StackDivider, Button, Center, Link } from "@chakra-ui/react"
import { SiDuckduckgo } from 'react-icons/si'
import { FaYoutube } from 'react-icons/fa'

const PageFooter = (props) => {
    return (
        <Box style={{ position: 'absolute', top: props.top }} bg="#202020" w="100%" p={4} color="white">
            <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch">
                <Box>
                    <Center><Heading size="sm">Built With <Link href="//nextjs.org">Next.js</Link> and <Link href="//chakra-ui.com">Chakra UI</Link>.</Heading></Center>
                </Box>
                <Center>
                <HStack align="top" spacing={20}>
                    <Box p="4">
                        <Flex color="white">
                            <VStack align="left">
                                <Heading size="md">Book Repositories</Heading>
                                <Link href="https://z-lib.org/"><Button color="white" colorScheme="whiteAlpha" variant="solid" size="xs">Z-Lib</Button></Link>
                                <Link href="https://duckduckgo.com/?q=Library+Genesis"><Button color="white" colorScheme="whiteAlpha" variant="solid" size="xs" rightIcon={<SiDuckduckgo/>}>Libgen</Button></Link>
                                <Link href="https://duckduckgo.com/?q=Sci-Hub"><Button color="white" colorScheme="whiteAlpha" variant="solid" size="xs" rightIcon={<SiDuckduckgo/>}>Sci-Hub</Button></Link>
                            </VStack>
                        </Flex>
                    </Box>
                    <Box p="4">
                        <Flex color="white">
                            <VStack align="left">
                                <Heading size="md">Apoptosis</Heading>
                                <Link href="/reading-lists"><Button color="white" colorScheme="whiteAlpha" variant="solid" size="xs">Reading Lists</Button></Link>
                                <Link href="/blog"><Button color="white" colorScheme="whiteAlpha" variant="solid" size="xs">Articles</Button></Link>
                                <Link href="/contributors"><Button color="white" colorScheme="whiteAlpha" variant="solid" size="xs">Site Contributors</Button></Link>
                            </VStack>
                        </Flex>
                    </Box>
                    <Box p="4">
                        <Flex color="white">
                            <VStack align="left">
                                <Heading size="md">Other Resources</Heading>
                                <Link href="https://mises.org/"><Button color="white" colorScheme="whiteAlpha" variant="solid" size="xs">Mises Institute</Button></Link>
                                <Link href="https://www.youtube.com/channel/UCTf0py7ryuSldOsDm4abSsg"><Button color="white" colorScheme="whiteAlpha" variant="solid" size="xs" rightIcon={<FaYoutube/>}>LiquidZulu YT</Button></Link>
                                <Link href="http://ldlework.com"><Button color="white" colorScheme="whiteAlpha" variant="solid" size="xs">ldlework.com</Button></Link>
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
