import { useCallback } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { MdContentCopy } from "react-icons/md";


const ColorButton = ({ colorCode, label }: { colorCode: string, label: string }) => {
  const toast = useToast();
  const copyToClipboard = useCallback(() => {
    let result: TryCopyToClipboard;
    try {
      navigator.clipboard.writeText(colorCode);
      result = { status: "success", message: `Copied ${colorCode} to clipboard` }
    } catch (err) {
      console.error('Failed to copy: ', err);
      result = { status: "error", message: 'Failed to copy to clipboard' }
    }
    toast({
      title: result.message,
      status: result.status,
      duration: 2000,
      isClosable: true
    })
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