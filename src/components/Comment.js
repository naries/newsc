import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { DrawerContent, DrawerCloseButton, DrawerHeader, DrawerFooter, DrawerBody, DrawerOverlay} from "@chakra-ui/modal"
import { Drawer } from "@chakra-ui/modal"
import React from 'react'
import { Box } from "@chakra-ui/layout"
import MyFbButton from "./MyFbButton"
import { Textarea } from "@chakra-ui/textarea"

export default function Comment({content, icon, contains}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
      <>
        <MyFbButton
          leftIcon={icon||'none'}
          onClick={onOpen} ref={btnRef}>
              Comment
        </MyFbButton>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          >
          <DrawerOverlay>
            <DrawerContent
              bgGradient="linear(to-tr, #f9f9f9 5%, white)">
              <DrawerCloseButton />
              <DrawerHeader>Edit Comment</DrawerHeader>
  
              <DrawerBody>
                <Box bg="white">
                    <Textarea h={60} resize="none">
                        {contains}  
                    </Textarea>
                </Box>
              </DrawerBody>
  
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="solid" colorScheme="blue" mr={3} onClick={onClose}>
                  Save
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }