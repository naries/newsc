import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { DrawerContent, DrawerCloseButton, DrawerHeader, DrawerFooter, DrawerBody, DrawerOverlay} from "@chakra-ui/modal"
import { Drawer } from "@chakra-ui/modal"
import React, { useContext } from 'react'
import { HStack, Text } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import { ThemedContext } from "../assets/themeToggle"

export default function FormDrawer({title, r, hideDrawer}) {
    const themes = useContext(ThemedContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const products = [
      {
        img:'',
        product:"Eye Glases",
        description: "You wear it ni!"
      },
      {
        img:'',
        product:"Eye Glases",
        description: "You wear it ni!"
      },
      {
        img:'',
        product:"Eye Glases",
        description: "You wear it ni!"
      },
      {
        img:'',
        product:"Eye Glases",
        description: "You wear it ni!"
      },
      {
        img:'',
        product:"Eye Glases",
        description: "You wear it ni!"
      },
      {
        img:'',
        product:"Eye Glases",
        description: "You wear it ni!"
      },
      {
        img:'',
        product:"Eye Glases",
        description: "You wear it ni!"
      },
      {
        img:'',
        product:"Eye Glases",
        description: "You wear it ni!"
      },
    ]
    const btnRef = React.useRef()
    return (
      <>
        {/* <Button size="sm" ref={btnRef} leftIcon={<FiEdit2 />} colorScheme="gray" onClick={onOpen} variant="link">
          Edit
        </Button> */}
        <Drawer
          isOpen={onOpen}
          placement="right"
          onClose={hideDrawer}
          finalFocusRef={r}
          >
          <DrawerOverlay>
            <DrawerContent
              bgGradient={`linear(to-tr, ${themes.overlay.bg.first} 5%, ${themes.overlay.bg.second})`}>
              <DrawerCloseButton />
              <DrawerHeader>{title}</DrawerHeader>
  
              <DrawerBody>
                <Box>
                  {products.map((product) => <Box p={1} sx={{cursor: 'pointer', borderRadius: "4px"}} _hover={{bg:"#d9d9d9"}} onClick={() => {
                    // save actions go here!
                    hideDrawer();
                  }}>
                    <HStack>
                      <Box bg="#b9b9b9" border="1px" borderColor="#d9d9d9" borderRadius="10px" h="60px" w="80px">

                      </Box>
                      <Box>
                        <Text>{product.product}</Text>
                        <Text sx={{fontSize: '14px'}} color="#444">{product.description}</Text>
                      </Box>
                    </HStack>
                  </Box>)}
                </Box>
              </DrawerBody>
  
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={hideDrawer}>
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }