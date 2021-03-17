import { Box } from "@chakra-ui/layout";
import AgentTable from "../components/AgentTable";
import DrawerExample from "../components/DrawerExample";
import { AgentRows } from "../lib";

const Agents = () => (<>
    <Box>
        <DrawerExample data={AgentRows} which="agent" type="new" />
    </Box>
    <Box w="800px">
        <AgentTable/>
    </Box>
</>);

export default Agents;