import {
    VStack,
    Flex,
    Input,
    Checkbox,
    HStack,
    Text,
    Button,
    Spacer,
    Heading,
    InputGroup,
    InputRightElement,
    useToast,
    Spinner
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const AdditionalInformationB = ({ formData, handleChange, handleBlur, handleBillCheckboxChange, prevStage, onsubmit, getBorderColor, setFormData }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState({ company: false, billing: false });
    const toast = useToast();

    const handleShowPasswordToggle = () => setShowPassword(!showPassword);
    const handleShowConfirmPasswordToggle = () => setShowConfirmPassword(!showConfirmPassword);

    const fetchAddressDetails = async (pincode, type) => {
        try {
            setLoading(prev => ({ ...prev, [type]: true }));
            const response = await fetch(`${import.meta.env.VITE_POSTAL_INFO_API}/${pincode}`);
            const data = await response.json();
            const updateState = (city, state, pincode) => {
                setFormData(prevData => ({
                    ...prevData,
                    [`city${type === 'billing' ? '_b' : ''}`]: city,
                    [`state${type === 'billing' ? '_b' : ''}`]: state,
                    [`pincode${type === 'billing' ? '_b' : ''}`]: pincode
                }));
            };

            if (data[0].Status === 'Success') {
                const { PostOffice } = data[0];
                updateState(PostOffice[0].District, PostOffice[0].State, pincode);
            } else {
                updateState('', '', '');
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
            setTimeout(() => setLoading(prev => ({ ...prev, [type]: false })), 100);
        }
    };

    const handlePincodeChange = (e, type) => {
        handleChange(e);
        const { value } = e.target;
        if (value.length === 6) {
            fetchAddressDetails(value, type);
        }
    };

    return (
        <VStack spacing="4" marginTop={10}>
            <Heading as="h2" size={['md', 'lg']} marginBottom={10}>Additional Information</Heading>
            <Heading as='h4' size={['sm', 'md']}>Company Address</Heading>
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
                    type="text"
                    maxLength={6}
                    name="pincode"
                    value={formData.pincode}
                    onChange={e => handlePincodeChange(e, 'company')}
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
                    isDisabled={loading.company}
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
                    isDisabled={loading.company}
                />
            </Flex>
            {loading.company && <Spinner size={"lg"} mt={4} />}

            <Heading as='h4' size={['sm', 'md']} mt={6}>Billing Address</Heading>
            <HStack>
                <Text fontSize={['sm', 'md']}>Same as Company</Text>
                <Checkbox name="sameAsCompany" onChange={handleBillCheckboxChange} value='checkbox' size={['sm', 'md']} />
            </HStack>

            <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>
                <Input
                    borderRadius={['10', '7']}
                    size={['sm', 'md']}
                    placeholder="Address Line 1"
                    name="addressl1_b"
                    value={formData.addressl1_b}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    borderColor={getBorderColor('addressl1_b')}
                />
                <Input
                    borderRadius={['10', '7']}
                    size={['sm', 'md']}
                    placeholder="Address Line 2"
                    name="addressl2_b"
                    value={formData.addressl2_b}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    borderColor={getBorderColor('addressl2_b')}
                />
            </Flex>
            <Flex flexDir={'row'} w={'100%'} gap={4}>
                <Input
                    borderRadius={['10', '7']}
                    size={['sm', 'md']}
                    placeholder="Pincode"
                    type="text"
                    maxLength={6}
                    name="pincode_b"
                    value={formData.pincode_b}
                    onChange={e => handlePincodeChange(e, 'billing')}
                    onBlur={handleBlur}
                    borderColor={getBorderColor('pincode_b')}
                />
                <Input
                    borderRadius={['10', '7']}
                    size={['sm', 'md']}
                    placeholder="City"
                    name="city_b"
                    value={formData.city_b}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    borderColor={getBorderColor('city_b')}
                    isDisabled={loading.billing}
                />
            </Flex>
            <Flex flexDir={'row'} w={'100%'} gap={4}>
                <Input
                    borderRadius={['10', '7']}
                    size={['sm', 'md']}
                    w={['100%', '49%']}
                    placeholder='State'
                    name='state_b'
                    value={formData.state_b}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    borderColor={getBorderColor('state_b')}
                    isDisabled={loading.billing}
                />
            </Flex>
            {loading.billing && <Spinner size='lg' mt={4} />}

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
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        borderColor={getBorderColor('password')}
                    />
                    <InputRightElement>
                        <Button size={['0.5rem', '0.75rem']} onClick={handleShowPasswordToggle}>
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <InputGroup size={['sm', 'md']}>
                    <Input
                        borderRadius={['10', '7']}
                        placeholder='Re-enter Password'
                        name='cpassword'
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.cpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        borderColor={getBorderColor('cpassword')}
                    />
                    <InputRightElement>
                        <Button size={['0.5rem', '0.75rem']} onClick={handleShowConfirmPasswordToggle}>
                            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>

            <Flex width="100%" mt={4}>
                <Button colorScheme='gray' onClick={prevStage} size={['sm', 'md']}>Back</Button>
                <Spacer />
                <Button colorScheme="teal" onClick={onsubmit} size={['sm', 'md']}>Submit</Button>
            </Flex>
        </VStack>
    );
};

export default AdditionalInformationB;
