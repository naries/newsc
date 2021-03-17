import { Box } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { SlideFade } from '@chakra-ui/transition';

const Footer = () => {
    const [display, setDisplay] = useState(false)
    setTimeout(()=>setDisplay(true), 2000)
    return (
        <>
        <SlideFade in={display} offsetY="-100px">
            <Box p={8} color="#333" sx={{fontWeight: 'bold'}} fontSize={14}>
                &copy; 2021 CodeClanNigeria
            </Box>
        </SlideFade>
        </>
    );
}

export default Footer;