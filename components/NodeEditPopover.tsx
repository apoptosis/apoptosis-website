import React, { forwardRef, useRef, useState } from 'react'
import FocusLock from 'react-focus-lock'
import {
    useDisclosure,
    Box,
    Button,
    ButtonGroup,
    Center,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    IconButton,
    Stack,
    Heading,
    useToast,
    Code,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from "@chakra-ui/react"
import { EditIcon, CopyIcon, } from '@chakra-ui/icons'

const Form = ({ data, firstFieldRef, onCancel }) => {
    const toast = useToast()
    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()

    return (
        <Stack spacing={4}>
            <Button
                rightIcon={<CopyIcon/>}
                onClick={()=>{
                    try{
                        navigator.clipboard.writeText(data.id).then(
                            toast({
                                title: "Success.",
                                description: "ID copied to clipboard.",
                                status: "success",
                                duration: 2000,
                                isClosable: true,
                            })
                        )
                    }catch(e){
                        console.log(e)
                        toast({
                            title: "Error.",
                            description: `Error copying ID to clipboard (see logs for details): ${e}`,
                            status: "error",
                            duration: 2000,
                            isClosable: true,
                        })
                    }
                }}>
                {data.id}
            </Button>
            <FormControl id={ `form__${data.id}` }>
                {
                    (
                        () => {
                            switch(data.type){
                                case "IN": {
                                    {
                                        return (
                                            <>
                                                <FormLabel>Category Title</FormLabel>
                                                <Input type="text" name="cat-title"/>
                                                <FormHelperText>The title for this category.</FormHelperText>
                                            </>
                                        )                                  
                                    }
                                    break;
                                }
                                    
                                case "MID":
                                case "OUT": {
                                    {
                                        return (
                                            <>
                                                <FormLabel>Book ID</FormLabel>
                                                <Input type="text" name="book-id"/>
                                                <FormHelperText>The ID for the book, if /img/list-content/book-id.jpg exists then it will be displayed as an image.</FormHelperText>
                                            </>
                                        )
                                    }
                                    break;
                                }
                            }
                        }
                    )()
                }
            </FormControl>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Node
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={()=>{data.delete(data.id)}} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            <ButtonGroup d="flex" justifyContent="flex-end">
                <Button variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button colorScheme="red" onClick={()=>{setIsOpen(true)}}>
                    Delete Node
                </Button>
                <Button
                    onClick={e => {
                        switch(data.type){
                            case "IN": {
                                {
                                    data.update(e.target.id,{
                                        ...data,
                                        label: (
                                            <>
                                                {document.getElementById(`form__${data.id}`).value}
                                            </>
                                        )   
                                    })
                                    onCancel()
                                }
                                break;
                            }
                                
                            case "MID":
                            case "OUT": {
                                {
                                    let bookId = document.getElementById(`form__${data.id}`).value
                                    data.update(e.target.id,{
                                        ...data,
                                        label: (
                                            <>
                                                <img style={{ width:100, height:150 }} src={`/img/list-content/${bookId}.jpg`} alt={bookId}/>
                                            </>
                                        )   
                                    })
                                    onCancel()
                                }
                                break;
                            }
                        }
                    }}
                    id={ `edit__${data.id}` }
                    colorScheme="teal">
                    Save
                </Button>
            </ButtonGroup>
        </Stack>
    )
}

const NodeEditPopover = ({ data }) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = useRef(null)

  return (
      <>
          <Popover
              isOpen={isOpen}
              initialFocusRef={firstFieldRef}
              onOpen={onOpen}
              onClose={onClose}
              placement="right"
              closeOnBlur={false}
          >
              <PopoverTrigger>
                  <Box as="button">
                      {data.label}
                  </Box>
              </PopoverTrigger>
              <PopoverContent p={5}>
                  <FocusLock returnFocus persistentFocus={false}>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <Form data={data} firstFieldRef={firstFieldRef} onCancel={onClose} />
                  </FocusLock>
              </PopoverContent>
          </Popover>
      </>
  )
}
export default NodeEditPopover
