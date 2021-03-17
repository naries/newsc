import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { Input } from "@chakra-ui/input"
import { DrawerContent, DrawerCloseButton, DrawerHeader, DrawerFooter, DrawerBody, DrawerOverlay} from "@chakra-ui/modal"
import { Drawer } from "@chakra-ui/modal"
import React, { useContext, useState } from 'react'
import { Text } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { NumberInput } from "@chakra-ui/number-input"
import { NumberInputField } from "@chakra-ui/number-input"
import { NumberInputStepper } from "@chakra-ui/number-input"
import { NumberIncrementStepper } from "@chakra-ui/number-input"
import { NumberDecrementStepper } from "@chakra-ui/number-input"
import { Slider, SliderThumb } from "@chakra-ui/slider"
import { SliderTrack } from "@chakra-ui/slider"
import { SliderFilledTrack } from "@chakra-ui/slider"
import { Checkbox } from "@chakra-ui/checkbox"
import MyFbButton from "./MyFbButton"
import { FaMarker, FaPlus } from "react-icons/fa"
import { DeleteIcon } from "@chakra-ui/icons"
import { Divider } from "@chakra-ui/layout"
import { roles } from "../lib"
import { RiAddFill } from "react-icons/ri"
import { AgentStatus } from '../lib'
import { Textarea } from "@chakra-ui/textarea"
import { ThemedContext } from "../assets/themeToggle"

export default function DrawerExample({data, which, type}) {
    const themes = useContext(ThemedContext)
    const whichx = which || "default"
    const typex = type || "default"

    const product = ["Option 1", "Option 2", "Option 3"]
    const duration = ["Bi-Weekly", "Tri-Weekly", "Monthly"]

    const Categories = [
      "Fashion", "Jewelries", "Electronics"
    ]
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [value, setValue] = React.useState(500)
    const [stl, setStl] = useState({...data})

    const handleChange = value => setStl({...stl, cost: value})
    const handleUserChange = value => setStl({...stl, Commission: value})

    const handleStockChange = value => setStl({...stl, quantity: value})


    const btnRef = React.useRef()
    return (
      <>
        <MyFbButton size="sm" ref={btnRef} leftIcon={typex==="new"? <RiAddFill /> : <FaMarker />} onClick={onOpen}>
            {whichx === "user" && type==="new" ? "Add New User"
            : whichx === "agent" && type==="new" ? "Add New Agent"
            : whichx === "outgoing_stock" && type==="new" ? "Add Outgoing stock" 
            : whichx==="expenses" && type==="new" ? "Add New Expenses"
            : whichx==="expensesCategory" && type==="new" ? "Add Expenses Category"
            : "Edit"}
        </MyFbButton>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          >
          <DrawerOverlay>
            <DrawerContent
              bgGradient={`linear(to-tr, ${themes.overlay.bg.first} 5%, ${themes.overlay.bg.second})`}>
              <DrawerCloseButton />
              <DrawerHeader>{whichx === "default" ? stl.product : whichx === "user" ? "Edit" : whichx==="outgoing_stock" ? "Edit Stock Information"  : ""}</DrawerHeader>
  
              <DrawerBody>
                {whichx === "default" || whichx === "product" && <>
                <Box py={2}>
                  <Text color={themes.overlay.colors.primary} fontSize={14}>Country</Text>
                  <Input color={themes.overlay.colors.secondary} value={stl.country} placeholder="Type here..." onChange={e => setStl({...stl, country :e.target.value})} />
                </Box>

                <Box py={2}>
                  <Text color={themes.overlay.colors.primary} fontSize={14}>Product</Text>
                  <Select color={themes.overlay.colors.secondary} background={themes.overlay.bg.first} onChange={e => setStl({...stl, product: e.target.value})}>
                    {product.map((prod, i) => <option key={i} value={prod}>{prod}</option>)}
                  </Select>
                </Box>

                <Box py={2}>
                  <Text color={themes.overlay.colors.primary} fontSize={14}>Category</Text>
                  <Select color={themes.overlay.colors.secondary} background={themes.overlay.bg.first} onChange={e => setStl({...stl, category: e.target.value})}>
                    {Categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
                  </Select>
                </Box>

                <Box py={2}>
                  <Text color={themes.overlay.colors.primary} fontSize={14}>Cost</Text>
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
                  <Select color={themes.overlay.colors.secondary} background={themes.overlay.bg.first} onChange={e => setStl({...stl, duration: e.target.value})}>
                    {duration.map((dur, i) => <option key={i} value={dur}>{dur}</option>)}
                  </Select>
                </Box>}
                <Divider />
                {typeof stl.offer === "object" && <>
                   <Box py={2} px={2} sx={{fontWeight: 'bold'}}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Offer</Text>
                    </Box>
                  <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Description</Text>
                      <Input color={themes.overlay.colors.secondary} value={stl.offer.title} placeholder="Type here..." onChange={e=>{
                        setStl({...stl, Offer: {...stl.offer, title: e.target.value}})
                      }} />
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Cost</Text>
                      <Input color={themes.overlay.colors.secondary} value={stl.offer.cost||''} placeholder="Cost" onChange={e=>{
                        setStl({...stl, Offer: {...stl.offer, cost: e.target.value}})
                      }} />
                  </Box>
                </>}
                <Divider />
                <Box py={2} px={2}>
                  <Text color={themes.overlay.colors.primary} fontSize={14} sx={{fontWeight: 'bold'}}>Variation</Text>
                </Box>
                {typeof stl.variation === "object" && stl.variation.map((varr, i) => {
                  var varying = [...stl.variation]
                  var disableProperty = true
                  return <>
                    <Box py={2} key={i}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Varying Property</Text>
                      <Input color={themes.overlay.colors.secondary} key={i} value={varr.title} placeholder="Type here..." onChange={e=>{
                        varying[i]['title'] = e.target.value
                        setStl({...stl, variation: [...varying]})
                      }} />
                      {varr.options.map((op, j) => {
                        
                        disableProperty = op.title==="Property" || op.cost==="N cost" ? true: false
                        
                        return <>
                        <Input color={themes.overlay.colors.secondary} key={j} size="sm" value={op.title} mr={1} my={1} ml="10px" w="100px" onChange={e=>{
                          varying[i]['options'][j]['title'] = e.target.value
                          setStl({...stl, variation: [...varying]})
                        }}/>
                        <Input color={themes.overlay.colors.secondary} key={j} size="sm" value={op.cost} my={1} ml="10px" w="100px" onChange={e=>{
                          varying[i]['options'][j]['cost'] = e.target.value
                          setStl({...stl, variation: [...varying]})
                        }}/>
                        <Box ml={2} sx={{display: 'inline', cursor: "pointer"}} _hover={{color: '#888'}} onClick={() => {
                          varying[i].options.splice(j, 1)
                          setStl({...stl, variation: [...varying]})
                        }}><DeleteIcon color={themes.overlay.colors.secondary} /></Box><br/>
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
                </>}

                {/* user */}
                {whichx === "user" && <>
                  <Box>
                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Name</Text>
                      <Input color={themes.overlay.colors.secondary} value={stl.Name} placeholder="Type here..." onChange={e => setStl({...stl, Name :e.target.value})} />
                    </Box>

                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Role</Text>
                      <Select color={themes.overlay.colors.secondary} background={themes.overlay.bg.first} onChange={e => setStl({...stl, Role: e.target.value})}>
                        {roles.map((role, i) => <option key={i} value={role}>{role}</option>)}
                      </Select>
                    </Box>
                  
                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Commision</Text>
                      <Slider flex="1" value={stl.Commission} onChange={handleUserChange} max={100} step="1">
                        <SliderTrack>
                          <SliderFilledTrack />
                        </SliderTrack>
                          <SliderThumb fontSize="14px" p={4}>{stl.Commission}%</SliderThumb>
                      </Slider>
                    </Box>
                  </Box>

                  <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Password</Text>
                      <Input color={themes.overlay.colors.secondary} value="Password" placeholder="Type here..." onChange={() => {}} />
                    </Box>

                </>}
                {whichx === "agent" && <>
                  <Box>
                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Agent</Text>
                      <Input color={themes.overlay.colors.secondary} value={stl.agent} placeholder="Type here..." onChange={e => setStl({...stl, date :e.target.value})} />
                    </Box>

                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>State</Text>
                      <Input color={themes.overlay.colors.secondary} value={stl.state} placeholder="Type here..." onChange={e => setStl({...stl, state :e.target.value})} />
                    </Box>

                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Address</Text>
                      <Input color={themes.overlay.colors.secondary} value={stl.address} placeholder="Type here..." onChange={e => setStl({...stl, address :e.target.value})} />
                    </Box>

                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Phone</Text>
                      <Input color={themes.overlay.colors.secondary} value={stl.phone} placeholder="Type here..." onChange={e => setStl({...stl, phone :e.target.value})} />
                    </Box>
                    
                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>status</Text>
                      <Select color={themes.overlay.colors.secondary} background={themes.overlay.bg.first} onChange={e => setStl({...stl, status: e.target.value})}>
                        {AgentStatus.map((stat, i) => <option key={i} value={stat}>{stat}</option>)}
                      </Select>
                    </Box>
                  </Box>
                </>}

                {whichx === "outgoing_stock" && <>
                  <Box>
                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Product</Text>
                      <Select color={themes.overlay.colors.secondary} background={themes.overlay.bg.first} onChange={e => setStl({...stl, product: e.target.value})}>
                        {product.map((prod, i) => <option key={i} value={prod}>{prod}</option>)}
                      </Select>
                    </Box>

                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Quantity</Text>
                      <Slider flex="1" value={stl.quantity} onChange={handleStockChange} max={100} step="1">
                        <SliderTrack>
                          <SliderFilledTrack />
                        </SliderTrack>
                          <SliderThumb fontSize="14px" p={4}>{stl.quantity}</SliderThumb>
                      </Slider>
                    </Box>

                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Agent</Text>
                      <Select color={themes.overlay.colors.secondary} background={themes.overlay.bg.first} onChange={e => setStl({...stl, Agent: e.target.value})}>
                        {product.map((prod, i) => <option key={i} value={prod}>{prod}</option>)}
                      </Select>
                    </Box>
                  </Box>
                </>}

                {whichx === "sms" && <>
                  <Box>
                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Message</Text>
                      <Textarea resize="none" h="md">{data.message}</Textarea>
                    </Box>
                  </Box>
                </>}

                {whichx === "expensesCategory" && <>
                  <Box>
                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>New Category</Text>
                      <Input color={themes.overlay.colors.secondary} value={stl.agent} placeholder="Type here..." onChange={e => setStl({...stl, date :e.target.value})} />
                    </Box>
                  </Box>
                </>}

                {whichx === "expenses" && <>
                  <Box>
                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Date</Text>
                      <Input color={themes.overlay.colors.secondary} type="date" value={stl.agent} placeholder="Type here..." onChange={e => setStl({...stl, date :e.target.value})} />
                    </Box>

                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Expenses</Text>
                      <Input color={themes.overlay.colors.secondary} value={stl.expenses} placeholder="Type here..." onChange={e => setStl({...stl, expenses :e.target.value})} />
                    </Box>

                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Sources</Text>
                      <Input color={themes.overlay.colors.secondary} value={stl.sources} placeholder="Type here..." onChange={e => setStl({...stl, sources :e.target.value})} />
                    </Box>
                    
                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Description</Text>
                      <Input color={themes.overlay.colors.secondary} value={stl.description} placeholder="Type here..." onChange={e => setStl({...stl, description :e.target.value})} />
                    </Box>

                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Amount</Text>
                      <Input color={themes.overlay.colors.secondary} value={stl.amount} placeholder="Type here..." onChange={e => setStl({...stl, amount :e.target.value})} />
                    </Box>
                  </Box>
                </>}

                {whichx === "gateway" && <>
                  <Box>
                    <Box py={2}>
                      <Text color={themes.overlay.colors.primary} fontSize={14}>Information</Text>
                      {console.log(data)}
                      <Textarea resize="none" h="md">{data.information}</Textarea>
                    </Box>
                  </Box>
                </>}

              </DrawerBody>
  
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button color="blue" onClick={onClose}>Update</Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }