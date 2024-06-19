import { Button, Flex, Heading, Text, VStack, useColorMode, } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { IoBusiness, IoPerson } from "react-icons/io5";
const SelectionPage = () => {
    const navigate = useNavigate();
    const { colorMode } = useColorMode();
    const routeChange = (name) => {
        let path = `/register-${name}`
        navigate(path);
    }
    return (
        <Flex flexDir={['col','col',"row"]} justifyContent={"center"} gap={[0,10,200]} alignItems={"center"} flexWrap={['wrap','nowrap']} h={'80vh'} mt={[10,5,0]} p={[5,10]}>
            <Flex border={'4px  solid'} borderRadius={20} alignItems={"center"} justifyContent={"space-around"}  borderColor={(colorMode==='dark'?'gray.700':'gray.200')}  p={[6,10]} gap={[2,10]} flexDir={"row"} _hover={{bgColor:(colorMode==='dark'?'gray.700':'gray.200')}}   flexWrap={['wrap','nowrap']}> 
                <Flex>
                <IoBusiness size={'50px'}/>
                </Flex>
                <VStack alignItems={'left'}>
                <Heading size={'lg'} textAlign={'left'}>Business</Heading>
                <Text color={'gray.500'} textAlign={'left'}>Showcase your business to different parts of world.</Text>
                <Button colorScheme="teal" onClick={()=>routeChange('business')}>Register</Button>
                </VStack>
            </Flex>
            <Flex border={'4px  solid'}  borderRadius={20}  alignItems={"center"} justifyContent={"space-around"}  borderColor={(colorMode==='dark'?'gray.700':'gray.200')} p={[6,10]} gap={[2,10]} flexDir={"row"} _hover={{bgColor:(colorMode==='dark'?'gray.700':'gray.200')}}  flexWrap={['wrap','nowrap']}>
                <Flex>
                <IoPerson size={['50px']}/>
                </Flex>
                <VStack alignItems={'left'}>
                <Heading size={'lg'} textAlign={'left'}>Retail</Heading>
                <Text color={'gray.500'} textAlign={'left'}>Deliver gifts to any part of world to your loved ones.</Text>
                <Button colorScheme="teal" onClick={()=>routeChange('retail')}> Register</Button>
                </VStack>
            </Flex>
        </Flex>
    )
}

export default SelectionPage