import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    Text,
    VStack
} from "@chakra-ui/react";
import { Suspense, useState } from "react";
import Spinner from "../components/Spinner";

const KycBusiness = () => {
    const [kycData, setKycData] = useState({
        iecCode: '',
        iecCertificate: '',
        marketPlace: [],
        productCategories: [],
        addressProof: '',
        addressFile: '',
        idProof: '',
        idFile: '',
        adCode: '',
        adCodeFile: '',
        lutDate: '',
        lutFile: '',
        bankNumber: '',
        bankType: '',
        accType: '',
        ifsc: ''
    });
    const [touched, setTouched] = useState({});

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setKycData({
            ...kycData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setKycData({
            ...kycData,
            [name]: files[0]
        });
        setTouched({
            ...touched,
            [name]: true
        });
    };

    const handleSelectChange = (e, name) => {
        setKycData({
            ...kycData,
            [name]: e.target.value
        });
        setTouched({
            ...touched,
            [name]: true
        });
    };

    const getBorderColor = (name) => {
        if (!touched[name]) {
            return 'gray.600';
        }
        return isValid(name) ? 'green' : 'red';
    };

    const isValid = (name) => {
        return kycData[name] !== '';
    };

    return (
        <Suspense fallback={<Spinner />}>
            <Heading as="h2" size={['md', 'lg']} marginBottom={10}>KYC Details</Heading>
            <Box
                w={['100%', '100%', '90%', '70%']}
                margin="0 auto"
                padding="6"
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="lg"
                mt={5}
            >
                <VStack spacing="4">
                    <Heading as="h4" size={['sm', 'md']} mb={5}>Essential Documents</Heading>
                    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}>
                        <InputGroup>
                            <InputLeftAddon p={0} >
                                <Select w={'100%'}
                                borderRightRadius={0}
                                    placeholder='ID Proof Type'
                                    name="idProof"
                                    value={kycData.idProof}
                                    onChange={(e) => handleSelectChange(e, "idProof")}
                                    onBlur={handleBlur}
                                    size={['md']}
                                    borderColor={getBorderColor('idProof')}
                                >
                                    <option value='Aadhar Card'>Aadhar Card</option>
                                    <option value='Driving License'>Driving License</option>
                                    <option value="PAN Card">PAN Card</option>
                                    <option value='Passport'>Passport</option>
                                </Select>
                            </InputLeftAddon>
                            < Input
                                borderRightRadius={['10', '7']}
                                p={1}
                                size={['md']}
                                name="idFile"
                                type="file"
                                onChange={handleFileChange}
                                onBlur={handleBlur}
                                borderColor={getBorderColor('idFile')}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon p={0}>
                                <Select w={'100%'}
                                borderRightRadius={0}
                                    placeholder='Address Proof'
                                    name="addressProof"
                                    value={kycData.addressProof}
                                    onChange={(e) => handleSelectChange(e, "addressProof")}
                                    onBlur={handleBlur}
                                    size={['md']}
                                    borderColor={getBorderColor('addressProof')}
                                >
                                    <option value='Aadhar Card'>Aadhar Card</option>
                                    <option value="Bank Passbook">Bank Passbook</option>
                                    <option value='Driving License'>Driving License</option>
                                    <option value='Electricity Bill'>Electricity Bill</option>
                                    <option value="Passport">Passport</option>
                                    <option value="Telephone Bill">Telephone Bill</option>
                                </Select>
                            </InputLeftAddon>

                            <Input
                                borderRightRadius={['10', '7']}
                                p={1}
                                size={['md']}
                                name="addressFile"
                                type="file"
                                onChange={handleFileChange}
                                onBlur={handleBlur}
                                borderColor={getBorderColor('addressFile')}
                            />
                        </InputGroup>
                    </Flex>

                    <Heading as="h4" size={['sm', 'md']} mt={5} mb={3}>Additional Details</Heading>
                    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}>

                        <Input
                            w={['100%', '100%', '100%', '97%']}
                            size={['md']}
                            placeholder="IEC Code"
                            name="iecCode"
                            value={kycData.iecCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            borderColor={getBorderColor('iecCode')}
                        />
                        <InputGroup>
                            <InputLeftAddon w={['50%', '50%', '50%', '50%', '25%']}>
                                <Text>IEC Certificate</Text>
                            </InputLeftAddon>
                            <Input
                                borderRightRadius={['10', '7']}
                                p={1}
                                size={'md'}
                                name="iecCertificate"
                                type="file"
                                onChange={handleFileChange}
                                onBlur={handleBlur}
                                borderColor={getBorderColor('iecCertificate')}
                            />
                        </InputGroup>

                    </Flex>
                    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}>
                        <Input
                            w={['100%', '100%', '100%', '97%']}
                            borderRadius={['10', '7']}
                            size={['md']}
                            placeholder="Ad Code"
                            name="adCode"
                            value={kycData.adCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            borderColor={getBorderColor('adCode')}
                        />
                        <InputGroup>
                            <InputLeftAddon w={['50%', '50%', '50%', '50%', '25%']} >
                                <Text >AdCode certificate</Text>
                            </InputLeftAddon>
                            <Input
                                borderRightRadius={['10', '7']}
                                p={1}
                                size={['md']}
                                name="adCodeFile"
                                type="file"
                                onChange={handleFileChange}
                                onBlur={handleBlur}
                                borderColor={getBorderColor('adCodeFile')}
                            />
                        </InputGroup>
                    </Flex>
                    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}>
                        <InputGroup>
                            <InputLeftAddon w={['50%', '50%', '50%', '50%', '25%']}>
                                <Text >LUT Expiry Date</Text>
                            </InputLeftAddon>
                            <Input
                                borderRightRadius={['10', '7']}
                                size={['md']}
                                type="date"
                                name="lutDate"
                                value={kycData.lutDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                borderColor={getBorderColor('lutDate')}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon w={['50%', '50%', '50%', '50%', '25%']}>
                                <Text >LUT Certificate</Text>
                            </InputLeftAddon>
                            <Input
                                borderRightRadius={['10', '7']}
                                p={1}
                                size={['md']}
                                name="lutFile"
                                type="file"
                                onChange={handleFileChange}
                                onBlur={handleBlur}
                                borderColor={getBorderColor('lutFile')}
                            />
                        </InputGroup>
                    </Flex>

                    <Heading as="h4" size={['sm', 'md']} mt={5} mb={3}>Bank Details</Heading>
                    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}>
                        <Select w={'100%'}
                            placeholder='Account Type'
                            name="accType"
                            value={kycData.accType}
                            onChange={(e) => handleSelectChange(e, "accType")}
                            onBlur={handleBlur}
                            size={['md']}
                            borderColor={getBorderColor('accType')}>
                            <option value="savings">Savings</option>
                            <option value="current">Current</option>
                        </Select>
                        <Select w={'100%'}
                            placeholder='Bank Type'
                            name="bankType"
                            value={kycData.bankType}
                            onChange={(e) => handleSelectChange(e, "bankType")}
                            onBlur={handleBlur}
                            size={['md']}
                            borderColor={getBorderColor('bankType')}>
                            <option value="government">Government</option>
                            <option value="private">Private</option>
                        </Select>
                    </Flex>
                    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}>
                    <Input
                            w={['100%', '100%', '100%', '97%']}
                            borderRadius={['10', '7']}
                            size={['md']}
                            placeholder="Account Number"
                            name="bankNumber"
                            value={kycData.bankNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            borderColor={getBorderColor('bankNumber')}
                        />
                        <Input
                            w={['100%', '100%', '100%', '97%']}
                            borderRadius={['10', '7']}
                            size={['md']}
                            placeholder="IFSC Code"
                            name="ifsc"
                            value={kycData.ifsc}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            borderColor={getBorderColor('ifsc')}
                        />
                    </Flex>
                </VStack>
                <Button colorScheme="teal" onClick={() => console.log(kycData)} mt={10}> Submit</Button>
            </Box>

        </Suspense>
    );
};

export default KycBusiness;
