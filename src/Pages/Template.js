import React, { useContext, useState } from 'react'
import { Box, SlideFade } from '@chakra-ui/react';
import { Loader } from '../components';
import { ThemedContext } from '../assets/themeToggle';

const Template = (props) => {
    const {showMenu} = props
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const themes = useContext(ThemedContext)

    if(loading) {
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
    setTimeout(() => setIsOpen(true), 1500)
    return (<>
        <Box w="100%" mt={!showMenu ? 0 : [0,0, 2, 8]} ml={ !showMenu ? 0 :["0", "0", "0", "280px"]} px={0} boxShadow={["none", "none", "none", themes.boxShadow]}>
          <Box border=".5px" borderColor="#ccd0d5" h={[0, 0, 0,"24px"]}></Box>
            <Box px={4} color={themes.textColor} py={8} overflowY={!showMenu ? 'none':`auto`} h={!showMenu ? "auto":`80vh`}>
                {loading && <Loader />}
                {!loading && <SlideFade in={isOpen} offsetY="100px">
                        {props.children}
                </SlideFade>}
            </Box>
          <Box color={themes.textColor} border=".5px" borderColor={themes.mainBorderColor} fontSize="12px" px={5}> &copy; 2021 Code Clan Nigeria</Box>
        </Box>
    </>);
}

export default Template;