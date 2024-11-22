import React from 'react';
import { Box, Flex, Text } from '@radix-ui/themes';
import {
  LockClosedIcon,
  LockOpen1Icon,
  LockOpen2Icon,
  Share1Icon,
} from '@radix-ui/react-icons';
import { Languages } from 'lucide-react';
import { TypewriterEffectSmooth } from './TypewriterEffect';
import FeaturesRecording from '../images/FeaturesRecording.png';
import FeaturesSharing from '../images/FeaturesSharing.png';
import FeaturesStorage from '../images/FeaturesStorage.png';
import FeaturesTranscript from '../images/FeaturesTranscript.png';

const ImageSliderButtons = () => {
  const ButtonContent = (key, isText = false) => {
    switch (key) {
      case 0:
        return isText ? (
          <Text className='text-center min-h-[4rem] flex items-start justify-center'>
            Mobile recording capabilities for incoming calls, outgoing calls,
            and calls you are already on
          </Text>
        ) : (
          <div className='flex items-center justify-center w-12 h-12 bg-white rounded-full'>
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75' />
              <span className='relative inline-flex rounded-full h-3 w-3 bg-accent'></span>
            </span>
          </div>
        );
      case 1:
        return isText ? (
          <Text className='text-center min-h-[4rem] flex items-start justify-center'>
            Integrates with Dropbox, Google Drive, and more for easy sharing
          </Text>
        ) : (
          <div className='relative flex items-center justify-center w-12 h-12 bg-white rounded-full'>
            <Share1Icon className='w-8 h-8 text-accent' />
            <span className='sr-only'>Share</span>
            <span className='absolute inset-0 animate-share-ring rounded-full border-4 border-accent opacity-0'></span>
            <span className='absolute inset-0 animate-share-ring animation-delay-300 rounded-full border-4 border-accent opacity-0'></span>
          </div>
        );
      case 2:
        return isText ? (
          <Text className='text-center min-h-[4rem] flex items-start justify-center'>
            Unlimited, secure recording storage
          </Text>
        ) : (
          <div className='relative flex items-center justify-center w-12 h-12 bg-white rounded-full'>
            <div className='relative w-8 h-8'>
              <LockOpen2Icon className='absolute inset-0 w-8 h-8 text-accent animate-lock-icon-1 ms-1' />
              <LockOpen1Icon className='absolute inset-0 w-8 h-8 text-accent animate-lock-icon-2' />
              <LockClosedIcon className='absolute inset-0 w-8 h-8 text-accent animate-lock-icon-3' />
            </div>
            <span className='sr-only'>Secure Storage</span>
          </div>
        );
      case 3:
        return isText ? (
          <div className='text-center min-h-[4rem] flex items-start justify-center'>
            <TypewriterEffectSmooth
              words={[
                { text: '99%' },
                { text: 'effective' },
                { text: 'call' },
                {
                  text: 'transcriptions.',
                  className: 'text-accent dark:text-accent',
                },
              ]}
              cursorClassName='bg-accent'
              className='text-center whitespace-nowrap'
              tag='h3'
            />
          </div>
        ) : (
          <div className='relative flex items-center justify-center w-12 h-12 bg-white rounded-full'>
            <Languages className='w-8 h-8 text-accent' />
            <span className='sr-only'>Transcribe</span>
            <span className='absolute inset-0 animate-share-ring rounded-full border-4 border-accent opacity-0'></span>
            <span className='absolute inset-0 animate-share-ring animation-delay-300 rounded-full border-4 border-accent opacity-0'></span>
          </div>
        );

      default:
        return <></>;
    }
  };

  return (
    <Flex
      direction={{ initial: 'column', md: 'row' }}
      gap='2'
      align='stretch'
      justify='center'
      className='w-full overflow-x-auto px-4'
    >
      {[
        FeaturesRecording,
        FeaturesSharing,
        FeaturesStorage,
        FeaturesTranscript,
      ].map((image, index) => (
        <Flex
          key={index}
          direction='column'
          align='center'
          justify='between'
          className='w-full min-w-[280px] max-w-[320px] py-5 h-full'
        >
          <Box className='h-32 flex items-center justify-center'>
            {ButtonContent(index, false)}
          </Box>
          <Box className='h-24 flex items-center justify-center px-4'>
            {ButtonContent(index, true)}
          </Box>
          <Box className='w-full aspect-[390/844] flex items-center justify-center'>
            <img
              src={image}
              loading='lazy'
              alt={`TapeACall App Feature ${index + 1}`}
              className='w-full h-full object-contain'
            />
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default ImageSliderButtons;
