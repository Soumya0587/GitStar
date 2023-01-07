import { Button, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

const CommonCard = ({
  name,
  // language,
  avatar,
  stargazers_count,
  forks_count,
  html_url,
}) => {
  return (
    <Link
      href={html_url}
      target="_blank"
      textDecoration="none"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      borderRadius="10px"
    >
      <Card
        direction={{ base: "column", sm: "column" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={avatar}
          alt={name}
          margin={"auto"}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{name}</Heading>

            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with
              espresso and steamed milk.
            </Text>
          </CardBody>

          <CardFooter display="flex" justifyContent="space-between">
            <Button variant="solid" colorScheme="blue">
              🖇{forks_count}
            </Button>
            <Button variant="solid" colorScheme="blue">
              ⭐{stargazers_count}
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Link>
  );
};

export default CommonCard;