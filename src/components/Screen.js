import React, { useContext, useState } from 'react'
import { Box, SlideFade } from '@chakra-ui/react';
import { ThemedContext } from '../assets/themeToggle';

const Screen = (props) => {
    const themes = useContext(ThemedContext)
    const [isOpen, setIsOpen] = useState(false)
    setTimeout(() => setIsOpen(true), 1500)
    return (
        <SlideFade in={isOpen} offsetY="100px">
            <Box w="100%" h="100vh" bg={themes.background} sx={{overflow: 'hidden'}} py={[0, 0, 0, 10]} px={[0, 0, 0, 16]}>
                {props.children}
            </Box>
        </SlideFade>
    );
}

export default Screen;