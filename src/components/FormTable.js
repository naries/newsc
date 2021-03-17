import { Box, Flex, HStack, Spacer, Wrap, WrapItem } from "@chakra-ui/layout"
import { useContext, useState } from "react"
import { Link, useRouteMatch } from 'react-router-dom';
import { rows } from '../lib/formData'
import styled from 'styled-components'
import { ThemedContext } from "../assets/themeToggle";

const Iframe = styled.iframe`
    -ms-zoom: 0.50;
    -moz-transform: scale(0.5);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.5);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.5);
    -webkit-transform-origin: 0 0;
`


const FormTable = () => {
  const themes = useContext(ThemedContext)
  const [rowState, setRowState] = useState(rows)
  let match = useRouteMatch()
  return (
    <Box fontSize={14} color="#333" mt={4}>
      <Box bg={themes.topBarBackground} color="#f9f9f9" xs={{fontWeight: 'bolder'}} height="24px">
        <Flex>
          <Box sx={{fontWeight: 'bold'}} fontSize={14} lineHeight="20px" ml="4">Forms</Box>
          <Spacer />
        </Flex>
      </Box>
      <HStack mt={4} spacing="44px" px="24px">
        <Wrap>
        {rowState.map((r, i) => 
          <WrapItem key={i}>
            <Link to = {`${match.url}/${r.id}`}>
              <Box boxShadow={themes.boxShadow} position="relative" sx={{cursor: 'pointer'}} w="200px" borderRadius="4px">
                <Box pos="absolute" left={0} right={0} top={0} bottom={0} _hover={{bg: 'rgba(0, 0, 0, .1)'}}></Box>
                <Box px="10px" borderBottom="2px" color={themes.overlay.colors.primary} py="4px" borderColor="#ccc" sx={{overflow: 'hidden'}}>
                  <Box lineHeight="25px" sx={{fontWeight: 'semibold'}}>{r.product}</Box>
                  <Box fontSize="12.5px" lineHeight="20px">{r.title}</Box>
                </Box>
                <Box h="200px" overflow="hidden">
                  <Iframe id="frame" height="400" width="400" src={`${match.url}/${r.id}/frame`} title="form">Sorry your browser does not support Iframe</Iframe>
                </Box>
              </Box>

            </Link>
          </WrapItem>
        )}
        </Wrap>
      </HStack>
    </Box>
  )
}

export default FormTable