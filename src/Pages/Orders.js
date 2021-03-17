import { HStack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Wrap } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { WrapItem } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { useContext, useState } from "react";
import { FaCheck, FaMarker } from "react-icons/fa";
import { theme, ThemedContext } from "../assets/themeToggle";
import OrderTable from "../components/OrderTable";
import { orderRows, status } from "../lib";


const Orders = () => {
    const themes = useContext(ThemedContext)
    const [selectedStatus, setSelectedStatus] = useState("Pending")
    const _setSelectedStatus = (x) => setSelectedStatus(x)
    return (
        <Box>
            {/* Menu */}
            <Center>
                <HStack>
                    <Wrap>
                        {status.map((stat, i) => {
                            return <WrapItem>
                                <Box key={i} _hover={{ bg: themes.topBarBackground, overflow: "hidden", cursor: 'pointer'}} onClick={()=>_setSelectedStatus(stat)}>
                                    <Box p={2} border="1px" _hover={{ borderColor:themes.topBarBackground, color: "white" }} color={selectedStatus === stat ? "purple.500": "#333"} borderRadius="4px" fontSize="14px">
                                        <HStack>
                                            {selectedStatus === stat && <Box>
                                                <FaCheck/>
                                            </Box>}
                                            <Box>
                                                {stat}
                                            </Box>
                                        </HStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        })}
                    </Wrap>
                </HStack>
            </Center>
            <br />
            <Box>
                <Box border="2px" bg={themes.topBarBackground} color="#f9f9f9" xs={{fontWeight: 'bolder'}} height="24px">
                    <Flex>
                    <Box sx={{fontWeight: 'bold'}} fontSize={14} lineHeight="20px" ml="4">Orders</Box>
                    <Spacer />
                    <Box sx={{fontWeight: 'bold'}} fontSize={14} lineHeight="20px" mr="4"></Box>
                    </Flex>
                </Box>
                <Box>
                    {orderRows.filter(a => a.status === selectedStatus).length === 0 && <Box my={4} fontSize="14px" color="#444"><Center>
                        Nothing to show here. Try refreshing!
                    </Center></Box>}
                    <OrderTable orderRows = {orderRows.filter(a => a.status === selectedStatus)}/>
                </Box>
            </Box>
        </Box>
    );
}

export default Orders;