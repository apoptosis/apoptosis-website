import { Box, ChakraProvider, ColorModeScript, Flex, theme, useColorMode } from '@chakra-ui/react'
import PageFooter from '../components/PageFooter'
import PageHead from '../components/PageHead'
import PageHeaderBar from '../components/PageHeaderBar'

import '../styles/globals.css'
import { useColor } from '../components/colors'

const Layout = ({ children }) => {
    const mode = useColorMode()
    const background = useColor('background')
    const foreground = useColor('foreground')
    console.log(`Background: ${background}`)
    console.log(`Foreground: ${foreground}`)
    console.log(`Mode: ${JSON.stringify(mode)}`)
    return <Flex minHeight="100vh" flexDir="column" position="relative" bg={background} color={foreground}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <PageHead />
        <PageHeaderBar />
        <Box flexGrow="1">
            {children}
        </Box>
        <PageFooter />
    </Flex>
}

function MyApp({ Component, pageProps }) {
    return <ChakraProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
}

export default MyApp

