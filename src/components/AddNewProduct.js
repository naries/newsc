import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { Input } from "@chakra-ui/input"
import { DrawerContent, DrawerCloseButton, DrawerHeader, DrawerFooter, DrawerBody, DrawerOverlay} from "@chakra-ui/modal"
import { Drawer } from "@chakra-ui/modal"
import { FiEdit2 } from 'react-icons/fi'
import React, { useState } from 'react'
import { Text } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { NumberInput } from "@chakra-ui/number-input"
import { NumberInputField } from "@chakra-ui/number-input"
import { NumberInputStepper } from "@chakra-ui/number-input"
import { NumberIncrementStepper } from "@chakra-ui/number-input"
import { NumberDecrementStepper } from "@chakra-ui/number-input"
import { Slider } from "@chakra-ui/slider"
import { SliderTrack } from "@chakra-ui/slider"
import { SliderFilledTrack } from "@chakra-ui/slider"
import { Checkbox } from "@chakra-ui/checkbox"
import MyFbButton from "./MyFbButton"
import { FaPlus } from "react-icons/fa"
import { DeleteIcon } from "@chakra-ui/icons"
import { Divider } from "@chakra-ui/layout"
import { RiAddFill } from "react-icons/ri"

export default function AddNewProduct() {
    const product = ["Option 1", "Option 2", "Option 3"]
    const duration = ["Bi-Weekly", "Tri-Weekly", "Monthly"]

    const Categories = [
      "Fashion", "Jewelries", "Electronics"
    ]
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [value, setValue] = React.useState(500)
    const [stl, setStl] = useState({
      country: "",
      product: '',
      category: '',
      cost: 100,
      recurring: "No",
      duration: "",
      variation: [{
        title: '',
        options: [{
          title: '',
          cost: 'N 100'
        }]
      }], 
      offer: {title: '', cost: ''}
    })

    const handleChange = (value) => setStl({...stl, cost: value})

    const btnRef = React.useRef()
    return (
      <>
        <MyFbButton
          onClick={onOpen} ref={btnRef} leftIcon={<RiAddFill />}>
              Add New Product
        </MyFbButton>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          >
          <DrawerOverlay>
            <DrawerContent
              bgGradient="linear(to-tr, #f5f5f5 5%, white)">
              <DrawerCloseButton />
              <DrawerHeader>{stl.product}</DrawerHeader>
  
              <DrawerBody>
                <Box py={2}>
                  <Text color="#666" fontSize={14}>Country</Text>
                  <Input value={stl.country} placeholder="Type here..." onChange={e => setStl({...stl, country :e.target.value})} />
                </Box>

                <Box py={2}>
                  <Text color="#666" fontSize={14}>Product</Text>
                  <Select onChange={e => setStl({...stl, product: e.target.value})}>
                    {product.map((prod, i) => <option key={i} value={prod}>{prod}</option>)}
                  </Select>
                </Box>

                <Box py={2}>
                  <Text color="#666" fontSize={14}>Category</Text>
                  <Select onChange={e => setStl({...stl, category: e.target.value})}>
                    {Categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
                  </Select>
                </Box>

                <Box py={2}>
                  <Text color="#666" fontSize={14}>Cost</Text>
                  <Box>
                    <NumberInput value={stl.cost} onChange={handleChange}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <Slider flex="1" focusThumbOnChange={false} value={stl.cost} onChange={handleChange} max={100000} step="100">
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                    </Slider>
                  </Box>
                </Box>

                <Box py={2} fontSize={14}>
                  <Checkbox colorScheme="green" defaultIsChecked={stl.reccurring === "Yes" ? true: false} onChange={e => setStl({...stl, recurring: e.target.checked? "Yes": "No"})}>
                    Recurring
                  </Checkbox>
                </Box>

                {stl.recurring === "Yes" && <Box py={2}>
                  <Select onChange={e => setStl({...stl, duration: e.target.value})}>
                    {duration.map((dur, i) => <option key={i} value={dur}>{dur}</option>)}
                  </Select>
                </Box>}
                <Divider />
                {typeof stl.offer === "object" && <>
                   <Box py={2} px={2} sx={{fontWeight: 'bold'}}>
                      <Text color="#666" fontSize={14}>Offer</Text>
                    </Box>
                  <Box py={2}>
                      <Text color="#666" fontSize={14}>Description</Text>
                      <Input value={stl.offer.title} placeholder="Type here..." onChange={e=>{
                        console.log(stl.offer)
                        setStl({...stl, offer: {...stl.offer, title: e.target.value}})
                      }} />
                      <Text color="#666" fontSize={14}>Cost</Text>
                      <Input value={stl.offer.cost||''} placeholder="Cost" onChange={e=>{
                        setStl({...stl, offer: {...stl.offer, cost: e.target.value}})
                      }} />
                  </Box>
                </>}
                <Divider />
                <Box py={2} px={2}>
                  <Text color="#666" fontSize={14} sx={{fontWeight: 'bold'}}>Variation</Text>
                </Box>
                {typeof stl.variation === "object" && stl.variation.map((varr, i) => {
                  var varying = [...stl.variation]
                  var disableProperty = true
                  return <>
                    <Box py={2} key={i}>
                      <Text color="#666" fontSize={14}>Varying Property</Text>
                      <Input key={i} value={varr.title} placeholder="Type here..." onChange={e=>{
                        varying[i]['title'] = e.target.value
                        setStl({...stl, variation: [...varying]})
                      }} />
                      {varr.options.map((op, j) => {
                        
                        disableProperty = op.title==="Property" || op.cost==="N cost" ? true: false

                        return <>
                        <Input key={j} size="sm" value={op.title} mr={1} my={1} ml="10px" w="100px" onChange={e=>{
                          varying[i]['options'][j]['title'] = e.target.value
                          setStl({...stl, variation: [...varying]})
                        }}/>
                        <Input key={j} size="sm" value={op.cost} my={1} ml="10px" w="100px" onChange={e=>{
                          varying[i]['options'][j]['cost'] = e.target.value
                          setStl({...stl, variation: [...varying]})
                        }}/>
                        <Box ml={2} sx={{display: 'inline', cursor: "pointer"}} _hover={{color: '#888'}} onClick={() => {
                          varying[i].options.splice(j, 1)
                          setStl({...stl, variation: [...varying]})
                        }}><DeleteIcon /></Box><br/>
                      </>})}
                        {!disableProperty && <MyFbButton leftIcon={<FaPlus />} onClick={()=> {
                          varying[i].options[varying[i].options.length] = {
                            title: 'Property',
                            cost: 'N cost'
                          }
                          setStl({...stl, variation: [...varying]})
                        }}>Add Property</MyFbButton>}
                        {disableProperty && <Box color="red.600" fontSize="sm">- Some property(s) are not set correctly.</Box>}
                    </Box>
                </>})}

                <MyFbButton leftIcon={<FaPlus />} onClick={() => setStl({...stl, variation: [...stl.variation, {title: "Add a variation", options: [{title: 'Add variation name', cost:"N cost"}]}]})}>Add Variation</MyFbButton>

              </DrawerBody>
  
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                {stl.country !== "" && stl.products !=="" && stl.category!=="" && stl.cost!=="" &&<Button color="blue" onClick={onClose}>Save</Button>}
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }