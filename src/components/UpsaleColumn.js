import { Box, Text } from "@chakra-ui/layout";
import { useRef, useState } from "react";
import { FormDrawer } from ".";

const UpsaleColumn = () => {
    const btnRef = useRef()
    const [editMode, setEditMode] = useState(false)
    return (<>
        <Box 
            border="1px"
            mb={1} 
            borderColor="#009900"
            bg="rgba(0, 200, 0, .2)" 
            borderRadius="5px" 
            _hover={{bg: 'rgba(0, 150, 0, .5)'}} 
            p={4}
            onClick={()=>setEditMode(true)}>
                <Box>
                    {!editMode && <Text fontSize="14px" color="#444">
                        Choose upsale Product
                    </Text>}
                    {editMode && <Text fontSize="14px" color="#444">
                        Choosing a product...
                    </Text>}
                    {!editMode && <Text fontSize="16px" color="#333" sx={{cursor: "pointer", fontWeight: 'semibold'}}>
                        Spy Eye Glasses
                    </Text>}
                </Box>
            {editMode && <FormDrawer title="Choose Product" r={btnRef} hideDrawer={()=>setEditMode(false)}/>}
        </Box>
        <Box mb={4}>
            <Text color="green" fontSize="12">- This section does not show up in form</Text>
        </Box>
        </>
    );
}

export default UpsaleColumn;