'use client';

import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';
import cn from '../utils/cn';
import { Text } from '@radix-ui/themes';

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          display: 'inline-block',
          opacity: 1,
          width: 'fit-content',
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: 'easeInOut',
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className='inline'>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className='inline-block'>
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        'text-base sm:text-xl md:text-3xl lg:text-5xl font-normal text-center',
        className
      )}
    >
      {renderWords()}{' '}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'inline-block rounded-sm w-[4px] h-1 md:h-6 lg:h-10 bg-blue-500',
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }));

  const renderWords = () => {
    return (
      <span className='inline-flex'>
        {wordsArray.map((word, idx) => (
          <span
            key={`word-${idx}`}
            className={cn(
              'inline-block',
              word?.text?.join('') === 'transcriptions.'
                ? 'rt-Em font-semibold'
                : ''
            )}
          >
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn(` text-black`, word.className)}
              >
                {char}
              </span>
            ))}
            {idx < wordsArray.length - 1 && '\u00A0'}{' '}
            {/* Add space between words, except for the last word */}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className={cn('flex items-center', className)}>
      <motion.div
        className='overflow-hidden'
        initial={{ width: '0%' }}
        whileInView={{ width: 'fit-content' }}
        transition={{ duration: 2, ease: 'linear', delay: 1 }}
      >
        <Text as='span' size='3' className='whitespace-nowrap inline-block'>
          {renderWords()}
        </Text>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'block rounded-sm w-[4px] h-5 bg-blue-500 ml-1',
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
