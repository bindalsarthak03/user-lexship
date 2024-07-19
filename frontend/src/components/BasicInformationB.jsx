import { VStack, Flex, Input, Select, CheckboxGroup, HStack, Text, Button, Spacer, Heading, Checkbox } from '@chakra-ui/react';

const BasicInformationB = ({ formData, handleChange, handleBlur, handleSelectChange, handleCheckboxChange, nextStage, getBorderColor }) => {
  const fetchAddressGST = async(gstn) => {
    const response = await fetch(`${import.meta.env.VITE_GST_API}/${gstn}`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-APISETU-CLIENTID': `${import.meta.env.VITE_CLIENTID}`,
        'X-APISETU-APIKEY': `${import.meta.env.VITE_APIKEY_APISETU}`
      }
    })
    const data = await response.json();
    console.log(data);
  }
  const handleGSTChange = (e) => {
    handleChange(e);
    const {value} = e.target;
    fetchAddressGST(value);
  }

  return (
    <VStack spacing="4" marginTop={10} >
      <Heading as="h2" size={['md', 'lg']} marginBottom={10}>Basic Information</Heading>
      <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>

        <Input
          borderRadius={['10', '7']}
          size={['sm', 'md']}
          placeholder='Company Name'
          name='cname'
          value={formData.cname}
          onChange={handleChange}
          onBlur={handleBlur}
          borderColor={getBorderColor('cname')}
        />
        <Input
          borderRadius={['10', '7']}
          size={['sm', 'md']}
          placeholder='GSTIN'
          name='gstin'
          value={formData.gstin}
          onChange={(e)=>handleGSTChange(e)}
          onBlur={handleBlur}
          borderColor={getBorderColor('gstin')}
        />
      </Flex>
      <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>
        <Input
          borderRadius={['10', '7']}
          size={['sm', 'md']}
          placeholder="First Name"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          onBlur={handleBlur}
          borderColor={getBorderColor('fname')}
        />
        <Input
          borderRadius={['10', '7']}
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
          borderRadius={['10', '7']}
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
          borderRadius={['10', '7']}
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
          borderRadius={['10', '7']}
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
      <Flex flexDir='column' width='100%' alignContent='flex-start'>
        <CheckboxGroup colorScheme="green" onChange={handleCheckboxChange} value={formData.accountType} size={['sm', 'md']}>
          <HStack gap={5}>
            <Text fontSize={['sm', 'md']}>Account Type</Text>
            <Checkbox value="WSL">WSL</Checkbox>
          </HStack>
        </CheckboxGroup>
        <Text fontSize={['xs']} textAlign={'start'} mt={2} color='gray.500'>Check WSL if you are a wholeseller</Text>
      </Flex>

      <Flex width="100%">
        <Spacer />
        <Button colorScheme="teal" onClick={nextStage} size={['sm', 'md']}>Next</Button>
      </Flex>
    </VStack>
  )
};

export default BasicInformationB;
