import { useState } from "react";
import axios from "axios";
import "./App.css";
import { Flex, Heading, Text, Box, Link, Spinner,Image, Icon } from "@chakra-ui/react";
import {BiErrorCircle} from "react-icons/bi"
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
import choose from "./assets/choose.svg";
import FeatureText from "./component/featureText";
import bgLines from "./assets/bg-lines.png";
import bgChoose from "./assets/choose-bg.svg";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";
import instagram from "./assets/instagram.svg";
import snap from "./assets/snap.svg";
import errorImage from "./assets/error-email.svg"
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

function App() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    axios
      .post("https://waitlistapi.zenfipay.com/subscribe", {email: values.email })
      .then((e) => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setSubmitted(true);
        }, 3000);
        setTimeout(() => {
          setSubmitted(false);
        }, 6000);
      })
      .catch((e) => {
        console.log(e);
      });
      setSubmitting(false)
  };

  return (
    <>
      <Box bg="white" flex={"column"} w="full">
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
                align={"flex-end"}
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
                  {submitted ? (
                    <Flex flex={1} py={["30px", "64px", "64px", "64px"]}>
                      <Flex
                        flexDir={"column"}
                        id="sendIt"
                        px={["30px"]}
                        py={["20px"]}
                        bg={"brand.100"}
                        borderRadius={"10px"}
                        pos={"relative"}
                        justify={"center"}
                        align="center"
                      >
                        <Image
                          src={snap}
                          pos={"absolute"}
                          top={"-24px"}
                          right={"-30px"}
                        />
                        <Text
                          fontWeight={500}
                          textTransform="capitalize"
                          fontSize={["12px", "16px", "18px", "24px"]}
                          letterSpacing={"-2%"}
                          fontFamily={"Poppins"}
                          color={"#1E1E1E"}
                        >
                          You have successfully joined Zenfipay waitlist and you
                          will be informed when we launch. <br />
                          <b>Share the word!</b>
                          <br />
                          <br />
                          Join our{" "}
                          <Link
                            href="#social"
                            color={"#14A6AF"}
                            textDecoration={"underline"}
                            fontStyle={"italic"}
                          >
                            social media
                          </Link>{" "}
                          platforms <br />
                          to stay updated.
                        </Text>
                      </Flex>
                    </Flex>
                  ) : (
                    <Formik
                    initialValues={{ email: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                  >
                    {({
                      handleChange,
                      setFieldTouched,
                      values,
                      errors,
                      isSubmitting,
                      handleSubmit,
                      handleReset,
                      touched,
                    }) => (
                      <form onSubmit={handleSubmit}>
                    <Flex flex={1} pb={["75px", "100px", "150px", "182px"]}>
        
                            <Flex
                              flex={1}
                              css={{width: "100%"}}
                              mt={["30px", "64px", "64px", "64px"]}
                              flexDir={"column"}
                              id="sendIt"
                            >
                              <FormInput
                                placeholder={"Enter your email address"}
                                my={["12px", "19px", "27px", "35px"]}
                                textTransform={"lowercase"}
                                onChange={handleChange}
                                type="email"
                                name="email"
                                error={touched.email && (
                                  <Flex color="red.400" align="center">
                                    <Icon as={BiErrorCircle}/>
                                  <Text px={".2rem"} py=".2rem" align={"center"} >
                                    {errors.email}
                                  </Text>
                                  </Flex>
                                )}
                                onBlur={() => setFieldTouched("email")}
                                values={values.email}
                              />

                              <Button bg="primary.400" type="submit">
                                {loading ? (
                                  <Spinner
                                    thickness="4px"
                                    speed="0.65s"
                                    emptyColor="gray.200"
                                    color="black.500"
                                    size="xl"
                                  />
                                ) : (
                                  <>
                                    Join waitlist{" "}
                                    <Image
                                      pl={"6px"}
                                      src={arrowRight}
                                      height={["10px", "15px", "15px", "20px"]}
                                    />
                                  </>
                                )}
                              </Button>
                            </Flex>
                 
                    </Flex>
                    </form>
                        )}
                      </Formik>
                  )}
                </Flex>
                <Image
                  src={landingPhone}
                  // mt={["50px", "100px", "100px", "20px"]}
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
        <Flex
          w="100%"
          flexDir={"column"}
          px={helper.px}
          bg="white"
          bgImage={bgChoose}
        >
          <Flex w="full">
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
                    Why choose us?{" "}
                  </Heading1>

                  <Flex
                    mt={["40px", "80px", "80px", "120px"]}
                    w="100%"
                    flexWrap={"wrap"}
                    // bg="red
                    justify={"space-between"}
                    alignItems={"center"}
                  >
                    <Flex
                      w={["100%", "100%", "100%", "50%", "50%"]}
                      mb={["50px"]}
                    >
                      <Image src={choose} borderRadius={[42]} w={"100%"} />
                    </Flex>
                    <Flex
                      flexDir={"column"}
                      w={["100%", "100%", "100%", "40%", "40%"]}
                      justify={"center"}
                    >
                      <FeatureText
                        title={"Low Cost"}
                        subtitle={
                          "A built in system with the lowest possible cost that energizes customer to grab it."
                        }
                      />
                      <FeatureText
                        title={"Easy Process"}
                        subtitle={
                          "Easily processable and maintainable system that allows you to process and track records."
                        }
                      />
                      <FeatureText
                        title={"Quick Payments"}
                        subtitle={
                          "Make payment from one part of the world to another in just a few seconds."
                        }
                      />
                      <FeatureText
                        title={"Secure and Safe"}
                        mb={"30px"}
                        subtitle={
                          "Customer's data security is the first priority. Make your transactions securely."
                        }
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Container>
          </Flex>
          <Flex w="full" py={helper.sessionPy}>
            <Container>
              <Flex
                bg={color.dark}
                p={["31px", "41px", "49px", "59px"]}
                bgImage={bgLines}
                borderRadius={"30px"}
                textTransform={"revert"}
                justify={"center"}
                alignItems={"center"}
                flexDir={"column"}
                flex={1}
              >
                <Flex flexDir={"column"} justify="center" align={"center"}>
                  <Heading3
                    color={"white"}
                    textAlign="center"
                    lineHeight={"120%"}
                    textTransform={"revert"}
                    fontSize={["36px"]}
                  >
                    Be among the first <br />
                    to get a Zenfipay account!
                  </Heading3>
                  <Flex
                    flexDir={"column"}
                    mt={["20px", "34px", "44px", "54px"]}
                    align="center"
                    w={["50%", "50%", "60%", "50%", "45%"]}
                    justify={"center"}
                  >
                    <Button
                      color="white"
                      py={["10px", "10px", "22px", "22px"]}
                      px={"22px"}
                      fontSize={["10px", "10px", "16px", "16px", "16px"]}
                      fontFamily="Nexa Normal"
                      as={Link}
                      href={"#sendIt"}
                      bg={"brand.900"}
                      _hover={{
                        bg: "#167758",
                      }}
                    >
                      Get early access
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Container>
          </Flex>
        </Flex>
        <Flex
          id="social"
          bg="white"
          pt={["23px", "43px", "43px", "83px"]}
          pb={["50px", "60px", "65px", "70px"]}
        >
          <Container>
            <Flex justify={"center"}>
              <Link
                mx={"8px"}
                w={["30px", "35px", "35px", "40px"]}
                href="https://twitter.com/ZenfiPay"
                isExternal
              >
                <Image src={twitter} />
              </Link>
              <Link
                mx={"8px"}
                w={["30px", "35px", "35px", "40px"]}
                href="https://web.facebook.com/zenfipay"
                isExternal
              >
                <Image src={facebook} />
              </Link>
              <Link
                mx={"8px"}
                w={["30px", "35px", "35px", "40px"]}
                href="https://www.instagram.com/ZenfiPay/"
                isExternal
              >
                <Image src={instagram} />
              </Link>
              <Link
                mx={"8px"}
                w={["30px", "35px", "35px", "40px"]}
                href="https://www.linkedin.com/company/zenfipay/"
                isExternal
              >
                <Image src={linkedin} />
              </Link>
            </Flex>
          </Container>
        </Flex>
        <Flex
          w="95%"
          mx="auto"
          bg="white"
          pt={["20px", "30px", "35px", "39px"]}
          pb="29px"
          borderTop={"0.5px solid #1E1E1E"}
        >
          <Container>
            <Flex justify={"center"}>
              <PrimaryText
                fontSize={["12px", "13px", "13px", "14px"]}
                px={0}
                textAlign="center"
              >
                © Copyright 2022, All Rights Reserved by Zenfipay
              </PrimaryText>
            </Flex>
          </Container>
        </Flex>
      </Box>
    </>
  );
}

export default App;
