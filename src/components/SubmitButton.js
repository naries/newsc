import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, HStack } from "@chakra-ui/layout";
import { useState } from "react";

const SubmitButton = ({data, setSt}) => {
    const {background, textColor, fontSize, text} = data
    const [editMode, setEditMode] = useState(false)
    console.log(fontSize)
    return (
        <>
        <Box>
            {!editMode && <Button 
                bg={background||"pink.800"}
                color={textColor||'white'}
                fontSize={fontSize||14}
                onFocus={() => setEditMode(true)}
            >
                {text||"Buy Now"}
            </Button>}
            {editMode && <Box pos='relative' minW="150px" w={`${40 + (text.length * 10)}px`}>
                <Box bg={background||"pink.800"} w="100px" p={0} >
                    <Input value={text} w="80px" autoFocus color={textColor||'white'} m={0} minW="110px" w={`${text.length * 10}px`} onBlur={e=>setEditMode(false)} fontSize={fontSize||14} onChange={e => {
                        setSt(null, "submit", {text: e.target.value})
                    }}/>
                </Box>
            </Box>}
        </Box>
        </>
    );
}

export default SubmitButton;