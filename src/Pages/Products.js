import { Box } from "@chakra-ui/layout"
import { AddNewProduct, CollapsibleTable } from "../components";

const Products = () => {
    return (
        <>
            <Box>
                <AddNewProduct />
            </Box>
            <Box w="800px">
                <CollapsibleTable/>
            </Box>
        </>
    );
}

export default Products