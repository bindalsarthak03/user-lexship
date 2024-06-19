import { useState } from 'react';
import { Box, HStack, Text, useColorMode } from '@chakra-ui/react';
import BasicInformationR from './BasicInformationR.jsx';
import AdditionalInformationR from './AdditionalInformationR.jsx';

const RegistrationForm = () => {
  const [stage, setStage] = useState(1);
  const { colorMode } = useColorMode();
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    uname: '',
    password: '',
    cpassword: '',
    addressl1: '',
    addressl2: '',
    pincode: '',
    city: '',
    state: '',
    aadharn:''
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

  

  const onsubmit = () => { console.log(formData); }
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
    <>
      <Box w={['100%', '100%', '90%', '70%']} margin="0 auto" padding="6" borderWidth="1px" borderRadius="lg" boxShadow="lg" mt={5}>
        <HStack spacing="8" justify="center" marginBottom="6">
          <Text
            fontWeight="bold"
            color={stage === 1 ? 'teal.400' : 'gray.500'}
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
            color={stage === 2 ? 'teal.400' : 'gray.500'}
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
          <BasicInformationR
            formData={formData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            nextStage={nextStage}
            getBorderColor={getBorderColor}
          />
        )}
        {stage === 2 && (
          <AdditionalInformationR
            formData={formData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            prevStage={prevStage}
            onsubmit={onsubmit}
            getBorderColor={getBorderColor}
          />
        )}
      </Box>
    </>
  );
};

export default RegistrationForm;
