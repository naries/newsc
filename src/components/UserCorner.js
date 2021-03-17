import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Center, Avatar, Stack, MenuItem, MenuButton, Menu, MenuList, Divider, Button, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ThemedContext } from '../assets/themeToggle';


const UserCorner = ({light, toggleTheme}) => {
    const themes = useContext(ThemedContext)
    return (
        <Box>
            <Center w="100%" h="100%">
                <Stack direction="row" mr={4}>
                    <Box>
                        <Center w="100%" h="100%" color={themes.topBarCompanyColor}>
                            Kisame
                        </Center>
                    </Box>
                    <Menu color={themes.topBarCompanyColor}>
                        {({ isOpen }) => (
                            <>
                            <MenuButton isActive={isOpen} transition="all 0.2s">
                            <Stack direction="row">
                                {!isOpen && <Avatar color="white" size="sm" name="Oshigaki Kisame" bg="purple" src="https://bit.ly/broken-link" />}
                                <Box>
                                <Center w="100%" h="100%">
                                    <ChevronDownIcon />
                                </Center>
                                </Box>
                            </Stack>
                        </MenuButton>
                        <MenuList bg={themes.background} color={themes.topBarCompanyColor} boxShadow={themes.boxShadow} border="none">
                            <Box>
                                <Center p={2} h="100%" w="100%">
                                    <Avatar color="white" size="md" bg="purple" name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
                                </Center>
                                <Box fontSize="sm">
                                    <Center>
                                        Ogishaki Kisame
                                    </Center>
                                </Box>
                            </Box>
                            <Divider />
                            <MenuItem minH="32px" _hover={{bg:themes.hoverBgColor}} >Profile</MenuItem>
                            <MenuItem minH="32px" _hover={{bg:themes.hoverBgColor}} >Sign out</MenuItem>
                            <MenuItem minH="32px" _hover={{bg:themes.hoverBgColor}} onClick={toggleTheme}>
                                {light ? "Dark": "Light"}  Mode
                            </MenuItem>
                        </MenuList>
                        </>
                        )}
                    </Menu>
                </Stack>
            </Center>
        </Box>
    );
}

export default UserCorner;