import { Button, Flex, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'


const ShipmentTracking = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex flexDir={'column'} mt={5} gap={5} w={'90%'} justifyContent={'center'} alignItems={'center'} border={'1px solid gray.100'}>
            <Heading color={'blue.400'} size={['lg', 'xl']} mt={10}>
                Track your shipment
            </Heading>
            <Heading size={['xs', 'sm']} textAlign={'start'}>Enter you AWB</Heading>
            <Flex flexDir={'row'} flexWrap={'wrap'} w={['100%', '50%']} justifyContent={'center'} alignItems={'center'} p={2} >
                <Input placeholder='AWB number(s)' w={['100%', '90%', '80%', '70%', '60%']} borderRadius={0} variant={'outline'} />
                <Button w={['100%', '100%', '20%', '18%', '12%']} _hover={{ bg: 'blue.400',color:'white' }} borderRadius={0} onClick={onOpen}
                >Track</Button>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Tack your parcel here!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eveniet corporis porro natus in dolore quod, quidem sunt hic ut laborum vel laudantium error molestiae provident voluptatem ex eum deleniti.
          </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>

    )
}

export default ShipmentTracking