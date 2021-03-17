import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout"
import { useContext } from "react";
import { ThemedContext } from "../assets/themeToggle";

const Store = ({data, _setSt, setTitle, useName}) => {
    const themes = useContext(ThemedContext)
    const useNamex = useName || false
    const setTitlex = setTitle || false

    return (<>
    {setTitlex && 
        <Box lineHeight="40px" color="#444" fontSize="14px" fontWeight="bold" bg="gray.200" px="10px">
            Store Details
        </Box>
    }
        <Box>
            {data.map((detail, i) => <><Box>
                <Text color={themes.overlay.colors.primary} fontWeight="semibold" fontSize={14} lineHeight="40px">{!useName ? detail.title: detail.name}</Text>
                <Input w="20em" color={themes.overlay.colors.secondary} value={detail.value} onChange={e => _setSt(i, "store" , e.target.value)} placeholder="Type here..."/>
            </Box>
            </>)}
        </Box>
        <br/>
    </>);
}

export default Store;