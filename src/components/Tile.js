import { ChevronDownIcon, ChevronUpIcon, UpDownIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Wrap } from "@chakra-ui/layout";
import { WrapItem } from "@chakra-ui/layout";
import { useContext, useState } from "react";
import { FaMarker } from "react-icons/fa";
import { ThemedContext } from "../assets/themeToggle";
import ChooseStatus from "./ChooseStatus";
import Comment from "./Comment";
import MyFbButton from "./MyFbButton";
import TileInner from "./TileInner";

const Tile = ({key, order}) => {
    const themes = useContext(ThemedContext)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const _setIsCollapsed = () => setIsCollapsed(!isCollapsed)
    return (
        <>
        <WrapItem key={key}>
            <Box border="1px"  borderColor="#d9d9d9" p={2} borderRadius="4px" _hover={{ bg: themes. hoverBgColor }}>
                <Box pos="relative" h={!isCollapsed ? "100px": "auto"} transition = "all 2s cubic-bezier(.08,.52,.52,1)" overflow="hidden">
                    <Box fontWeight="bold" fontSize="lg" my={1}>
                        {order.product}
                    </Box>
                    
                    <Box fontWeight="semibold">
                        Details
                    </Box>
                    
                    <TileInner title="Name" content={order.name} />
                    <TileInner title="Email" content={order.email} />
                    <TileInner title="Phone" content={order.phone} />
                    <TileInner title="Address" content={order.address} />
                    <TileInner title="State" content={order.state} />
                    <TileInner title="Quantity" content={order.quantity} />
                    <TileInner title="Cost" content={order.cost} />
                    <TileInner title="Date" content={order.date} />
                    <TileInner title="Comment" content={order.comment} />
                    <TileInner title="Status" content={order.status} />
                </Box>
                <Box py={1}>
                    <HStack>
                        <Wrap maxW="250px">
                            <WrapItem>
                                <MyFbButton onClick={()=>_setIsCollapsed()} leftIcon ={isCollapsed ? <ChevronUpIcon w={4} h={4} />:<ChevronDownIcon w={4} h={4} />}>...{!isCollapsed?"more": "less"}</MyFbButton>
                            </WrapItem>
                            <WrapItem>
                                <Comment icon={<FaMarker/>} contains={order.comment}/>
                            </WrapItem>
                            <WrapItem>
                                <ChooseStatus icon={<UpDownIcon />} content={order.status}/>
                            </WrapItem>
                        </Wrap>
                    </HStack>
                </Box>
            </Box>
        </WrapItem>
        </>
    );
}

export default Tile;