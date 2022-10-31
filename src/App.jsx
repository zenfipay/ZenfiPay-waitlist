import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { color } from "./utils/color";
import landingPhone from "./assets/landing-phone.svg";
import Header from "./component/header";
import {
  Heading1,
  Heading3,
  PrimaryHeading,
  PrimaryText,
} from "./component/typography";
import Container from "./component/container";
import Button from "./component/button";
import FormInput from "./component/Form/FormInput";
import arrowRight from "./assets/arrow-right.svg";
import crystal from "./assets/crystal.png";
import { helper } from "./utils/help";
import payment from "./assets/payment.svg";
import request from "./assets/request.svg";
import exchange from "./assets/exchange.svg";
import FeatureCard from "./component/featureCard";
import choose from './assets/choose.png'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box flex={"column"} w="full">
        <Flex
          bg={color.dark}
          backgroundImage={crystal}
          backgroundPosition={"bottom"}
          w="full"
          flex={"1"}
          pos={"relative"}
          flexDir={"column"}
          justify={"space-between"}
        >
          <Flex px={helper.px}>
            <Header />
          </Flex>
          <Flex w="100%" px={helper.px}>
            <Container>
              <Flex
                flex="1"
                mt={["49px", "62px", "62px", "62px"]}
                justify={[
                  "center",
                  "center",
                  "center",
                  "space-between",
                  "space-between",
                ]}
                flexWrap={"wrap"}
              >
                <Flex
                  flexDir={"column"}
                  w={["100%", "100%", "100%", "45%", "45%"]}
                >
                  <Heading1>
                    A better way to make transactions globally
                  </Heading1>
                  <PrimaryHeading color="white" pr="10%">
                    A simple and highly secure money transfer around the world.
                  </PrimaryHeading>
                  <Flex
                    flex="1"
                    mt={["30px", "64px", "64px", "64px"]}
                    flexDir={"column"}
                  >
                    <FormInput
                      placeholder={"Enter your email address"}
                      my={["12px", "19px", "27px", "35px"]}
                    />
                    <Button bg="primary.400">
                      Join waitlist
                      <Image
                        pl={"6px"}
                        src={arrowRight}
                        height={["10px", "15px", "15px", "20px"]}
                      />
                    </Button>
                  </Flex>
                </Flex>
                <Image
                  src={landingPhone}
                  mt={["50px", "100px", "100px", "20px"]}
                  height={["371px", "100%", "100%", "100%"]}
                />
              </Flex>
            </Container>
          </Flex>
        </Flex>
        <Flex w="100%" px={helper.px} bg="white">
          <Container>
            <Flex
              flex="1"
              py={helper.sessionPy}
              justify={[
                "center",
                "center",
                "center",
                "space-between",
                "space-between",
              ]}
              flexWrap={"wrap"}
            >
              <Flex
                flexDir={"column"}
                w={["100%", "100%", "100%", "100%", "100%"]}
              >
                <Heading1
                  color={color.dark}
                  textAlign="center"
                  fontSize={["32px", "42px", "55px", "64px"]}
                  px={["10px", "40px", "40px", "80px", "210px"]}
                >
                  Global payment made simple and fast for everyone
                </Heading1>

                <Flex
                  mt={["40px", "80px", "80px", "120px"]}
                  w="100%"
                  justify={"center"}
                  flexWrap={"wrap"}
                >
                  <FeatureCard
                    imageSrc={payment}
                    title="Online Payments"
                    subTitle="Make endless payments in your preferred way."
                  />
                  <FeatureCard
                    imageSrc={exchange}
                    title="Currency Exchange"
                    subTitle="From one currency to another, you can swap them easily."
                  />
                  <FeatureCard
                    imageSrc={request}
                    title="Payment  Request"
                    subTitle="Request for payments and receive it within seconds."
                  />
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Flex>
        <Flex w="100%" px={helper.px} bg="white">
          <Container>
            <Flex
              flex="1"
              justify={[
                "center",
                "center",
                "center",
                "space-between",
                "space-between",
              ]}
              flexWrap={"wrap"}
            >
              <Flex
                flexDir={"column"}
                w={["100%", "100%", "100%", "100%", "100%"]}
              >
                <Heading1
                  color={color.dark}
                  textAlign="center"
                  fontSize={["32px", "42px", "55px", "64px"]}
                  px={["10px", "40px", "40px", "80px", "210px"]}
                >
Why choose us?                </Heading1>

                <Flex
                  mt={["40px", "80px", "80px", "120px"]}
                  w="100%"
                  flexWrap={"wrap"}
                  bg="red"
                  justify={"space-between"}
                >
                 <Image src={choose} borderRadius={[42]} w={['50%']}    />
                 <Flex   flexDir={"column"} w={['40%']} bg="yellow">
                  <Heading3>Low Cost</Heading3>
                  <PrimaryText>A built in system with the lowest possible 
cost that energizes customer to grab it.</PrimaryText>
                 </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </Box>
    </>
  );
}

export default App;
