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

const HomeHero = () => {
  return (
    <Box
      py='8'
      style={{
        backgroundColor: 'var(--red-12)',
      }}
      className='flex justify-center items-center'
    >
      <Container
        size='4'
        className='flex justify-center items-center mx-auto mt-5'
      >
        <Flex
          gap='4'
          className='flex flex-col md:flex-row justify-center items-center text-center md:text-left'
        >
          {/* Text Section */}
          <Box className='flex-1 flex flex-col items-end text-background'>
            <Flex direction='column' gap='3' className='w-full md:w-auto'>
              <Heading size='9' align='right'>
                The leading call <br />
                recorder app for <br />
                iPhone and Android
              </Heading>
              <Text size='7' className='mt-2' align='right'>
                <Em>Record important phone calls with</Em>{' '}
                <Strong>TapeACall</Strong>.
              </Text>
              <Flex justify='end' className='w-full md:w-auto' mt={2}>
                <a
                  href='https://app.tapeacall.com/'
                  target='_blank'
                  className='red-cta w-button'
                  rel='noreferrer'
                  style={{ cursor: 'pointer' }}
                >
                  <Button
                    size={'4'}
                    variant='solid'
                    style={{ cursor: 'pointer' }}
                  >
                    Try for Free
                  </Button>
                </a>
              </Flex>
            </Flex>
          </Box>

          {/* Image Section */}
          <Box className='flex-2'>
            <img
              src='https://cdn.prod.website-files.com/60adf821e30fb46b2464e068/6125095e6b3c8b0c8f1ac828_TapeACallHeroImage-LogoFix.png'
              loading='lazy'
              alt='TapeACall App'
              className='image mx-auto h-auto max-w-7xl sm:mx-2 md:mx-2'
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HomeHero;
