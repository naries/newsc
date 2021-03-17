import { Center, Divider, Heading, HStack, Spacer, Wrap, WrapItem } from "@chakra-ui/layout";
import { Box, Flex } from "@chakra-ui/layout"
import { StatGroup } from "@chakra-ui/stat";
import { StatArrow } from "@chakra-ui/stat";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";

const summary = [
    {title: "Total Revenues", value: 23500, type:"money", arrow:"increase"},
    {title: "Total Orders", value: 50, type:"number", arrow:"decrease"},
    {title: "Expected Revenue", value: 3500, type:"money", arrow:"increase"},
    {title: "Orders (This Week)", value: 20, type:"Number", arrow:"increase"},
]

const dSummary = [
    {title: "This Week", list: [
        {title: "Confirmed", value: 50, arrow:"increase"},
        {title: "Delivered", value: 50, arrow:"increase"},
        {title: "Awaiting", value: 3, arrow:"increase"},
        {title: "Pending", value: 2, arrow:"increase"},
        {title: "Shipped", value: 23, arrow:"increase"},
        {title: "Cancelled", value: 2, arrow:"increase"},
        {title: "Returned", value: 5, arrow:"increase"},
    ]},
    {title: "Last Week", list: [
        {title: "Confirmed", value: 50, arrow:"increase"},
        {title: "Delivered", value: 50, arrow:"increase"},
        {title: "Awaiting", value: 3, arrow:"increase"},
        {title: "Pending", value: 2, arrow:"increase"},
        {title: "Shipped", value: 23, arrow:"increase"},
        {title: "Cancelled", value: 2, arrow:"increase"},
        {title: "Returned", value: 5, arrow:"increase"},
    ]}
]

const bestSellingProduct = [
    {name: "Spy Eye Glasses", value: 50, arrow:"decrease"},
    {name: "Spy Eye Glasses", value: 50, arrow:"decrease"},
    {name: "Spy Eye Glasses", value: 50, arrow:"decrease"},
    {name: "Spy Eye Glasses", value: 50, arrow:"decrease"},
    {name: "Spy Eye Glasses", value: 50, arrow:"decrease"},

]

const responsiveDirection = ['column', 'column', 'column', 'row']

const Home = () => {
    return (
        <>
            <Box w="100%" mb={4}>
                    <StatGroup direction={responsiveDirection}>
                        {summary.map((summ, i) => <Stat key={i}>
                            <StatLabel>{summ.title}</StatLabel>
                            <StatNumber>{summ.type=== 'money' ? "N ": ''}{summ.value}</StatNumber>
                            <StatHelpText>
                            <StatArrow type={summ.arrow} />
                                23.36%
                            </StatHelpText>
                        </Stat>)}
                    </StatGroup>
                </Box>
                <Divider />

                <Wrap w="100%" mt={4} direction={responsiveDirection} justify="center" spacing="20px">
                    {dSummary.map((dsumm, i)=><><Box key={i}>
                        <Box py={4} px={4}>
                            <Heading as="h6" size="sm">
                                {dsumm.title}
                            </Heading>
                        </Box>
                        <Divider/>
                        {dsumm.list.map((ds, i) => <Flex key={i} py={3} px={4} w="360px">
                            <Box w="80px">{ds.title}</Box>
                            <Spacer />
                            <Box color="pink.600">{ds.value}</Box>
                            <Spacer />
                            <Stat>
                                <StatHelpText>
                                <StatArrow type={ds.arrow} />
                                    23.36%
                                </StatHelpText>
                            </Stat>
                        </Flex>
                        )}
                        {/* {i < dSummary.length && <Spacer/>} */}
                    </Box>
                    </>)}
                    <WrapItem>
                        <Box w="400px">
                            <Box py={4} px={4}>
                                <Heading as="h6" size="sm">
                                    Best Selling Products
                                </Heading>
                            </Box>
                            <Divider/>
                            <Flex py={3} px={4} w="100%">
                                <Box w="150px">Product</Box>
                                <Spacer />
                                <Box>Ordered</Box>
                                <Spacer />
                                Order Rate
                            </Flex>
                            <Divider />
                            {bestSellingProduct.map((bs, i) => <Flex key={i} py={2} px={4} w="100%">
                                <Box w="150px">{bs.name}</Box>
                                <Spacer />
                                <Box color="pink.600">{bs.value}</Box>
                                <Spacer />
                                <Stat>
                                    <StatHelpText>
                                    <StatArrow type={bs.arrow} />
                                        23.36%
                                    </StatHelpText>
                                </Stat>
                            </Flex>
                            )}
                        </Box>
                    </WrapItem>
                </Wrap>
        </>
    );
}

export default Home;