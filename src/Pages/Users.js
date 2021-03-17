import { Box } from "@chakra-ui/layout"
import { UserTable } from "../components"
import DrawerExample from "../components/DrawerExample";
import { userRow } from "../lib";

const Users = () => {
    return (
        <>
            <Box>
                <DrawerExample which="user" data={userRow} type="new" />
            </Box>
            <Box w="800px">
                <UserTable/> 
            </Box>
        </>
    );
}

export default Users