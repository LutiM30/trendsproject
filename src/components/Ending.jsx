import React from 'react';
import { Box, Button, Container, Em, Flex, Heading } from '@radix-ui/themes';

const Ending = () => {
  return (
    <Box py='6' className='bg-[var(--red-12)]'>
      <Container size='3' className='mx-auto'>
        <Flex direction='column' gap='6' className='items-center text-center'>
          <Heading size='8' className='text-background'>
            <Em>Start recording calls today</Em>
          </Heading>
          <Box className='justify-center w-full p-4 align-middle bg-gray-700 rounded-lg shadow-lg'>
            <a
              href='https://www.tapeacall.com/compare'
              target='_blank'
              className='red-cta w-button'
              rel='noreferrer'
              style={{ cursor: 'pointer' }}
            >
              <Button size={'4'} variant='solid' style={{ cursor: 'pointer' }}>
                Try for free
              </Button>
            </a>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Ending;
