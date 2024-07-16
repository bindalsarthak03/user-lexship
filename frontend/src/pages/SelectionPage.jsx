import { AbsoluteCenter, Box, Button, Divider, Flex, Heading, Text, VStack, useColorMode, } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { IoBusiness, IoPerson } from "react-icons/io5";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";

const SelectionPage = () => {
    const navigate = useNavigate();
    const { colorMode } = useColorMode();
    const routeChange = (name) => {
        let path = '';
        if (name !== 'login') {
            path = `/register-${name}`
        } else {
            path = `/login`
        }
        navigate(path);
    }
    return (
        <Flex flexDir={'column'} justifyContent={"center"} alignItems={"center"} h={'100%'} mt={'8%'}>
            <Flex border={'4px  solid'} borderRadius={20} alignItems={"center"} justifyContent={"space-around"} borderColor={(colorMode === 'dark' ? 'gray.700' : 'gray.200')} p={[6, 10]} gap={[2, 10]} flexDir={"row"} _hover={{ bgColor: (colorMode === 'dark' ? 'gray.700' : 'gray.200') }} flexWrap={['wrap', 'nowrap']} w={['80%', '80%', '60%', '40%', '35%']} mb={10}>
                <Flex>
                    <FaPersonWalkingDashedLineArrowRight size={'60px'} />
                </Flex>
                <VStack alignItems={'left'}>
                    <Heading size={'lg'} textAlign={'left'}>Already a Customer?</Heading>
                    <Text color={'gray.500'} textAlign={'left'}>Login to access the best services!</Text>

                    <Button colorScheme="teal" onClick={() => routeChange('login')} gap={2} >
                        Login
                    </Button>
                </VStack>
            </Flex>
            {/* <Divider ml={20} mr={20} h={'1px'} bg={'gray.500'} /> */}
            <Box w={'95%'} position={'relative'}>
                <Divider mr={20} h={'1px'} bg={'gray.600'} />
                <AbsoluteCenter bg={'gray.800'} px='4' >
                   OR
                </AbsoluteCenter>

            </Box>

            <Flex flexDir={['col', 'col', "row"]} justifyContent={"center"} gap={[10, 10, 200]} alignItems={"center"} flexWrap={['wrap', 'nowrap']} mt={[5, 5, 0]} p={[5, 10]}>
                <Flex border={'4px  solid'} borderRadius={20} alignItems={"center"} justifyContent={"space-around"} borderColor={(colorMode === 'dark' ? 'gray.700' : 'gray.200')} p={[6, 10]} gap={[2, 10]} flexDir={"row"} _hover={{ bgColor: (colorMode === 'dark' ? 'gray.700' : 'gray.200') }} flexWrap={['wrap', 'nowrap']}>
                    <Flex>
                        <IoBusiness size={'50px'} />
                    </Flex>
                    <VStack alignItems={'left'}>
                        <Heading size={'lg'} textAlign={'left'}>Business</Heading>
                        <Text color={'gray.500'} textAlign={'left'}>Showcase your business to different parts of world.</Text>
                        <Button colorScheme="teal" onClick={() => routeChange('business')}>Register</Button>
                    </VStack>
                </Flex>
                <Flex border={'4px  solid'} borderRadius={20} alignItems={"center"} justifyContent={"space-around"} borderColor={(colorMode === 'dark' ? 'gray.700' : 'gray.200')} p={[6, 10]} gap={[2, 10]} flexDir={"row"} _hover={{ bgColor: (colorMode === 'dark' ? 'gray.700' : 'gray.200') }} flexWrap={['wrap', 'nowrap']}>
                    <Flex>
                        <IoPerson size={['50px']} />
                    </Flex>
                    <VStack alignItems={'left'}>
                        <Heading size={'lg'} textAlign={'left'}>Retail</Heading>
                        <Text color={'gray.500'} textAlign={'left'}>Deliver gifts to any part of world to your loved ones.</Text>
                        <Button colorScheme="teal" onClick={() => routeChange('retail')}> Register</Button>
                    </VStack>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SelectionPage