import { Input } from '@chakra-ui/input'
import { Box, Center, Heading } from '@chakra-ui/layout'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { ThemedContext } from '../assets/themeToggle'
import { Bump, EditableField, PayMentGatewayColumn, Store, SubmitButton, UpsaleColumn } from '../components'
import { row, rows } from '../lib/formData'

const NewForm = ({_setShowMenu}) => {
    const themes = useContext(ThemedContext)

    const setShowMenu = _setShowMenu
    if (typeof setShowMenu === "function") {
        setShowMenu()
    }
    let { id } = useParams()
    
    const data = id ? rows.find(a => a.id == id): row[0]
    const [stl, setStl] = useState(data)
    const [titleEditMode, setTitleEditMode] = useState(false)
    const _setStl = (i, which, x) => {
        let holder
        switch(which) {
            case 'form-fields':
                holder = [...stl.fields]
                // manipulations
                holder[i] = {...holder[i], title: x}
                // save state
                setStl({...stl, fields: [...holder]})
                break
            case 'required':
                holder = [...stl.fields]
                // manipulation
                holder[i] = {...holder[i], required: x}
                setStl({...stl, fields: [...holder]})
                break
            case "submit": 
                setStl({...stl, submit:{...stl.submit, ...x}})
                break
            case "bump": 
                setStl({...stl, bump:{...stl.bump, ...x}})
                break
            case "store":
                holder = [...stl.store]
                // manipulation
                holder[i] = {...holder[i], value: x}
                setStl({...stl, store: [...holder]})
                break
            default: return
        }
    }
    return (
        <>
            <Box>
                <Center>
                    <Box id="form">
                        {!titleEditMode && <Heading as="h1" size="lg" color={themes.overlay.colors.primary} onClick={()=>setTitleEditMode(!titleEditMode)}>{stl.title}</Heading>}
                        {titleEditMode && <Input 
                            pl={0}
                            autoFocus
                            border="none" 
                            borderBottom="1px"
                            borderColor="gray.700"
                            fontWeight="bold"
                            color={themes.overlay.colors.secondary}
                            w="300px"
                            borderRadius="0"
                            onBlur={()=> setTitleEditMode(!titleEditMode)}
                            _focus={{outline: 'none'}}
                            outline='none'
                            fontSize="30px"
                            onChange={e => setStl({...stl, title: e.target.value})}
                            value={stl.title}/>}
                        {stl.fields.map((field, i) => <>
                            <Box key={i}>
                                <EditableField k={i} data={field} setSt = {_setStl}/>
                            </Box>
                        </>)}Store
                        <Bump data={stl.bump} setSt={_setStl} />
                        <UpsaleColumn data={stl.upsale} setSt={_setStl}/>
                        <PayMentGatewayColumn />
                        <Store data={stl.store} _setSt={_setStl} setTitle={true} useName={false}/>
                        <SubmitButton data={stl.submit} setSt = {_setStl}/>
                    </Box>
                </Center>
            </Box>
        </>
    )
}

export default NewForm