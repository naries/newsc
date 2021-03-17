import { Box } from "@chakra-ui/layout";
import DrawerExample from "../components/DrawerExample";
import OutgoingStockTable from "../components/OutgoingStockTable";
import { outgoingStockRows } from '../lib'

const OutgoingStock = () => {
    return (<>
    <Box>
        <DrawerExample which="outgoing_stock" data={outgoingStockRows} type="new" />
    </Box>
    <Box w="800px">
        <OutgoingStockTable />
    </Box>
    </>);
}

export default OutgoingStock;