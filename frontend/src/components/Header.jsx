import { useState } from 'react';
import {
  IconButton,
  Image,
  useColorMode,
  Icon,
  Flex,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  DrawerFooter,
} from '@chakra-ui/react';
import { FiSun, FiMoon, FiMenu, FiInstagram } from 'react-icons/fi';
import { RiFacebookCircleFill, RiTwitterXFill } from 'react-icons/ri'
import { SiLinkedin } from 'react-icons/si'
import logo from '../assets/lexship.png';
import { FaWhatsapp } from 'react-icons/fa6';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useState();

  return (
    <Flex
      flexDir={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <span>
        <Link href="/">
          <Image src={logo} alt="Lexship" h={[10, 50]} />
        </Link>

      </span>
      <Flex
        display={{ base: 'none', md: 'flex' }}
        flexDir={'row'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        gap={10}
      >
        <Link _hover={{ textDecoration: 'underline', color: 'blue.400' }} href="/contact-us">
          Contact Us
        </Link>
        <Link _hover={{ textDecoration: 'underline', color: 'blue.400' }} href="/about-us">
          About Us
        </Link>
        <Link _hover={{ textDecoration: 'underline', color: 'blue.400' }} href="/selection-type">
          SignUp/SignIn
        </Link>
        <Flex flexDir={'row'} gap={2}>
          <a href='https://wa.me/8448444097' target="_blank" rel="noopener noreferrer">
            <IconButton icon={<Icon as={FaWhatsapp} />} />
          </a>
          <IconButton
            size={['sm', 'md']}
            aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
            icon={colorMode === 'light' ? <Icon as={FiMoon} /> : <Icon as={FiSun} />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>

      <Flex gap={2} display={{ base: 'flex', md: "none" }} flexDir={'row'}>
        <IconButton
          display={{ base: 'flex', md: "none" }}
          size={['md', 'md']}
          aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
          icon={colorMode === 'light' ? <Icon as={FiMoon} /> : <Icon as={FiSun} />}
          onClick={toggleColorMode}
        />
        <IconButton
          size={['md', 'md']}
          ref={btnRef}
          display={{ base: 'flex', md: 'none' }}
          aria-label="Open menu"
          icon={<FiMenu />}
          onClick={onOpen}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}

      >
        <DrawerOverlay>
          <DrawerContent >
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Menu
            </DrawerHeader>
            <DrawerBody >
              <VStack align="flex-start" gap={10} mt={5}>
                <Link _hover={{ textDecoration: 'underline', color: 'teal.400' }} href="/contact-us">
                  Contact Us
                </Link>
                <Link _hover={{ textDecoration: 'underline', color: 'teal.400' }} href="/about-us">
                  About Us
                </Link>
                <Link _hover={{ textDecoration: 'underline', color: 'teal.400' }} href="/selection-type">
                  SignUp/SignIn
                </Link>
              </VStack>
            </DrawerBody>
            <DrawerFooter gap={5} placeContent={'flex-start'} mb={2}>
              <Link href='https://www.linkedin.com/company/logilink-india/' >
                <SiLinkedin fontSize={'20px'} />
              </Link>
              <Link href='https://x.com/lexvyu'>
                <RiTwitterXFill fontSize={'20px'} />
              </Link>
              <Link href='https://www.instagram.com/lexshipdotcom/'>
                <FiInstagram fontSize={'20px'} />
              </Link>
              <Link href='https://www.facebook.com/lexshipdotcom/'>
                <RiFacebookCircleFill fontSize={'20px'} />
              </Link>
              <a href='https://wa.me/8448444097' target="_blank" rel="noopener noreferrer">
                <FaWhatsapp fontSize={'20px'}/>
              </a>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
};

export default Header;
