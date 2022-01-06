import { Center, Heading, Box, Flex } from "@chakra-ui/react"
import conf from '../olddata/config'

import React, { useState, useEffect, useRef } from 'react'
import CELLS from "vanta/dist/vanta.cells.min";
import * as THREE from "three";

const Cells = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                CELLS({
                    THREE,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    size: 0.9,
                    speed: 0.5,
                    el: vantaRef.current
                })
            );
        }
        return () => {
            if (vantaEffect) (vantaEffect as any).destroy()
        }
    }, [vantaEffect])
    return <Flex flexGrow="1" ref={vantaRef} justifyContent="center" alignItems="center">
        {props.children}
    </Flex>
}

const Index = () => {
    return (
        <Cells>
            <Box pt="20vh" pb="20vh" pl="30vw" pr="30vw">
                <Box p="12" boxShadow="dark-lg" bg="#212c20" maxWidth={485}>
                    <Center>
                        <Heading size="xl">{conf.tagline}</Heading>
                    </Center>
                </Box>
            </Box>
        </Cells>
    )
}
export default Index
