import { VStack, Flex, Input, Button, Spacer, Heading, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';


import { FaEye, FaEyeSlash } from "react-icons/fa6";
const AdditionalInformation = ({ formData, handleChange, handleBlur, prevStage, onsubmit, getBorderColor }) => {
    const [showp, setShowp] = useState(false)
    const handleClickP = () => setShowp(!showp)

    const [showcp,setShowcp] = useState(false);
    const handleClickCp = () => setShowcp(!showcp);
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
            <Flex flexDir={'row'} w={'100%'} gap={4} >
                <Input
                    borderRadius={['10', '7']}
                    size={['sm', 'md']}
                    placeholder="Pincode"
                    type="number"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
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
                />
            </Flex>
            
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
            <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap','nowrap']}>

                <InputGroup size={['sm', 'md']}>
                    <Input
                        borderRadius={['10', '7']}
                        
                        placeholder='Password'
                        name='password'
                        type={showp ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        borderColor={getBorderColor('password')}
                    />
                    <InputRightElement >
                        <Button
                            size={['0.5rem', '0.75rem']}
                            onClick={handleClickP}>
                            {!showp ? (<FaEyeSlash />) : (<FaEye />)}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <InputGroup size={['sm', 'md']}>
                    <Input
                        borderRadius={['10', '7']}
                        
                        placeholder='Re-enter Password'
                        name='cpassword'
                        type={showcp ? 'text' : 'password'}
                        value={formData.cpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        borderColor={getBorderColor('cpassword')}
                    />
                    <InputRightElement >
                        <Button
                            size={['0.5rem', '0.75rem']}
                            onClick={handleClickCp}>
                            {
                            !showcp ? (<FaEyeSlash />) : (<FaEye />)}
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
    )
};

export default AdditionalInformation;
