import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { DrawerContent, DrawerCloseButton, DrawerHeader, DrawerFooter, DrawerBody, DrawerOverlay} from "@chakra-ui/modal"
import { Drawer } from "@chakra-ui/modal"
import React, { useState } from 'react'
import { Text } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import MyFbButton from "./MyFbButton"
import { status } from "../lib"
import { HStack } from "@chakra-ui/layout"
import { FaCheck } from "react-icons/fa"

export default function ChooseStatus({content, icon}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
      <>
        <MyFbButton
          leftIcon={icon||'none'}
          onClick={onOpen} ref={btnRef}>
              Change status
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
              <DrawerHeader>Choose status</DrawerHeader>
  
              <DrawerBody>
                {status.map((stat, i) => <>
                    <Box p={3} key={i} sx={{cursor: 'pointer'}} _hover={{fontWeight: 'bold', bg: "#ddd"}} onClick={onClose}>
                        <HStack>
                            {content===stat && <Box>
                                <FaCheck /> 
                            </Box>}
                            <Box>
                                <Text color="#666" fontSize={14}>{stat}</Text>
                            </Box>
                        </HStack>
                    </Box>
                </>)}
              </DrawerBody>
  
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }