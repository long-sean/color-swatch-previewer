import { useCallback } from "react";
import { Button } from "@chakra-ui/react";
import { MdContentCopy } from "react-icons/md";

const ColorButton = ({ colorCode, label }: { colorCode: string, label: string }) => {
  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(colorCode);
      console.log(`Copied '${colorCode}' to clipboard`);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }, [colorCode]);

  return (
    <Button
      onClick={copyToClipboard}
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