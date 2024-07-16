import { Flex } from "@chakra-ui/react"
import ShipmentTracking from "../components/ShipmentTracking"

const HomePage = () => {
  return (
    <Flex flexDir={'column'} justifyContent={"center"} alignItems={'center'}>
    
    <ShipmentTracking/> 
    </Flex>
  )
}

export default HomePage