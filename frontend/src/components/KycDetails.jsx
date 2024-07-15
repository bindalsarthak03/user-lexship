import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";

const KycDetails = ({ kycData, handleSelectChange, handleBlur, getBorderColor, handleFileChange, handleChange, nextStage }) => {
  return (
    <VStack spacing="4">
      <Heading as="h4" size={['md', 'lg']} mb={10}>Kyc Details</Heading>
      <Heading as='h4' size={['sm', 'md']}>Essential Details</Heading>
      <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}>
        <InputGroup size={['sm', 'md']} >
          <InputLeftAddon p={0} borderLeftRadius={['10', '7']} >
            <Select w={'100%'}
              borderRightRadius={0}
              borderLeftRadius={['10', '7']}
              placeholder='ID Proof Type'
              name="idProof"
              value={kycData.idProof}
              onChange={(e) => handleSelectChange(e, "idProof")}
              onBlur={handleBlur}
              size={['sm', 'md']}
              borderColor={getBorderColor('idProof')}
            >
              <option value='Aadhar Card'>Aadhar Card</option>
              <option value='Driving License'>Driving License</option>
              <option value="PAN Card">PAN Card</option>
              <option value='Passport'>Passport</option>
            </Select>
          </InputLeftAddon>
          < Input
            borderRightRadius={['10', '7']}
            p={['0.5', '1']}
            size={['sm', 'md']}
            name="idFile"
            type="file"
            onChange={handleFileChange}
            onBlur={handleBlur}
            borderColor={getBorderColor('idFile')}
            
          />
        </InputGroup>
        <InputGroup size={['sm', 'md']}>
          <InputLeftAddon p={0} borderLeftRadius={['10', '7']}>
            <Select w={'100%'}

              borderRightRadius={0}
              borderLeftRadius={['10', 7]}
              placeholder='Address Proof'
              name="addressProof"
              value={kycData.addressProof}
              onChange={(e) => handleSelectChange(e, "addressProof")}
              onBlur={handleBlur}
              size={['sm', 'md']}
              borderColor={getBorderColor('addressProof')}
            >
              <option value='Aadhar Card'>Aadhar Card</option>
              <option value="Bank Passbook">Bank Passbook</option>
              <option value='Driving License'>Driving License</option>
              <option value='Electricity Bill'>Electricity Bill</option>
              <option value="Passport">Passport</option>
              <option value="Telephone Bill">Telephone Bill</option>
            </Select>
          </InputLeftAddon>

          <Input
            borderRightRadius={['10', '7']}
            p={[0.5, 1]}
            size={['sm', 'md']}
            name="addressFile"
            type="file"
            onChange={handleFileChange}
            onBlur={handleBlur}
            borderColor={getBorderColor('addressFile')}
          />
        </InputGroup>
      </Flex>

      <Heading as="h4" size={['sm', 'md']} mt={6}>Additional Details</Heading>
      <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}>

        <Input
          w={['100%', '100%', '100%', '97%']}
          borderRadius={['10', 7]}
          size={['sm', 'md']}
          placeholder="IEC Code"
          name="iecCode"
          value={kycData.iecCode}
          onChange={handleChange}
          onBlur={handleBlur}
          borderColor={getBorderColor('iecCode')}
        />
        <InputGroup size={['sm', 'md']}>
          <InputLeftAddon w={['42%', '50%', '50%', '50%', '25%']} borderLeftRadius={['10', 7]}>
            <Text>IEC Certificate</Text>
          </InputLeftAddon>
          <Input
            borderRightRadius={['10', '7']}
            p={[0.5, 1]}
            size={['sm', 'md']}
            name="iecCertificate"
            type="file"
            onChange={handleFileChange}
            onBlur={handleBlur}
            borderColor={getBorderColor('iecCertificate')}
          />
        </InputGroup>

      </Flex>
      <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}>
        <Input
          w={['100%', '100%', '100%', '97%']}
          borderRadius={['10', '7']}
          size={['sm', 'md']}
          placeholder="Ad Code"
          name="adCode"
          value={kycData.adCode}
          onChange={handleChange}
          onBlur={handleBlur}
          borderColor={getBorderColor('adCode')}
        />
        <InputGroup size={['sm', 'md']}>
          <InputLeftAddon w={['42%', '50%', '50%', '50%', '25%']} borderLeftRadius={['10', 7]}>
            <Text >AdCode certificate</Text>
          </InputLeftAddon>
          <Input
            borderRightRadius={['10', '7']}
            p={[0.5, 1]}
            size={['', 'md']}
            name="adCodeFile"
            type="file"
            onChange={handleFileChange}
            onBlur={handleBlur}
            borderColor={getBorderColor('adCodeFile')}
          />
        </InputGroup>
      </Flex>
      <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']} borderLeftRadius={['10', 7]}>
        <InputGroup size={['sm', 'md']} >
          <InputLeftAddon w={['42%', '50%', '50%', '50%', '25%']} borderLeftRadius={['10', '7']}>
            <Text >LUT Expiry Date</Text>
          </InputLeftAddon>
          <Input
            borderRightRadius={['10', '7']}
            size={['sm', 'md']}
            type="date"
            name="lutDate"
            value={kycData.lutDate}
            onChange={handleChange}
            onBlur={handleBlur}
            borderColor={getBorderColor('lutDate')}
            
          />
          
        </InputGroup>
        <InputGroup size={['sm', 'md']}>
          <InputLeftAddon w={['42%', '50%', '50%', '50%', '25%']} borderLeftRadius={['10', 7]}>
            <Text >LUT Certificate</Text>
          </InputLeftAddon>
          <Input
            borderRightRadius={['10', '7']}
            p={[0.5, 1]}
            size={['sm', 'md']}
            name="lutFile"
            type="file"
            onChange={handleFileChange}
            onBlur={handleBlur}
            borderColor={getBorderColor('lutFile')}
          />
        </InputGroup>
      </Flex>

      <Heading as="h4" size={['sm', 'md']} mt={6}>Bank Details</Heading>
      <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}>
        <Select w={'100%'}
          borderRadius={['10', 7]}
          placeholder='Account Type'
          name="accType"
          value={kycData.accType}
          onChange={(e) => handleSelectChange(e, "accType")}
          onBlur={handleBlur}
          size={['sm', 'md']}
          borderColor={getBorderColor('accType')}>
          <option value="savings">Savings</option>
          <option value="current">Current</option>
        </Select>
        <Select w={'100%'}
          borderRadius={['10', 7]}
          placeholder='Bank Type'
          name="bankType"
          value={kycData.bankType}
          onChange={(e) => handleSelectChange(e, "bankType")}
          onBlur={handleBlur}
          size={['sm', 'md']}
          borderColor={getBorderColor('bankType')}>
          <option value="government">Government</option>
          <option value="private">Private</option>
        </Select>
      </Flex>
      <Flex flexDir={'row'} w={'100%'} gap={4} flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}>
        <Input
          w={['100%', '100%', '100%', '97%']}
          borderRadius={['10', '7']}
          size={['sm', 'md']}
          placeholder="Account Number"
          name="bankNumber"
          value={kycData.bankNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          borderColor={getBorderColor('bankNumber')}
        />
        <Input
          w={['100%', '100%', '100%', '97%']}
          borderRadius={['10', '7']}
          size={['sm', 'md']}
          placeholder="IFSC Code"
          name="ifsc"
          value={kycData.ifsc}
          onChange={handleChange}
          onBlur={handleBlur}
          borderColor={getBorderColor('ifsc')}
        />
      </Flex>
      <Flex width="100%" mt={4}>

        <Spacer />
        <Button colorScheme="teal" onClick={nextStage} size={['sm', 'md']}>Next</Button>
      </Flex>
    </VStack>
  )
}

export default KycDetails