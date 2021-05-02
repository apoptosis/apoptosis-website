import { BOOKS } from '../data/reading-lists/books'
import { AUTHORS } from '../data/reading-lists/authors'
import { auth } from '../utils/auth'
import { Box, Image, VStack, HStack, Center, Heading, Container } from '@chakra-ui/react'

const book_ids = Object.keys(BOOKS)
const feats = (()=>{
    const rand = () => {
        return Math.floor(Math.random() * book_ids.length)
    }
    let rands = [rand(),rand(),rand()]
    while(rands[0] == rands[1]){
        rands[0] = rand()
    }
    while(rands[2] == rands[0] || rands[2] == rands[1]){
        rands[2] = rand()
    }
    return [book_ids[rands[0]],book_ids[rands[1]],book_ids[rands[2]],]
})()

console.log(feats)
for(let i=0; i<3; i++){
  console.log(AUTHORS[BOOKS[feats[i]].author[0]])
}

const Book = (n:number) => {
    const feat = feats[n]
    const book = BOOKS[feat]
    const imgsrc = '/img/list-content/' + feat + '.jpg'
    const booktitle = book.title
    const bookauthor = auth(AUTHORS[book.author[0]])
    try{
        return (
            <Box w="20vw">
                <VStack>
                    <p>{feats[n]}</p>
                    <p>{imgsrc}</p>
                    <img style={{height: 300, width: 200}} src={imgsrc}/>
                    <Center align="center"><Heading size="md">{booktitle}</Heading></Center>
                    <Center align="center"><Heading size="xs">{bookauthor}</Heading></Center>
                </VStack>
            </Box>
        )
    }
    catch(TypeError){
        return <p>{feats[n]}</p>
    }
}

const FeaturedBooks = () => {
    return (
        <div style={{ paddingTop: "2vh", }}>
            <VStack spacing={5}>
                <Center>
                    <Heading size="xl">Some Books To Get You Started</Heading>
                </Center>
                <HStack spacing={5}>
                    {Book(0)}
                    {Book(1)}
                    {Book(2)}
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

const FeatureList = [
  {
    title: BOOKS[feats[0]].title,
    Jpg: `/img/list-content/${feats[0]}.jpg`,
    description: (
      <>
        {auth(AUTHORS[BOOKS[feats[0]].author[0]])}
      </>
    ),
  },
  {
    title: BOOKS[feats[1]].title,
    Jpg: `/img/list-content/${feats[1]}.jpg`,
    description: (
      <>
        {auth(AUTHORS[BOOKS[feats[1]].author[0]])}
      </>
    ),
  },
  {
    title: BOOKS[feats[2]].title,
    Jpg: `/img/list-content/${feats[2]}.jpg`,
    description: (
      <>
        {auth(AUTHORS[BOOKS[feats[2]].author[0]])}
      </>
    ),
  },
];
