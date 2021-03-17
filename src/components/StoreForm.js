import { Button } from '@chakra-ui/button'
import { Box, Center, Heading } from '@chakra-ui/layout'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { ThemedContext } from '../assets/themeToggle'
import { Store } from '../components'
import { store } from '../lib/settings'

const StoreForm = () => {
    const themes = useContext(ThemedContext)
    let { id } = useParams()
    
    const data = store
    const [stl, setStl] = useState(false)
    const [titleEditMode, setTitleEditMode] = useState(false)
    return (
        <>
            <Box>
                <Center>
                    <Box>
                        <Heading as="h1" size="lg" color={themes.overlay.colors.primary} onClick={()=>setTitleEditMode(!titleEditMode)}>Store Settings</Heading>
                        <Store data={store} setTitle={false} useName={true}/>
                        <Button variant="solid" colorScheme="pink">Update</Button>
                    </Box>
                </Center>
            </Box>
        </>
    )
}

export default StoreForm