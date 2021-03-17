import { UpDownIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import ChooseStatus from "./ChooseStatus";


const TileInner = ({title, content}) => {
    return (
        <>
            <Box py={1}>
                <HStack>
                    <Box w="70px">
                        {title}
                    </Box>
                    <Box maxW="200px">
                        <HStack>
                            <Text>
                                {content}
                            </Text>
                        </HStack>
                    </Box>
                </HStack>
            </Box>
        </>
    );
}

export default TileInner;