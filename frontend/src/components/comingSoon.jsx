import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  IconButton,
  VStack,
  HStack,
  Link,
} from '@chakra-ui/react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin} from 'react-icons/fi';

const ComingSoon = () => {
  const launchDate = new Date('2024-12-31T00:00:00'); // Set your launch date here
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft(launchDate));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(launchDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  function calculateTimeLeft(date) {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <Box  minHeight="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Container maxW="container.md" textAlign="center">
        <VStack spacing={8}>
          <Heading as="h1" size="2xl">
            Coming Soon
          </Heading>
          <Text fontSize="lg">Our website is under construction. We will be here soon with our new awesome site.</Text>
          <HStack spacing={4}>
            <Box textAlign="center">
              <Text fontSize="3xl" fontWeight="bold">{timeLeft.days}</Text>
              <Text>Days</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="3xl" fontWeight="bold">{timeLeft.hours}</Text>
              <Text>Hours</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="3xl" fontWeight="bold">{timeLeft.minutes}</Text>
              <Text>Minutes</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="3xl" fontWeight="bold">{timeLeft.seconds}</Text>
              <Text>Seconds</Text>
            </Box>
          </HStack>
          <Button colorScheme="blue" size="lg">
            Notify Me
          </Button>
          <HStack spacing={4}>
            <Link href="https://www.facebook.com/lexshipdotcom/" isExternal>
              <IconButton aria-label="Facebook" icon={<FiFacebook />} />
            </Link>
            <Link href="https://x.com/lexvyu" isExternal>
              <IconButton aria-label="Twitter" icon={<FiTwitter />} />
            </Link>
            <Link href="https://www.instagram.com/lexshipdotcom/" isExternal>
              <IconButton aria-label="Instagram" icon={<FiInstagram />} />
            </Link>
            <Link href="https://www.linkedin.com/company/logilink-india/" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FiLinkedin />} />
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default ComingSoon;
