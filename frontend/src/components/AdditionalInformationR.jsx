import {
    VStack,
    Flex,
    Input,
    Button,
    Spacer,
    Heading,
    InputGroup,
    InputRightElement,
    Spinner,
    useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const AdditionalInformation = ({ formData, handleChange, handleBlur, prevStage, onsubmit, getBorderColor, setFormData }) => {
    const [showPassword, setShowPassword] = useState({ password: false, cpassword: false });
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleTogglePasswordVisibility = (field) => {
        setShowPassword((prevState) => ({ ...prevState, [field]: !prevState[field] }));
    };

    const fetchAddressDetails = async (pincode) => {
        try {
            setLoading(true);
            const response = await fetch(`${import.meta.env.VITE_POSTAL_INFO_API}/${pincode}`);
            const data = await response.json();
            if (data[0].Status === 'Success') {
                const { PostOffice } = data[0];
                const city = PostOffice[0].District;
                const state = PostOffice[0].State;
                setFormData((prevData) => ({
                    ...prevData,
                    city,
                    state
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    pincode: '',
                    city: '',
                    state: ''
                }));
                toast({
                    title: "Invalid Pincode",
                    description: "No records found for the entered pincode.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                });
            }
        } catch (error) {
            console.error('Error fetching address details:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePincodeChange = (e) => {
        handleChange(e);
        const { value } = e.target;
        if (value.length === 6) {
            fetchAddressDetails(value);
        }
    };

    return (
        <VStack spacing="4" marginTop={10}>
            <Heading as="h2" size={['md', 'lg']} marginBottom={10}>Additional Information</Heading>
            <Heading as='h4' size={['sm', 'md']}>Address</Heading>

            <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>
                <Input
                    borderRadius={['10', '7']}
                    size={['sm', 'md']}
                    placeholder="Address Line 1"
                    name="addressl1"
                    value={formData.addressl1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    borderColor={getBorderColor('addressl1')}
                />
                <Input
                    borderRadius={['10', '7']}
                    size={['sm', 'md']}
                    placeholder="Address Line 2"
                    name="addressl2"
                    value={formData.addressl2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    borderColor={getBorderColor('addressl2')}
                />
            </Flex>
            <Flex flexDir={'row'} w={'100%'} gap={4}>
                <Input
                    borderRadius={['10', '7']}
                    size={['sm', 'md']}
                    placeholder="Pincode"
                    type="number"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handlePincodeChange}
                    onBlur={handleBlur}
                    borderColor={getBorderColor('pincode')}
                />
                <Input
                    borderRadius={['10', '7']}
                    size={['sm', 'md']}
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    borderColor={getBorderColor('city')}
                    isDisabled={loading}
                />
            </Flex>
            <Flex flexDir={'row'} w={'100%'} gap={4}>
                <Input
                    borderRadius={['10', '7']}
                    size={['sm', 'md']}
                    w={['100%', '49%']}
                    placeholder='State'
                    name='state'
                    value={formData.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    borderColor={getBorderColor('state')}
                    isDisabled={loading}
                />
            </Flex>
            {loading && <Spinner size="lg" mt={4} />}

            <Heading as='h4' size={['sm', 'md']} mt={6}>Credentials</Heading>
            <Input
                borderRadius={['10', '7']}
                size={['sm', 'md']}
                placeholder='Username'
                name='uname'
                value={formData.uname}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={getBorderColor('uname')}
            />
            <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>

                <InputGroup size={['sm', 'md']}>
                    <Input
                        borderRadius={['10', '7']}
                        placeholder='Password'
                        name='password'
                        type={showPassword.password ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        borderColor={getBorderColor('password')}
                    />
                    <InputRightElement>
                        <Button size={['0.5rem', '0.75rem']} onClick={() => handleTogglePasswordVisibility('password')}>
                            {showPassword.password ? <FaEye /> : <FaEyeSlash />}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <InputGroup size={['sm', 'md']}>
                    <Input
                        borderRadius={['10', '7']}
                        placeholder='Re-enter Password'
                        name='cpassword'
                        type={showPassword.cpassword ? 'text' : 'password'}
                        value={formData.cpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        borderColor={getBorderColor('cpassword')}
                    />
                    <InputRightElement>
                        <Button size={['0.5rem', '0.75rem']} onClick={() => handleTogglePasswordVisibility('cpassword')}>
                            {showPassword.cpassword ? <FaEye /> : <FaEyeSlash />}
                        </Button>
                    </InputRightElement>
                </InputGroup>

            </Flex>

            <Flex width="100%" mt={4}>
                <Button colorScheme='gray' onClick={prevStage} size={['sm', 'md']}>Back</Button>
                <Spacer />
                <Button colorScheme="blue" onClick={onsubmit} size={['sm', 'md']}>Submit</Button>
            </Flex>
        </VStack>
    );
};

export default AdditionalInformation;
