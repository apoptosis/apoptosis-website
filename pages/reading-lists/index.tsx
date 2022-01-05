import React from 'react'
import Hero from '../../components/Hero'
import FeaturedBooks from '../../components/FeaturedBooks'
import { Box, Flex } from "@chakra-ui/react"
import { BOOKS } from '../../olddata/reading-lists/books'

export function getStaticProps() {
    //
    const book_ids = Object.keys(BOOKS)
    book_ids.sort()

    const pick = (idx?) => {
        const index = idx || Math.floor(Math.random() * book_ids.length)
        const id = book_ids.splice(index, 1)[0];
        return {
            id, book: BOOKS[id]
        }
    }

    const featured = [pick(), pick(), pick()]
    return {
        props: {
            featured
        }
    }
}

const ReadingLists = ({ featured }) => {

    return (
        <Flex flexDir="column" alignItems="center">
            <Hero title="Reading Lists" subtitle="Community curated topical reading cirriculums" />
            <Box pb="3em">
                <FeaturedBooks featured={featured} />
            </Box>
        </Flex>
    )
}
export default ReadingLists
