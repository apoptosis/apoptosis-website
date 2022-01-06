import { Center, Heading, Box, Flex, effect } from "@chakra-ui/react"
import conf from '../olddata/config'

import React, { useState, useEffect, useRef } from 'react'
import CELLS from "vanta/dist/vanta.cells.min";
import * as THREE from "three";
import { useColor } from "../components/colors";

import Color from 'color';

function lerp(a: number, b: number, n: number) {
    return (1 - n) * a + n * b;
}


// lerp colors using value between 0 and 1
function lerpColor(a: Color, b: Color, amt: number) {
    return a.mix(b, amt);
}

function randomColor() {
    return Color.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255)
}

class ColorWalker {
    private current: Color;
    private target: Color;
    private totalSteps: number;
    private steps: number;

    constructor(steps: number) {
        this.current = randomColor();
        this.target = randomColor();
        this.totalSteps = steps;
        this.steps = 0;
    }

    getColor() {
        this.steps++;
        if (this.steps >= this.totalSteps) {
            this.current = this.target;
            this.target = randomColor();
            this.steps = 0;
        }
        const amt = this.steps / this.totalSteps;
        console.log(amt);
        return lerpColor(this.current, this.target, amt).hex();
    }
}

const Cells = (props) => {
    const vantaRef = useRef(null)
    const [vantaEffect, setVantaEffect] = useState(null)
    const [colorWalker, setColorWalker] = useState(new ColorWalker(500))
    const [colorWalker2, setColorWalker2] = useState(new ColorWalker(2000))
    const [worker, setWorker] = useState(null)

    useEffect(() => {
        const effect: any = CELLS({
            THREE,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            color1: colorWalker.getColor(),
            color2: colorWalker2.getColor(),
            scale: 1.0,
            size: 0.9,
            speed: 0.5,
            el: vantaRef.current
        });
        setVantaEffect(effect)
        const worker = setInterval(() => {
            const color1 = colorWalker.getColor()
            const color2 = colorWalker2.getColor()
            effect.setOptions({ color1, color2 })
        }, 10)
        setWorker(worker)
        return () => {
            if (vantaEffect) (vantaEffect as any).destroy()
            if (worker) clearInterval(worker)
        }
    }, [])
    return <Flex onClick={() => { vantaEffect.setOptions({ color1: 0x00 }) }} flexGrow="1" ref={vantaRef} justifyContent="center" alignItems="center">
        {props.children}
    </Flex>
}

const Index = () => {
    const bg = useColor('background')
    const fg = useColor('foreground')
    return (
        <Cells>
            <Box pt="20vh" pb="20vh" pl="30vw" pr="30vw">
                <Box p="12" boxShadow="dark-lg" bg={bg} color={fg} maxWidth={485}>
                    <Center>
                        <Heading size="xl">{conf.tagline}</Heading>
                    </Center>
                </Box>
            </Box>
        </Cells>
    )
}
export default Index
