import React from 'react'
import { Box, Center, Spinner } from '@chakra-ui/react';

const Loader = () => {
    return (
        <Box h="500px" w="100%">
            <Center w="100%" h="500px">
                <Spinner
                    color="#FF0080" 
                    size="lg"
                    thickness="4px"
                    emptyColor="purple.50"
                    speed="0.65s"/>
            </Center>
        </Box>
    );
}

export default Loader;