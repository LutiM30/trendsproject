import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  Container,
  Em,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import { Counter, MetricCard, metrics } from "./Numbers";
import reliableImage from "../images/reliable.png";
import flexibleImage from "../images/flexible.png";
import { Check } from "lucide-react";
import sharing from "../images/sharing.png";

const Compare = () => {
  return (
    <Box py="6">
      <Container size="3" className="mx-auto">
        <Flex direction="column" gap="6" className="items-center text-center">
          <Heading size="8" className="text-foreground">
            TapeACall vs. other call recorder apps
          </Heading>
          <Flex direction="column" gap="6" className="items-center text-center">
            <Box maxWidth="750px p-2">
              <Card>
                <Flex gap="3" align="center">
                  <img
                    src={reliableImage}
                    alt="More Reliable"
                    className="h-auto p-3 w-fit"
                  />

                  <Box>
                    <Heading size="6" className="text-red-950">
                      <Em>More Reliable</Em>
                    </Heading>
                  </Box>
                  <Box>
                    <ul>
                      <li className="flex flex-row flex-1 gap-2">
                        <Check className="text-accent" />
                        <Text>Crystal-clear audio quality</Text>
                      </li>
                      <li className="flex flex-row flex-1 gap-2">
                        <Check className="text-accent" />
                        <Text>99% effective call transcriptions</Text>
                      </li>
                      <li className="flex flex-row flex-1 gap-2">
                        <Check className="text-accent" />
                        <Text>
                          Leading call recorder app for iPhone and Android
                        </Text>
                      </li>
                    </ul>
                  </Box>
                </Flex>
              </Card>
              <Card className="mt-2">
                <Flex gap="3" align="center">
                  <img
                    src={flexibleImage}
                    alt="More Reliable"
                    className="h-auto p-3 w-fit"
                  />

                  <Box>
                    <Heading size="6" className="text-red-950">
                      <Em>More Flexible</Em>
                    </Heading>
                  </Box>
                  <Box>
                    <ul>
                      <li className="flex flex-row flex-1 gap-2">
                        <Check className="text-accent" />
                        <Text>
                          Works for incoming calls, outgoing calls, and calls
                          you’re already on
                        </Text>
                      </li>
                      <li className="flex flex-row flex-1 gap-2">
                        <Check className="text-accent" />
                        <Text>No recording limits or storage fees</Text>
                      </li>
                      <li className="flex flex-row flex-1 gap-2">
                        <Check className="text-accent" />
                        <Text>Works around the world</Text>
                      </li>
                    </ul>
                  </Box>
                </Flex>
              </Card>
              <Card className="mt-2">
                <Flex gap="3" align="center">
                  <Box className="flex-1">
                    <img
                      src={sharing}
                      alt="More Reliable"
                      className="h-auto p-3 w-fit min-w-[150px]"
                    />
                  </Box>
                  <Box>
                    <Heading size="6" className="text-red-950">
                      <Em>More Flexible</Em>
                    </Heading>
                    <ul>
                      <li className="flex flex-row flex-1 gap-2">
                        <Check className="text-accent" />
                        <Text>
                          Works for incoming calls, outgoing calls, and calls
                          you’re already on
                        </Text>
                      </li>
                      <li className="flex flex-row flex-1 gap-2">
                        <Check className="text-accent" />
                        <Text>No recording limits or storage fees</Text>
                      </li>
                      <li className="flex flex-row flex-1 gap-2">
                        <Check className="text-accent" />
                        <Text>Works around the world</Text>
                      </li>
                    </ul>
                  </Box>
                </Flex>
              </Card>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Compare;
