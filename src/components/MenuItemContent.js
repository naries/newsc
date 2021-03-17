import Icon from '@chakra-ui/icon';
import { Box, Divider, Flex } from '@chakra-ui/layout';
import { SlideFade } from '@chakra-ui/transition';  
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemedContext } from '../assets/themeToggle'

const MenuItemContent = ({setMenu, timeout, content}) => {
    const themes = useContext(ThemedContext)
    const [display, setDisplay] = useState(false)
    setTimeout(()=>setDisplay(true), timeout)
    return (
        <SlideFade in={display} offsetX="100px">
            <Link to={content.link}>
                <Box py={2} my={0}
                    onClick = {()=>setMenu(false)}
                    roundedTopRight="50px"
                    roundedBottomRight="50px"
                    sx={{cursor: 'pointer', fontWeight: "500", border:"1px", borderColor: 'transparent'}}
                    _hover={{bg:themes.hoverBgColor, borderColor: themes.menuTextBorder}}
                    fontSize={15}>
                    <Flex>
                        <Box>
                            <Icon as ={content.icon} color={themes.menuTextColor} w={16} h={5} px={4}/>
                        </Box>
                        <Box display={["block", "block", "none", "block"]} color={themes.menuTextColor}>
                            {content.title}
                        </Box>
                    </Flex>
                </Box>
            </Link>
        </SlideFade> 
    );
}

export default MenuItemContent;