import { VStack, Flex, Input, Button, Spacer, Heading} from '@chakra-ui/react';

const BasicInformation = ({ formData, handleChange, handleBlur, nextStage, getBorderColor }) => (
  <VStack spacing="4" marginTop={10} >
    <Heading as="h2" size={['md', 'lg']} marginBottom={10}>Basic Information</Heading>
    <Input
      borderRadius={['10','7']}
        size={['sm', 'md']}
        placeholder="Aadhar Number"
        name="aadharn"
        value={formData.aadharn}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('aadharn')}
      />
    <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'nowrap']}>
      <Input
      borderRadius={['10','7']}
        size={['sm', 'md']}
        placeholder="First Name"
        name="fname"
        value={formData.fname}
        onChange={handleChange}
        onBlur={handleBlur}
        borderColor={getBorderColor('fname')}
      />
      <Input
      borderRadius={['10','7']}
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
      borderRadius={['10','7']}
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
      borderRadius={['10','7']}
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
    <Flex width="100%">
      <Spacer />
      <Button colorScheme="teal" onClick={nextStage} size={['sm', 'md']}>Next</Button>
    </Flex>
  </VStack>
);

export default BasicInformation;
