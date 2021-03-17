import { Box } from "@chakra-ui/layout";
import { RiAddFill } from "react-icons/ri";
import { ExpensesTable, MyFbButton } from "../components";
import DrawerExample from "../components/DrawerExample";
import { ExpenseRow } from '../lib'

const Expenses = () => {
    return (
        <Box>
            <Box>
                <DrawerExample data={ExpenseRow} which="expenses" type="new" />
            </Box>
            <Box my="4">
                <DrawerExample data={{}} which="expensesCategory" type="new" />
            </Box>
            <Box w="800px">
                <ExpensesTable />
            </Box>
        </Box>
    );
}

export default Expenses;