import { SimpleGrid } from "@chakra-ui/react";
import Color from "./Color";

const Scheme = ({ colors }: { colors: Array<SchemeColor> }) => {
  return (
    <SimpleGrid minChildWidth='300px' spacingX='3rem' spacingY='2rem'>
      {colors.map(color => <Color {...color} />)}
    </SimpleGrid>
  );
}

export default Scheme