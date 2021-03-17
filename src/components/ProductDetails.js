import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { DrawerContent, DrawerCloseButton, DrawerHeader, DrawerFooter, DrawerBody, DrawerOverlay} from "@chakra-ui/modal"
import { Drawer } from "@chakra-ui/modal"
import React, { useContext, useState } from 'react'
import { Divider, Text } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import MyFbButton from "./MyFbButton"
import { ThemedContext } from "../assets/themeToggle"

export default function ProductDetails({data}) {
    const themes = useContext(ThemedContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    console.log(data.variation)
    return (
      <>
        <MyFbButton
          onClick={onOpen} ref={btnRef}>
              More...
        </MyFbButton>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          >
          <DrawerOverlay>
            <DrawerContent
              bgGradient={`linear(to-tr, ${themes.overlay.bg.first} 5%, ${themes.overlay.bg.second})`}>
              <DrawerCloseButton />
              <DrawerHeader color={themes.overlay.colors.primary}>Details</DrawerHeader>
  
              <DrawerBody>
                <Box py={2}>
                  <Text color={themes.overlay.colors.primary} fontSize={14}>Country</Text>
                  <Text color={themes.overlay.colors.secondary}>{data.country}</Text>
                </Box>

                <Box py={2}>
                  <Text color={themes.overlay.colors.primary} fontSize={14}>Product</Text>
                  <Text color={themes.overlay.colors.secondary}>{data.Product}</Text>
                </Box>

                <Box py={2}>
                  <Text color={themes.overlay.colors.primary} fontSize={14}>Category</Text>
                  <Text color={themes.overlay.colors.secondary}>{data.category}</Text>
                </Box>

                <Box py={2}>
                  <Text color={themes.overlay.colors.primary} fontSize={14}>Cost</Text>
                  <Text color={themes.overlay.colors.secondary}>{data.cost}</Text>
                </Box>

                <Box py={2}>
                  <Text color={themes.overlay.colors.primary} fontSize={14}>Recurring</Text>
                  <Text color={themes.overlay.colors.secondary}>{data.recurring}</Text>
                </Box>

                {data.recurring ==="Yes" && <Box py={2}>
                  <Text color={themes.overlay.colors.primary} fontSize={14}>Recurring Duration</Text>
                  <Text color={themes.overlay.colors.secondary}>{data.duration}</Text>
                </Box>}

                {typeof data.variation === "object" && <>
                  <Divider />
                  <Box py={2} px={2}>
                    <Text color={themes.overlay.colors.primary} fontSize={14}>Variation</Text>
                  </Box>
                  <Divider />
                  {data.variation.map((n, i) => <>
                    <Box key={i} py={2} px={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>{n.title}</Text>
                      {n.options.map((m, i) => <Text key={i} color={themes.overlay.colors.secondary}>{m.title}</Text>)}
                    </Box>
                  </>)}
                </>}

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