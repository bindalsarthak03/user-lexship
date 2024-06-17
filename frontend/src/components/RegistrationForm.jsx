// src/components/RegistrationForm.jsx
import { useState } from 'react';
import { Box, Button, Heading, Input, VStack, HStack, Text, Flex, Spacer, Select, Checkbox, CheckboxGroup, useColorMode, IconButton, Icon, Image, theme } from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi'; // Import sun and moon icons
import logo from '../assets/lexship.png'
const RegistrationForm = () => {
  
  const [stage, setStage] = useState(1);
  const { colorMode, toggleColorMode } = useColorMode()
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    cname: '',
    uname: '',
    ctype: '',
    password: '',
    cpassword: '',
    addressl1: '',
    addressl2: '',
    pincode: '',
    city: '',
    state: '',
    addressl1_b: '',
    addressl2_b: '',
    pincode_b: '',
    city_b: '',
    state_b: '',
    companycontact: '',
    accountType: [], // to hold the selected account types
    sameAsCompany: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      ctype: e.target.value
    });
  };

  const handleCheckboxChange = (accountType) => {
    setFormData({
      ...formData,
      accountType: accountType
    });
  };
  const handleBillCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'sameAsCompany') {
      setFormData({
        ...formData,
        sameAsCompany: true
      });
      if (checked) {
        // If the checkbox is checked, fill the billing address fields with the company address
        setFormData({
          ...formData,
          sameAsCompany: true,
          addressl1_b: formData.addressl1,
          addressl2_b: formData.addressl2,
          pincode_b: formData.pincode,
          city_b: formData.city,
          state_b: formData.state
        });
      } else {
        // If the checkbox is unchecked, clear the billing address fields
        setFormData({
          ...formData,
          sameAsCompany: false,
          addressl1_b: '',
          addressl2_b: '',
          pincode_b: '',
          city_b: '',
          state_b: ''
        });
      }
    }
  };

  const onsubmit = () => console.log(formData);
  const nextStage = () => setStage((prev) => prev + 1);
  const prevStage = () => setStage((prev) => prev - 1);

  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  width:'100%', gap:200}}>
        {/* Logo Image */}
        <Image src={logo} alt='Lexship' h={[8,41]} />

        {/* Toggle button for light/dark mode */}
        <IconButton
        size={['sm','md']}
          aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
          icon={colorMode === 'light' ? <Icon as={FiMoon} /> : <Icon as={FiSun} />}
          onClick={toggleColorMode}
        />
      </header>
      <Box w={[370,1000]} margin="0 auto" padding="6" borderWidth="1px" borderRadius="lg" boxShadow="lg" mt={5}>
        <HStack spacing="8" justify="center" marginBottom="6">
          <Text fontWeight="bold" color={stage === 1 ? 'green' : 'gray.500'} fontSize={['md','lg']}> Basic Information</Text>
          <Text fontWeight="bold" color={stage === 2 ? 'green' : 'gray.500'} fontSize={['md','lg']}>Additional Information</Text>
        </HStack>

        {stage === 1 && (
          <VStack spacing="4" marginTop={10}>
            <Heading as="h2" size={['md','lg']} marginBottom={10}>Basic Information</Heading>
            <Input
              size={['sm','md']}
              placeholder='Company Name'
              name='cname'
              value={formData.cname}
              onChange={handleChange}
            />
            <Flex flexDir={'row'} w={'100%'} gap={4}>
              <Input
              size={['sm','md']}
                placeholder="First Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />
              <Input
              size={['sm','md']}
                placeholder="Last Name"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
              />
            </Flex>
            <Flex flexDir={'row'} w={'100%'} gap={4}>
              <Input
              size={['sm','md']}
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
              size={['sm','md']}
                placeholder="Mobile"
                type="number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Flex>
            <Flex flexDir={'row'} w={'100%'} gap={4}>
              <Select placeholder='Company Type' name="ctype" value={formData.ctype} onChange={handleSelectChange} size={['sm','md']}>
                <option value='Public Limited Company'>Public Limited Company</option>
                <option value='Private Limited Company'>Private Limited Company</option>
                <option value='Partnership'>Partnership</option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Individual Trading">Individual Trading</option>
              </Select>
            </Flex>
            <Flex flexDir='row' width='100%' alignContent='flex-start' >

              <CheckboxGroup colorScheme="green" onChange={handleCheckboxChange} value={formData.accountType} size={['sm','md']}>
                <HStack gap={5}>
                  <Text fontSize={['sm','md']} >Account Type</Text>
                  <Checkbox value="WSL" >WSL</Checkbox>
                </HStack>
              </CheckboxGroup>
            </Flex>
            <Flex width="100%">
              <Spacer />
              <Button colorScheme="teal" onClick={nextStage} size={['sm','md']}>Next</Button>
            </Flex>
          </VStack>
        )}
        {stage === 2 && (
          <VStack spacing="4" marginTop={10}>
            <Heading as="h2" size={['md','lg']} marginBottom={10}>Additional Information</Heading>
            <Heading as='h4' size={['sm','md']}>Company Address</Heading>
            <Flex flexDir={'row'} w={'100%'} gap={4}>
              <Input
              size={['sm','md']}
                placeholder="Address Line 1"
                name="addressl1"
                value={formData.addressl1}
                onChange={handleChange}
              />
              <Input
              size={['sm','md']}
                placeholder="Address Line 2"
                name="addressl2"
                value={formData.addressl2}
                onChange={handleChange}
              />
            </Flex>
            <Flex flexDir={'row'} w={'100%'} gap={4}>
              <Input
              size={['sm','md']}
                placeholder="Pincode"
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
              <Input
              size={['sm','md']}
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Flex>
            <Flex flexDir={'row'} w={'100%'} gap={4}>
              <Input
              size={['sm','md']}
                w={'49%'}
                placeholder='State'
                name='state'
                value={formData.state}
                onChange={handleChange}
              />
            </Flex>
            <Heading as='h4' size={['sm','md']} mt={6}>Billing Address</Heading>
            <CheckboxGroup colorScheme="green">
              <HStack>
                <Text >Same as Company</Text>
                <Checkbox name="sameAsCompany" isChecked={formData.sameAsCompany} onChange={handleBillCheckboxChange} value='checkbox' size={['sm','md']}/>
              </HStack>
            </CheckboxGroup>

            <Flex flexDir={'row'} w={'100%'} gap={4}>
              <Input
              size={['sm','md']}
                placeholder="Address Line 1"
                name="addressl1_b"
                value={formData.addressl1_b}
                onChange={handleChange}
              />
              <Input
              size={['sm','md']}
                placeholder="Address Line 2"
                name="addressl2_b"
                value={formData.addressl2_b}
                onChange={handleChange}
              />
            </Flex>
            <Flex flexDir={'row'} w={'100%'} gap={4}>
              <Input
              size={['sm','md']}
                placeholder="Pincode"
                type="number"
                name="pincode_b"
                value={formData.pincode_b}
                onChange={handleChange}
              />
              <Input
              size={['sm','md']}
                placeholder="City"
                name="city_b"
                value={formData.city_b}
                onChange={handleChange}
              />
            </Flex>
            <Flex flexDir={'row'} w={'100%'} gap={4}>
              <Input
              size={['sm','md']}
                w={'49%'}
                placeholder='State'
                name='state_b'
                value={formData.state_b}
                onChange={handleChange}
              />
            </Flex>
            <Heading as='h4' size={['sm','md']} mt={6}>Credentials</Heading>
            <Input
            size={['sm','md']}
              placeholder='Username'
              name='uname'
              value={formData.uname}
              onChange={handleChange}
            />
            <Flex flexDir={'row'} w={'100%'} gap={4}>
              <Input
              size={['sm','md']}
                placeholder='Password'
                name='password'
                type='password'
                value={formData.password}
                onChange={handleChange}
              />
              <Input
              size={['sm','md']}
                placeholder='Confirm Password'
                name='cpassword'
                type='password'
                value={formData.cpassword}
                onChange={handleChange}
              />
            </Flex>

            <Flex width="100%" mt={4}>
              <Button colorScheme='gray' onClick={prevStage} size={['sm','md']}>Back</Button>
              <Spacer />
              <Button colorScheme="teal" onClick={onsubmit} size={['sm','md']}>Submit</Button>
            </Flex>
          </VStack>
        )}
      </Box>
    </>
  );
};



export default RegistrationForm;
