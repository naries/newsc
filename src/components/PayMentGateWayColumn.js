import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import paypalLogo from '../assets/paystack-logo-vector.png'
import transferLogo from '../assets/banktransfer.png'
import flutterwaveLogo from '../assets/flutterwave-logo-vector.png'

const PayMentGateWayColumn = () => {
    return (
        <Box>
            <Box>
                <CheckboxGroup colorScheme="green" defaultValue={["paypal", "bank"]}>
                    <Box>
                        <Checkbox value="paypal">
                            <Image src={paypalLogo} w={40}/>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value="flutterwave">
                            <Image src={flutterwaveLogo} w={40}/>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value="bank">
                            <Image src={transferLogo} w={40}/>
                        </Checkbox>
                    </Box>
                </CheckboxGroup>
            </Box>
        </Box>
    );
}

export default PayMentGateWayColumn;