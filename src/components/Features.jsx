import React from 'react';
import {
  Box,
  Button,
  Container,
  Em,
  Flex,
  Heading,
  Strong,
  Text,
} from '@radix-ui/themes';
import ImageSliderButtons from './ImageSliderButtons';

const Features = () => {
  return (
    <>
      <Box
        py='6'
        style={{
          backgroundColor: 'var(--red-1)',
        }}
        className='flex justify-center items-center'
      >
        <Container
          size='3'
          className='flex justify-center items-center mx-auto mt-5'
        >
          <Flex
            gap='4'
            className='flex-col justify-center items-center text-center md:text-center'
          >
            {/* Text Section */}
            <Box className='flex-1 flex flex-col items-center text-foreground'>
              <Flex direction='column' gap='3' className='w-full md:w-auto'>
                <Heading size='8' align='Center'>
                  The easiest way to record phone calls on your smartphone
                </Heading>
                <Text size='5' className='mt-2' align='center'>
                  <Em>
                    With crystal-clear call recording technology,{' '}
                    <Strong>TapeACall</Strong> is the most reliable call
                    recorder on the market.
                  </Em>
                </Text>
              </Flex>
            </Box>

            {/* Image Section */}
            <Box className='flex-1'>
              <ImageSliderButtons />
            </Box>
            {/* Image Section */}
            <Box className='flex-1'>
              <a
                href='/features'
                target='_self'
                className='red-cta w-button'
                rel='noreferrer'
                style={{ cursor: 'pointer' }}
              >
                <Button size='4'>
                  <Strong>
                    <Em>See All Features</Em>
                  </Strong>
                </Button>
              </a>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Features;
