
import { IconButton, Image, useColorMode, Icon } from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';
import logo from '../assets/lexship.png';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: '100%' }}>
      <Image src={logo} alt='Lexship' h={[8, 41]} />
      <IconButton
        size={['sm', 'md']}
        aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
        icon={colorMode === 'light' ? <Icon as={FiMoon} /> : <Icon as={FiSun} />}
        onClick={toggleColorMode}
      />
    </header>
  );
};

export default Header;
