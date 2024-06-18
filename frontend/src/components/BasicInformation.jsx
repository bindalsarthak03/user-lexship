import { VStack, Flex, Input, Select, CheckboxGroup, HStack, Text, Button, Spacer, Heading, Checkbox } from '@chakra-ui/react';

const BasicInformation = ({ formData, handleChange, handleBlur, handleSelectChange, handleCheckboxChange, nextStage, getBorderColor }) => (
  <VStack spacing="4" marginTop={10}>
    <Heading as="h2" size={['md', 'lg']} marginBottom={10}>Basic Information</Heading>
    <Input
      size={['sm', 'md']}
      placeholder='Company Name'
      name='cname'
      value={formData.cname}
      onChange={handleChange}
      onBlur={handleBlur}
      borderColor={getBorderColor('cname')}
    />
    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>
      <Input
        size={['sm', 'md']}
        placeholder="First Name"
        name="fname"
        value={formData.fname}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('fname')}
      />
      <Input
        size={['sm', 'md']}
        placeholder="Last Name"
        name="lname"
        value={formData.lname}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('lname')}
      />
    </Flex>
    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>
      <Input
        size={['sm', 'md']}
        placeholder="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('email')}
      />
      <Input
        size={['sm', 'md']}
        placeholder="Mobile"
        type="number"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('mobile')}
      />
    </Flex>
    <Flex flexDir={'row'} w={'100%'} gap={4}>
      <Select
        placeholder='Company Type'
        name="ctype"
        value={formData.ctype}
        onChange={handleSelectChange}
        onBlur={handleBlur}
        size={['sm', 'md']}
        borderColor={getBorderColor('ctype')}
      >
        <option value='Public Limited Company'>Public Limited Company</option>
        <option value='Private Limited Company'>Private Limited Company</option>
        <option value='Partnership'>Partnership</option>
        <option value="Sole Proprietorship">Sole Proprietorship</option>
        <option value="Individual Trading">Individual Trading</option>
      </Select>
    </Flex>
    <Flex flexDir='row' width='100%' alignContent='flex-start'>
      <CheckboxGroup colorScheme="green" onChange={handleCheckboxChange} value={formData.accountType} size={['sm', 'md']}>
        <HStack gap={5}>
          <Text fontSize={['sm', 'md']}>Account Type</Text>
          <Checkbox value="WSL">WSL</Checkbox>
        </HStack>
      </CheckboxGroup>
    </Flex>
    <Flex width="100%">
      <Spacer />
      <Button colorScheme="teal" onClick={nextStage} size={['sm', 'md']}>Next</Button>
    </Flex>
  </VStack>
);

export default BasicInformation;