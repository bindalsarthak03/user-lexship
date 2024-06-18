import { VStack, Flex, Input, Checkbox, CheckboxGroup, HStack, Text, Button, Spacer, Heading } from '@chakra-ui/react';

const AdditionalInformation = ({ formData, handleChange, handleBlur, handleBillCheckboxChange, prevStage, onsubmit, getBorderColor }) => (
  <VStack spacing="4" marginTop={10}>
    <Heading as="h2" size={['md', 'lg']} marginBottom={10}>Additional Information</Heading>
    <Heading as='h4' size={['sm', 'md']}>Company Address</Heading>
    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>
      <Input
        size={['sm', 'md']}
        placeholder="Address Line 1"
        name="addressl1"
        value={formData.addressl1}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('addressl1')}
      />
      <Input
        size={['sm', 'md']}
        placeholder="Address Line 2"
        name="addressl2"
        value={formData.addressl2}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('addressl2')}
      />
    </Flex>
    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>
      <Input
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
    <Heading as='h4' size={['sm', 'md']} mt={6}>Billing Address</Heading>
    <CheckboxGroup colorScheme="green">
      <HStack>
        <Text>Same as Company</Text>
        <Checkbox name="sameAsCompany" isChecked={formData.sameAsCompany} onChange={handleBillCheckboxChange} value='checkbox' size={['sm', 'md']} />
      </HStack>
    </CheckboxGroup>

    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>
      <Input
        size={['sm', 'md']}
        placeholder="Address Line 1"
        name="addressl1_b"
        value={formData.addressl1_b}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('addressl1_b')}
      />
      <Input
        size={['sm', 'md']}
        placeholder="Address Line 2"
        name="addressl2_b"
        value={formData.addressl2_b}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('addressl2_b')}
      />
    </Flex>
    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>
      <Input
        size={['sm', 'md']}
        placeholder="Pincode"
        type="number"
        name="pincode_b"
        value={formData.pincode_b}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('pincode_b')}
      />
      <Input
        size={['sm', 'md']}
        placeholder="City"
        name="city_b"
        value={formData.city_b}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('city_b')}
      />
    </Flex>
    <Flex flexDir={'row'} w={'100%'} gap={4}>
      <Input
        size={['sm', 'md']}
        w={['100%', '49%']}
        placeholder='State'
        name='state_b'
        value={formData.state_b}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('state_b')}
      />
    </Flex>
    <Heading as='h4' size={['sm', 'md']} mt={6}>Credentials</Heading>
    <Input
      size={['sm', 'md']}
      placeholder='Username'
      name='uname'
      value={formData.uname}
      onChange={handleChange}
      onBlur={handleBlur}
      borderColor={getBorderColor('uname')}
    />
    <Flex flexDir={'row'} w={'100%'} gap={4}>
      <Input
        size={['sm', 'md']}
        placeholder='Password'
        name='password'
        type='password'
        value={formData.password}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('password')}
      />
      <Input
        size={['sm', 'md']}
        placeholder='Confirm Password'
        name='cpassword'
        type='password'
        value={formData.cpassword}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('cpassword')}
      />
    </Flex>

    <Flex width="100%" mt={4}>
      <Button colorScheme='gray' onClick={prevStage} size={['sm', 'md']}>Back</Button>
      <Spacer />
      <Button colorScheme="teal" onClick={onsubmit} size={['sm', 'md']}>Submit</Button>
    </Flex>
  </VStack>
);

export default AdditionalInformation;
