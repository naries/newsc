import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useState } from "react";
import { OrderBumpReport } from "../components";
import MainReport from "../components/MainReport";

const Report = () => {
    const options = [
        "This week",
        "Last week",
        "This month",
        "Last month",
        "Last two months",
        "Last six months",
        "This year",
        "Last year"
    ]

    const expenses = [
        {title: "Paid the plumber", cost: "N 3000"},
        {title: "TOTAL", cost: 'N 3000'}
    ]

    const revenue = [
        {title: "Total Delivered", cost: "N 3000"},
        {title: "Total Delivery Fee", cost: 'N 3000'},
        {title: "Total Product Cost", cost: 'N 3000'},
        {title: "Total Free Gift Cost", cost: 'N 3000'},
        {title: "Total Expenses", cost: 'N 3000'},
        {title: "Net Profit", cost: 'N 3000'}

    ]
    const [optionsActive, setOptionsActive] = useState(0)
    return (<>
        <Box>
            <Select onChange={e => setOptionsActive(e.target.value)}>
                {options.map((op, i) => <option key={i} value={i}>{op}</option>)}
            </Select>
        </Box>
        <Box>
            <Box py="4" fontSize="16px" fontWeight="bold" borderBottom="1px" borderBottomColor="gray.300">
                Report ({options[optionsActive]})
            </Box>
            <Box py="2" fontSize="16px" color="gray.500" borderBottom="1px" borderBottomColor="gray.200">
                Main Products
            </Box>
        </Box>
        <Box w="800px">
            <MainReport />
        </Box>

        <Box>
            <Box py="2" fontSize="16px" color="gray.500" borderBottom="1px" borderBottomColor="gray.200">
                Order Bump Products
            </Box>
        </Box>
        <Box w="800px">
            <OrderBumpReport />
        </Box>

        <Box>
            <Box py="2" fontSize="16px" color="gray.500" borderBottom="1px" borderBottomColor="gray.200">
                Upsale
            </Box>
        </Box>
        <Box w="800px">
            <OrderBumpReport />
        </Box>

        <Box>
            <Box py="2" fontSize="16px" color="gray.500" borderBottom="1px" borderBottomColor="gray.200">
                Expenses
            </Box>
        </Box>
        <Box px="10">
            {expenses.map((exp, i) => <Flex key={i} pl="4" py="4">
                <Box fontWeight="bold">
                    {exp.title}
                </Box>
                <Spacer/>
                <Box>
                    {exp.cost}
                </Box>
            </Flex>)}
        </Box>

        <Box>
            <Box py="2" fontSize="16px" color="gray.500" borderBottom="1px" borderBottomColor="gray.200">
                Revenues
            </Box>
        </Box>
        <Box px="10">
            {revenue.map((exp, i) => <Flex key={i} pl="4" py="4">
                <Box fontWeight="bold">
                    {exp.title}
                </Box>
                <Spacer/>
                <Box>
                    {exp.cost}
                </Box>
            </Flex>)}
        </Box>
    </>);
}

export default Report;