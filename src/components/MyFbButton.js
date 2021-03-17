import { Box, HStack } from '@chakra-ui/layout';
import React, {useContext} from 'react'
import { ThemedContext } from '../assets/themeToggle';

const MyFbButton = props => {
    const themes = useContext(ThemedContext)
    return (
        <Box
        as="button"
        height="24px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="1px"
        px="8px"
        borderRadius="2px"
        fontSize="12px"
        fontWeight="semibold"
        bg={themes.button.bg}
        borderColor={themes.button.color}
        color={themes.button.color}
        _hover={{ bg: themes.button.hoverBg }}
        _active={{
            bg: themes.button.activeBg,
            transform: "scale(0.98)",
            borderColor: "#bec3c9",
        }}
        onClick={props.onClick}
        _focus={{
            boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
        >
            <HStack>
                <Box>
                    {props.leftIcon}
                </Box>
                <Box>   
                    {props.children}
                </Box>
            </HStack>
        </Box>
    );
}

export default MyFbButton;