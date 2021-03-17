import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, Spacer, SlideFade, Heading, Button } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { ThemedContext } from '../assets/themeToggle';
import UserCorner from './UserCorner';

const Header = ({setMenu, showMenu, light, toggleTheme}) => {
    const themes = useContext(ThemedContext)
    const [display, setDisplay] = useState(false)
    setTimeout(()=>setDisplay(true), 1800)
    return (<>
        {showMenu && <SlideFade in={display} offsetY="100px">
            <Box bg={themes.topBarBackground} pos={["unset", "unset", "unset","fixed"]} px={0} left="0" right="0" top="0" zIndex={10}>
                <Flex>
                    <Box p={4} display={["block", "block", "none"]} onClick={setMenu}>
                        <MdMenu color={themes.topBarCompanyColor} size="20px"/>
                    </Box>
                    <Box p={4}>
                        <Box>
                            <Heading as="h5" size="md" color={themes.topBarCompanyColor}>
                                newsc
                            </Heading>
                        </Box>
                    </Box>
                    <Spacer/>
                    <UserCorner light={light} toggleTheme={toggleTheme} />
                </Flex>
            </Box>
        </SlideFade>}
    </>);
}

export default Header;