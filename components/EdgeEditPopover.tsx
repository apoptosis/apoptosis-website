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
    Radio,
    RadioGroup,
    HStack,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from "@chakra-ui/react"
import { EditIcon, } from '@chakra-ui/icons'

const Form = ({ data, firstFieldRef, onCancel }) => {
    return (
        <Stack spacing={4}>
            <FormControl id={ `form__type__${data.id}` } as="fieldset">
                <FormLabel as="legend">Edge Type</FormLabel>
                <RadioGroup defaultValue="default">
                    <HStack spacing="24px">
                        <Radio value="default">Bezier (default)</Radio>
                        <Radio value="straight">Straight</Radio>
                        <Radio value="step">Step</Radio>
                        <Radio value="smoothstep">Smooth Step</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <ButtonGroup d="flex" justifyContent="flex-end">
                <Button variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button
                    onClick={e => {
                        data.update(
                            {
                                ...data.el,
                                type: document.getElementById(`form__type__${data.id}`).value
                            }
                        )
                        onCancel()
                    }}
                    colorScheme="teal">
                    Save
                </Button>
            </ButtonGroup>
        </Stack>
    )
}

const EdgeEditPopover = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()
    const firstFieldRef = useRef(null)

    return (
        <>

            {data.label}
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Edit Connector
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            <Form data={data} firstFieldRef={firstFieldRef} onCancel={onClose} />
                        </AlertDialogBody>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}
export default EdgeEditPopover
