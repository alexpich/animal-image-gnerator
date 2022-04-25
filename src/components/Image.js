import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  VStack,
  Select,
  Spacer,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Image = props => {
  return (
    <>
      <Container p={3}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          Image Goes Here
        </Box>
        <Flex>
          <Box textAlign={'left'}>
            <Button>Download</Button>
          </Box>
          <Spacer />
          <Box>
            <StarIcon />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Image;
