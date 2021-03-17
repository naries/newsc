import { Checkbox } from "@chakra-ui/checkbox";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { useContext, useState } from "react";
import { ThemedContext } from "../assets/themeToggle";

const EditableField = ({k, data, setSt}) => {
    const themes = useContext(ThemedContext)
    const [editMode, setEditMode] = useState(false)
    const [checked, setChecked] = useState(false)
    const _setEditMode = () => {
        setEditMode(!editMode)
    }
    return (
        <Box py={2}>
            {!editMode && <Box onClick={_setEditMode}>
                <Text color={themes.overlay.colors.secondary} fontSize={14} lineHeight="40px">{data.title} <span style={{fontWeight:'bold', color: data.required ? 'red':'gray'}}>
                *</span></Text>
            </Box>}
            {editMode && <><Box onBlur={_setEditMode} tabIndex={k} _focus={{outlineColor: 'gray', outlineWidth: '1px'}}>
                <Input
                color={themes.overlay.colors.secondary}
                fontSize={14}
                border="none"
                borderBottom="1px"
                borderRadius={0}
                p={0}
                sx={{outline: 'none'}}
                _focus={{outline: 'none'}}
                value={data.title} 
                w="xs" 
                placeholder="Type here..." 
                onChange={e=>{
                    setSt(k, "form-fields", e.target.value)
                }}
                /> <Text><Checkbox onChange={e => {
                    // setEditMode(true)
                    setSt(k, "required", e.target.checked)
                }
                }> Required
                    </Checkbox>
                </Text>
            </Box>
            <br />
            </>}
            <Input w="20em" placeholder="Type here..." disabled/>
        </Box>
    );
}

export default EditableField;