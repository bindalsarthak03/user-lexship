import { VStack, Flex, Input, Select, CheckboxGroup, HStack, Text, Button, Spacer, Heading, Checkbox, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useState } from 'react';

const BasicInformationB = ({ formData, handleChange, handleBlur, handleSelectChange, handleCheckboxChange, nextStage, getBorderColor, setFormData }) => {
  const [gstError, setGstError] = useState('');

  const fetchAddressGST = async (gstn) => {
    try {
      setGstError('');
      const response = await fetch(`http://localhost:5000/api/v1/${gstn}`);
      
      if (response.status === 404) {
        setGstError('Invalid GSTIN');
        return;
      }
      else {
        setGstError('');  // Clear any previous error

        const data = await response.json();

        const address1 = data?.principalPlaceOfBusinessFields?.principalPlaceOfBusinessAddress?.buildingName
          ? data.principalPlaceOfBusinessFields.principalPlaceOfBusinessAddress.buildingName + " " + (data.principalPlaceOfBusinessFields.principalPlaceOfBusinessAddress.buildingNumber || "")
          : "";
        const address2 = data?.principalPlaceOfBusinessFields?.principalPlaceOfBusinessAddress?.streetName
          ? data.principalPlaceOfBusinessFields.principalPlaceOfBusinessAddress.streetName + " " + (data.principalPlaceOfBusinessFields.principalPlaceOfBusinessAddress.location || "")
          : "";
        const city = data?.principalPlaceOfBusinessFields?.principalPlaceOfBusinessAddress?.districtName || "";
        const state = data?.principalPlaceOfBusinessFields?.principalPlaceOfBusinessAddress?.stateName || "";
        const pincode = data?.principalPlaceOfBusinessFields?.principalPlaceOfBusinessAddress?.pincode || "";

        setFormData(prevData => ({
          ...prevData,
          addressl1: address1,
          addressl2: address2,
          city: city,
          state: state,
          pincode: pincode
        }));
      }

    } catch (error) {
      setGstError('Invalid GSTIN');
    }
  };

  const handleGSTChange = (e) => {
    handleChange(e);
    const { value } = e.target;
    if (value.length === 15) {
      fetchAddressGST(value);
    }
  };

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
        <FormControl isInvalid={gstError !== ''}>
          <Input
            borderRadius={['10', '7']}
            size={['sm', 'md']}
            placeholder='GSTIN'
            name='gstin'
            value={formData.gstin}
            onChange={(e) => handleGSTChange(e)}
            onBlur={handleBlur}
            borderColor={getBorderColor('gstin')}
          />
          {gstError && <FormErrorMessage>{gstError}</FormErrorMessage>}
        </FormControl>
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
  );
};

export default BasicInformationB;
