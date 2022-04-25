import React from 'react';
import { Box, Button, Container, VStack, Select } from '@chakra-ui/react';

const AnimalSelector = props => {
  return (
    <>
      <Container>
        <VStack p={4}>
          <Button>Get Random Animal</Button>
          <h3>OR</h3>
          <Select placeholder="Select Animal">
            {/* TODO: Get list from database */}
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </VStack>
      </Container>
      <Button>Generate Image</Button>
    </>
  );
};

export default AnimalSelector;
