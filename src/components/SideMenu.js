import { Box } from '@chakra-ui/layout';
import { SlideFade } from '@chakra-ui/transition';
import React, { useContext, useState } from 'react'
import { HiHome } from 'react-icons/hi';
import { BsFillBarChartFill, BsBagFill, BsChatDotsFill, BsFillPeopleFill, BsGearFill, BsFillEggFill } from 'react-icons/bs'
import { MdShoppingCart } from 'react-icons/md'
import { RiMoneyDollarCircleFill, RiBuilding2Fill } from 'react-icons/ri'
import { FaIndustry, FaWpforms, FaChevronRight } from 'react-icons/fa'
import MenuItemContent from './MenuItemContent';
import { ThemedContext } from '../assets/themeToggle';

const menuContent = [
    {title: 'Dashboard', link: '/', icon: HiHome},
    {title: 'Products', link: '/products', icon: BsBagFill},
    {title: 'Forms', link: '/forms', icon: FaWpforms},
    {title: 'Orders', link: '/orders', icon: MdShoppingCart},
    {title: 'Users', link: '/users', icon: BsFillPeopleFill},
    {title: 'Agents', link: '/agents', icon: FaIndustry},
    {title: 'Outgoing Stock', link: '/outgoing_stock', icon: FaChevronRight},
    {title: 'Expenses', link: 'expenses', icon: RiMoneyDollarCircleFill},
    {title: 'SMS Templates', link: '/sms_templating', icon: BsChatDotsFill},
    {title: 'Payment Gateways', link: '/payment_gateways', icon: BsFillEggFill},
    {title: 'Store Settings', link: '/store_settings', icon: BsGearFill},
    {title: 'Report', link: '/report', icon: BsFillBarChartFill},

]

const SideMenu = ({menu, setMenu, showMenu}) => {
    const themes = useContext(ThemedContext)
    const [display, setDisplay] = useState(false)
    setTimeout(()=>setDisplay(true), 2000)
    return (<>
        {showMenu && <SlideFade in={display} offsetX="-100px">
            <Box pos={["unset", menu ? "fixed" : "unset" , "unset", "fixed"]} 
                bg = {themes.background}
                display={["none", menu? "block": "none" , "block"]} 
                zIndex={10} 
                w={["none", "none", "80px", '280px']} 
                left="0" right={menu ? 0: "unset"} 
                top={menu ? 0: "80px"}
                bottom={menu? 0: "40px"} sx={{overflowY: 'auto'}}>
                <Box>
                    {menuContent.map((content, i) => <>
                        <MenuItemContent setMenu={setMenu} key = {i} content={content} timeout={2200 + (50 * (i+1))} />
                    </>)}
                    <Box onClick={setMenu} px={4} py={2} fontSize="14px" display={["block", "block", "none"]}>Close</Box>
                </Box>
            </Box>
        </SlideFade>}
    </>);
}

export default SideMenu;