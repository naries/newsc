import { Checkbox } from '@chakra-ui/checkbox'
import { Flex, HStack, Text } from '@chakra-ui/layout'
import { Center } from '@chakra-ui/layout'
import { Td } from '@chakra-ui/table'
import { Tr } from '@chakra-ui/table'
import React, { useContext } from 'react'
import { BsTrash } from 'react-icons/bs'
import { ThemedContext } from '../assets/themeToggle'
import DrawerExample from './DrawerExample'
import MyFbButton from './MyFbButton'
import ProductDetails from './ProductDetails'

const Row = ({k, i, noCount, action, which, nodelete, noAction}) => {
    const themes = useContext(ThemedContext)
    let noCountx = noCount || false
    let nodeletex = nodelete || false
    let noActionx = noAction || false

    let actionx = (x) => action(x) || null
    return (<>
        <Tr _hover={{bg: 'pink.100'}}>
            {!noCountx && <><Td maxW="20px">{i + 1}</Td>
            {<Td>
                <Flex>
                    <Center>
                        <ProductDetails data={k}/>
                    </Center>
                </Flex>
            </Td>}
            </>}
        {Object.keys(k).map((key) => <>
        {key!=="country" && key!=="category" && key!=="duration" && key!=="variation" && key!=="offer" && <Td minW="50px">
                {(key==="type"||key==="product"||key==="agent"||key==="name"||key==="gateway") && <Text sx={{fontWeight: 800}}>
                    {k[key]}
                 </Text>}
                 {key==="use" && <Checkbox defaultChecked={k[key]===true ? true: false}>{console.log(k[key])}</Checkbox>}
                {key!=="type"&& key!=="use" && key!=="product" && key!=="agent" && key!=="name" && key!=="gateway" && <Text>{k[key]}</Text>}
            </Td>}
        </>)}
        <Td>
            {!noActionx && <HStack>
                <DrawerExample data={k} which={which} />
                {(noCountx && !nodeletex) && <MyFbButton leftIcon={<BsTrash/>} onClick={() => actionx(i)}>Delete</MyFbButton>}
            </HStack>}
        </Td>
        </Tr>
        </>
    )
}

export default Row