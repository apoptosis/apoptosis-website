import { Gradient } from 'react-gradient';
import { Center, Flex, Heading, VStack } from "@chakra-ui/react"
import { useColor } from './colors';

const Hero = (params) => {
    const fg = useColor('foreground')
    return (
        <Flex>
            {/* { gradients={[
                ['lime', 'gold'],
                ['gold', 'magenta'],
                ['magenta', 'royalblue'],
                ['royalblue', 'green']
            ]}
            property="background"
            element="div"
            angle="30deg"
            width="100vw"> } */}
            <div style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
                <Center>
                    <VStack spacing={5} margin="auto">
                        <Heading size="3xl">{params.title}</Heading>
                        <Heading size="lg">{params.subtitle}</Heading>
                    </VStack>
                </Center>
            </div>
        </Flex>
    )
}
export default Hero
