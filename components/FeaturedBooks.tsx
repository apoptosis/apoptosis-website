import { BOOKS } from '../data/reading-lists/books'
import { AUTHORS } from '../data/reading-lists/authors'
import { auth, formats } from '../utils/auth'
import { Box, VStack, HStack, Center, Heading, Link, Button } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'


type BookProps = {
    id: string;
    book: any;
}

const Book: FC<BookProps> = ({ id, book }) => {
    const imgsrc = '/img/list-content/' + id + '.jpg'
    const booktitle = book.title
    const bookauthor = auth(AUTHORS[book.author[0]], formats.truncated)
    try{
        return (
            <Box w="20vw">
                <VStack>
                    <img style={{height: 300, width: 200}} src={imgsrc}/>
                    <Center align="center"><Heading size="md">{booktitle}</Heading></Center>
                    <Center align="center"><Heading size="xs">{bookauthor}</Heading></Center>
                </VStack>
            </Box>
        )
    }
    catch(TypeError){
        return <p>{{ id, book}}</p>
    }
}

const FeaturedBooks = () => {
    const book_ids = Object.keys(BOOKS)
    book_ids.sort()

    const pick = (idx?) => {
        const index = idx || Math.floor(Math.random()*book_ids.length)
        const id = book_ids.splice(index, 1)[0];
        return {
            id, book: BOOKS[id]
        }
    }

    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        setFeatured([pick(), pick(), pick()])
    }, []) // randomize first time component is mounted

    return (
        <div style={{ paddingTop: "2vh", }}>
            <VStack spacing={5}>
                <Center>
                    <Heading size="xl">Some Books To Get You Started</Heading>
                </Center>
                <HStack spacing={5}>
                    {featured.map(({ id, book }) => <Book id={id} book={book} />)}
                </HStack>
                <Center>
                    <Link href="/reading-lists/view-lists">
                        <Button colorScheme="gray" size="lg">See Curriculums</Button>
                    </Link>
                </Center>
            </VStack>
        </div>
    )
}
export default FeaturedBooks
