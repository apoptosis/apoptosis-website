import { AUTHORS } from '../olddata/reading-lists/authors'
import { auth } from '../utils/auth'
import { Box, VStack, HStack, Center, Heading } from '@chakra-ui/react'
import { FC } from 'react'

type BookProps = {
    id: string;
    book: any;
}

const Book: FC<BookProps> = ({ id, book }) => {
    const imgsrc = '/img/list-content/' + id + '.jpg'
    const booktitle = book.title
    const bookauthor = auth(AUTHORS[book.author[0]])
    try {
        return (
            <Box w="20vw">
                <VStack>
                    <img height="20vh" src={imgsrc} />
                    <Center align="center"><Heading size="md">{booktitle}</Heading></Center>
                    <Center align="center"><Heading size="xs">{bookauthor}</Heading></Center>
                </VStack>
            </Box>
        )
    }
    catch (TypeError) {
        return <p>Error in {id} : {book}</p>
    }
}

const FeaturedBooks = ({ featured }) => {
    return (
        <div style={{ paddingTop: "2vh", }}>
            <VStack spacing={5}>
                <Center>
                    <Heading size="xl">Some Books To Get You Started</Heading>
                </Center>
                <HStack spacing={5}>
                    {featured.map(({ id, book }) => <Book id={id} book={book} />)}
                </HStack>
            </VStack>
        </div>
    )
    /*return (
        <div style={{ paddingTop: "2vh", }}>
            <VStack spacing={5}>
                <Center>
                    <Heading size="xl">Some Books To Get You Started</Heading>
                </Center>
                <HStack>
                    <Container>
                        <VStack>
                            <Image src={`/img/list-content/${feats[0]}.jpg`}/>
                            <Header>{BOOKS[feats[0]].title}</Header>
                            <Header>{auth(AUTHORS[BOOKS[feats[0]].author[0]])}</Header>
                        </VStack>
                    </Container>
                </HStack>
            </VStack>
        </div>
    )*/
}
export default FeaturedBooks

// const FeatureList = [
//   {
//     title: BOOKS[feats[0]].title,
//     Jpg: `/img/list-content/${feats[0]}.jpg`,
//     description: (
//       <>
//         {auth(AUTHORS[BOOKS[feats[0]].author[0]])}
//       </>
//     ),
//   },
//   {
//     title: BOOKS[feats[1]].title,
//     Jpg: `/img/list-content/${feats[1]}.jpg`,
//     description: (
//       <>
//         {auth(AUTHORS[BOOKS[feats[1]].author[0]])}
//       </>
//     ),
//   },
//   {
//     title: BOOKS[feats[2]].title,
//     Jpg: `/img/list-content/${feats[2]}.jpg`,
//     description: (
//       <>
//         {auth(AUTHORS[BOOKS[feats[2]].author[0]])}
//       </>
//     ),
//   },
// ];