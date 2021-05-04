import React, { forwardRef, useRef } from 'react'
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
} from "@chakra-ui/react"
import { EditIcon, } from '@chakra-ui/icons'

const Form = ({ data, firstFieldRef, onCancel }) => {
  return (
      <Stack spacing={4}>
          <FormControl id={ `form__${data.id}` }>
              <FormLabel>Book ID</FormLabel>
              <Input type="text" />
              <FormHelperText>The ID for the book, if /img/list-content/book-id.jpg exists then it will be displayed as an image.</FormHelperText>
          </FormControl>
          <ButtonGroup d="flex" justifyContent="flex-end">
              <Button variant="outline" onClick={onCancel}>
                  Cancel
              </Button>
              <Button
                  onClick={e => {
                      console.log(data)
                      data.update(e.target.id)
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
                  <IconButton size="sm" icon={<EditIcon />} />
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


const sumn = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Button
                    colorScheme="teal"
                    size="sm"
                >
                    Edit Node
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton
                    onClick={e => {
                        
                    }}
                    id={ `edit__${data.id}` }/>
                <PopoverHeader>Node Options</PopoverHeader>
                <PopoverBody>
                    <FormControl id={ `form__${data.id}` }>
                        <FormLabel>Book ID</FormLabel>
                        <Input type="text" />
                        <FormHelperText>The ID for the book, if /img/list-content/book-id.jpg exists then it will be displayed as an image.</FormHelperText>
                    </FormControl>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
