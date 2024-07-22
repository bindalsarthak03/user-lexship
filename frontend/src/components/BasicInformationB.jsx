import { VStack, Flex, Input, Select, CheckboxGroup, HStack, Text, Button, Heading, Checkbox, FormControl, FormErrorMessage, Collapse, Spinner } from '@chakra-ui/react';
import { useState, useCallback } from 'react';
import { debounce } from '../utils/debounce'; // Adjust the path if needed

const BasicInformationB = ({ formData, handleChange, handleBlur, handleSelectChange, handleCheckboxChange, nextStage, getBorderColor, setFormData }) => {
  const [gstError, setGstError] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  // Function to fetch GST details
  const fetchAddressGST = async (gstn) => {
    try {
      setGstError('');
      setIsErrorVisible(false);
      setIsLoading(true); // Start loading
      const response = await fetch(`http://localhost:5000/api/v1/${gstn}`);

      if (response.status === 404) {
        setGstError('Invalid GSTIN');
        setIsErrorVisible(true);
        setIsLoading(false); // Stop loading
        return;
      }
      else {
        setGstError('');  // Clear any previous error

        const data = await response.json();
        const cname = data.legalNameOfBusiness ? data.legalNameOfBusiness : "";
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
          cname: cname,
          addressl1: address1,
          addressl2: address2,
          city: city,
          state: state,
          pincode: pincode
        }));
        setIsLoading(false); // Stop loading
      }

    } catch (error) {
      setGstError('Invalid GSTIN');
      setIsErrorVisible(true);
      setIsLoading(false); // Stop loading
    }
  };

  // Debounced version of fetchAddressGST
  const debouncedFetchAddressGST = useCallback(
    debounce(fetchAddressGST, 300), // Adjust delay as needed
    []
  );

  const handleGSTChange = (e) => {
    handleChange(e);
    const { value } = e.target;
    if (value.length === 15) {
      debouncedFetchAddressGST(value);
    }
  };

  return (
    <VStack spacing="4" marginTop={10}>
      <Heading as="h2" size={['md', 'lg']} marginBottom={10}>Basic Information</Heading>
      <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>
        <FormControl isInvalid={gstError !== ''}>
          <Input
            borderRadius={['10', '7']}
            size={['sm', 'md']}
            placeholder='GSTIN'
            name='gstin'
            value={formData.gstin}
            onChange={handleGSTChange}
            onBlur={handleBlur}
            borderColor={getBorderColor('gstin')}
            transition="border-color 0.3s ease"
            _focus={{ borderColor: 'teal.500' }}
          />
          <Collapse in={isErrorVisible}>
            <FormErrorMessage>{gstError}</FormErrorMessage>
          </Collapse>
        </FormControl>
        <Input
          borderRadius={['10', '7']}
          size={['sm', 'md']}
          placeholder='Company Name'
          name='cname'
          value={formData.cname}
          onChange={handleChange}
          onBlur={handleBlur}
          borderColor={getBorderColor('cname')}
          transition="border-color 0.3s ease"
          _focus={{ borderColor: 'teal.500' }}
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
          transition="border-color 0.3s ease"
          _focus={{ borderColor: 'teal.500' }}
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
          transition="border-color 0.3s ease"
          _focus={{ borderColor: 'teal.500' }}
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
          transition="border-color 0.3s ease"
          _focus={{ borderColor: 'teal.500' }}
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
          transition="border-color 0.3s ease"
          _focus={{ borderColor: 'teal.500' }}
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
          transition="border-color 0.3s ease"
          _focus={{ borderColor: 'teal.500' }}
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

      <Flex width="100%" justifyContent="center" alignItems="center">
        {isLoading ? (
          <Spinner size="lg" />
        ) : (
          <Button colorScheme="teal" onClick={nextStage} size={['sm', 'md']}>Next</Button>
        )}
      </Flex>
    </VStack>
  );
};

export default BasicInformationB;
