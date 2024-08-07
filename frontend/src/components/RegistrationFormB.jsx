import { Suspense, lazy, useState } from 'react';
import { Box, HStack, Text, useColorMode } from '@chakra-ui/react';
const BasicInformationB = lazy(()=> import('./BasicInformationB.jsx'))
const AdditionalInformationB = lazy(()=> import('./AdditionalInformationB.jsx'))
import Spinner from './Spinner.jsx';

const RegistrationFormB = () => {
  const [stage, setStage] = useState(1);
  const { colorMode } = useColorMode();
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    cname: '',
    uname: '',
    gstin: '',
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
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      ctype: e.target.value
    });
    setTouched({
      ...touched,
      ctype: true
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
        sameAsCompany: checked
      });
      if (checked) {
        // If the checkbox is checked, fill the billing address fields with the company address
        setFormData({
          ...formData,
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
          addressl1_b: '',
          addressl2_b: '',
          pincode_b: '',
          city_b: '',
          state_b: ''
        });
      }
    }
  };

  const onsubmit = () => { 
    //lead generation done
    console.log(formData);

    //redirect to kyc form 
    window.location.href = '/kyc-verification';
  }
  const nextStage = () => setStage((prev) => prev + 1);
  const prevStage = () => setStage((prev) => prev - 1);

  const isValid = (name) => {
    return formData[name] !== '';
  };

  const getBorderColor = (name) => {
    if (!touched[name]) {
      return 'gray.600';
    }
    return isValid(name) ? 'green' : 'red';
  };

  return (
    <Suspense fallback={<Spinner />}>
      <Box w={['100%', '100%', '90%', '70%']} margin="0 auto" padding="6" borderWidth="1px" borderRadius="lg" boxShadow="lg" mt={5}>
        <HStack spacing="8" justify="center" marginBottom="6">
          <Text
            fontWeight="bold"
            color={stage === 1 ? 'blue.400' : 'gray.500'}
            fontSize={['sm', 'md']}
            onClick={() => setStage(1)}
            cursor={'pointer'}
            bgColor={(stage === 1 && colorMode === 'dark') ? 'gray.700' : ((stage === 1 && colorMode === 'light') ? 'gray.100' : '')}
            borderRadius={stage === 1 && 10}
            padding={stage === 1 && 2}>
            Basic Information
          </Text>
          <Text
            fontWeight="bold"
            color={stage === 2 ? 'blue.400' : 'gray.500'}
            fontSize={['sm', 'md']}
            onClick={() => setStage(2)}
            cursor={'pointer'}
            bgColor={(stage === 2 && colorMode === 'dark') ? 'gray.700' : ((stage === 2 && colorMode === 'light') ? 'gray.100' : '')}
            borderRadius={stage === 2 && 10}
            padding={stage === 2 && 2}>
            Additional Information
          </Text>
        </HStack>

        {stage === 1 && (
          <BasicInformationB
            formData={formData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSelectChange={handleSelectChange}
            handleCheckboxChange={handleCheckboxChange}
            nextStage={nextStage}
            getBorderColor={getBorderColor}
            setFormData={setFormData}
          />
        )}
        {stage === 2 && (
          <AdditionalInformationB
            formData={formData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleBillCheckboxChange={handleBillCheckboxChange}
            prevStage={prevStage}
            onsubmit={onsubmit}
            getBorderColor={getBorderColor}
            setFormData={setFormData}
          />
        )}
      </Box>
    </Suspense>
  );
};

export default RegistrationFormB;
