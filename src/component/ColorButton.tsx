import { Button } from "@chakra-ui/react";
import { MdContentCopy } from "react-icons/md";

const ColorButton = ({ colorCode, label }: { colorCode: string, label: string }) => {
  return (
    <Button
      variant='link'
      iconSpacing='1rem'
      colorScheme='blue'
      aria-label={`Copy ${label}`}
      leftIcon={<MdContentCopy />}>
      {colorCode}
    </Button>
  );
}

export default ColorButton