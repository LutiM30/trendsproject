import React, { useEffect, useState } from 'react';
import { Box, Container, Em, Flex, Heading, Text } from '@radix-ui/themes';
import NumberFlow from '@number-flow/react';

const Counter = ({ from, to, suffix }) => {
  const [counter, setCounter] = useState(from);

  useEffect(() => {
    setCounter(from);
    const fraction = (to - from) / 6;
    const step = Math.abs(fraction);

    const controls = setInterval(() => {
      setCounter((prevCount) => {
        if (to > from) {
          const nextCount = prevCount + step;
          return nextCount >= to ? to : nextCount;
        } else if (to < from) {
          const nextCount = prevCount - step;
          return nextCount <= to ? to : nextCount;
        }
        return to;
      });
    }, 1000);

    return () => clearInterval(controls);
  }, [from, to]);

  const displayValue = Math.round(counter * 100) / 100;

  return (
    <NumberFlow
      value={displayValue}
      suffix={suffix}
      format={{
        trailingZeroDisplay: 'stripIfInteger',
      }}
    />
  );
};

const MetricCard = ({ number, suffix, text }) => (
  <Flex
    direction='column'
    align='center'
    className='w-full rounded-3xl shadow-lg shadow-red-100 min-w-[280px] max-w-[320px] p-6 bg-[var(--red-12)]'
  >
    <Box className='mb-4'>
      <Heading size='8' className='text-red-50'>
        <Em>
          <Counter from={0} to={number || 25.7} suffix={suffix || 'million+'} />
        </Em>
      </Heading>
    </Box>
    <Text size='4' className='text-red-50 text-center'>
      {text || 'calls recorded'}
    </Text>
  </Flex>
);

const Numbers = () => {
  const metrics = [
    {
      number: 25.7,
      suffix: 'million+',
      text: 'calls recorded',
    },
    {
      number: 3.73,
      suffix: 'million+',
      text: 'hours of recording completed',
    },
    {
      number: 205000,
      suffix: '+',
      text: 'transcriptions processed',
    },
  ];

  return (
    <Box py='6' className='bg-[var(--red-2)]'>
      <Container size='3' className='mx-auto'>
        <Flex direction='column' gap='6' className='items-center text-center'>
          <Heading size='8' className='text-foreground'>
            The trusted choice for call recording
          </Heading>

          <Flex
            direction={{ initial: 'column', md: 'row' }}
            gap='4'
            className='w-full justify-center'
          >
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Numbers;
