import { Button, Flex, Heading, Input } from '@chakra-ui/react'

const ShipmentTracking = () => {
    return (
        <Flex flexDir={'column'} mt={5} gap={5} w={'90%'} justifyContent={'center'} alignItems={'center'} border={'1px solid gray.100'}>
            <Heading color={'teal.400'} size={['lg', 'xl']} mt={10}>
                Track your shipment
            </Heading>
            <Heading size={['xs', 'sm']} textAlign={'start'}>Enter you AWB</Heading>
            <Flex flexDir={'row'} flexWrap={'wrap'} w={['100%', '50%']} justifyContent={'center'} alignItems={'center'} p={2} >
                <Input placeholder='AWB number(s)' w={['100%','90%','80%','70%', '60%']} borderRadius={0} variant={'outline'} />
                <Button w={['100%','100%','20%' ,'18%','12%']} _hover={{ bg: 'teal.400' }} borderRadius={0}
                >Track</Button>
            </Flex>
        </Flex>

    )
}

export default ShipmentTracking