import { Flex, Heading } from "@chakra-ui/react";

const Header = ({ title }: { title: string }) => {
  return (
    <Flex align='center' justify='center'>
      <Heading as='h1' size='2xl' noOfLines={1} padding='2rem'>
        {title}
      </Heading>
    </Flex>
  );
}

export default Header