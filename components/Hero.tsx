import { Gradient } from 'react-gradient'
import { Center, Heading, useColorModeValue, VStack } from "@chakra-ui/react"
import conf from '../data/config'

const Hero = (params) => {
    return (
        <Gradient
            gradients={[
                ['lime', 'gold'],
                ['gold', 'magenta'],
                ['magenta', 'royalblue'],
                ['royalblue', 'green']
            ]}
            property="background"
            element="div"
            angle="30deg"
            width="100vw">
            <div style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
                <Center>
                    <VStack spacing={5}>
                        <Heading size="3xl" color={useColorModeValue("white", "gray.800")}>{params.title}</Heading>
                        <Heading size="lg" color={useColorModeValue("white", "gray.800")}>{params.subtitle}</Heading>
                    </VStack>
                </Center>
            </div>
        </Gradient>
    )
}
export default Hero
