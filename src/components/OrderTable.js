import { HStack } from "@chakra-ui/layout"
import { Wrap } from "@chakra-ui/layout"
import { VStack } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import { useContext, useState } from "react"
import { ThemedContext } from "../assets/themeToggle"
import Tile from "./Tile"

const OrderTable = ({orderRows}) => {
  const themes = useContext(ThemedContext)
  const [sortActive, setSortActive] = useState({})
  const [rowState, setRowState] = useState(orderRows)
  return (
    <Box fontSize={14} color={themes.overlay.colors.primary}>
        <HStack mt={2}>
            <Wrap>
                {[1, 2, 3].map((k, i) => {
                    return <VStack spacing ={2}>
                        {orderRows.map((order, key) => <>
                            {key % 3 === i && <Tile key={key} order={order} />}
                        </>)
                    }
                    </VStack>
                })}
            </Wrap>
        </HStack>        
    </Box>
  )
}

export default OrderTable