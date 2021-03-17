import { Checkbox } from "@chakra-ui/checkbox";
import { Image } from "@chakra-ui/image";
import { Box, Center, Text } from "@chakra-ui/layout";
import { Input } from "@material-ui/core";
import { useRef, useState } from "react";
import { FormDrawer } from ".";

const Bump = ({data, setSt}) => {
    const {pretext, benefit, product, pick, img} = data
    const [editmode, setEditMode] = useState({
        product: false,
        pretext: false,
        benefit: false
    })
    const btnRef = useRef()
    return (
        <Box>
            <Box border="2px" p={4} borderColor="#ccc" mb={2} borderRadius="4px">
                <Box>
                    <Box ref={btnRef}>
                        {!editmode.product && <Box onClick={()=>setEditMode({...editmode, product: true})}>
                            <Text sx={{fontWeight:'semibold', fontSize:'14px'}}>{product}</Text>
                        </Box>}
                        
                        {editmode.product && <>
                            <Text sx={{fontWeight:'semibold', fontSize:'14px'}}>Choosing Product...</Text>
                            <FormDrawer title="Choose Product" r={btnRef} hideDrawer={()=>setEditMode({...editmode, product: false})}/>
                        </>}
                    </Box>

                    <Box>
                        {!editmode.pretext &&<Box onClick={()=>setEditMode({...editmode, pretext: true})}>
                            <Text sx={{fontWeight:"light", fontSize: '12px'}}>{pretext}</Text>
                        </Box>}
                        {editmode.pretext &&<Box>
                            <Input value={pretext} autoFocus onBlur={()=>setEditMode({...editmode, pretext: false})} onChange={e => setSt(null, "bump", {pretext: e.target.value})}/>
                        </Box>}
                    </Box>

                    <Box>
                        {!editmode.benefit &&<Box onClick={()=>setEditMode({...editmode, benefit: true})}>
                            <Text sx={{fontWeight:"light", fontSize: '14px'}}>{benefit}</Text>
                        </Box>}
                        {editmode.benefit &&<Box>
                            <Input value={benefit} autoFocus onBlur={()=>setEditMode({...editmode, benefit: false})} onChange={e => setSt(null, "bump", {benefit: e.target.value})}/>
                        </Box>}
                    </Box>


                <Box borderRadius="4px" mt={2} bg="#d9d9d9">
                    <Center>
                        <Image src="https://via.placeholder.com/150" />
                    </Center>
                </Box>

                <Box mt={2}>
                    <Checkbox defaultIsChecked={false}>
                        <Text fontSize="14px">Add Item to Sale</Text>
                    </Checkbox>
                </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Bump;