import { default as NextLink } from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react"

export const Link = ({ href, ...rest }) =>
    <ChakraLink as={NextLink} href={href} {...rest} />
