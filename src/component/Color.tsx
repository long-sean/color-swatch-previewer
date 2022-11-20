import { Card, CardBody, CardHeader, Heading, VStack } from '@chakra-ui/react'
import ColorButton from './ColorButton'

const Color = (color: SchemeColor) => {
  return (
    <Card
      overflow='hidden'
      variant='elevated'
      mb='1rem'>
      <CardHeader minHeight='10rem' bg={color.hex} />
      <CardBody backgroundColor='white'>
        <Heading size='lg' mb='1rem'>{color.name}</Heading>
        <VStack align='start' ml='1rem'>
          <ColorButton colorCode={color.hex} label='hex' />
          {color.rgb && <ColorButton colorCode={color.rgb} label='rgb' />}
          {color.hsl && <ColorButton colorCode={color.hsl} label='hsl' />}
        </VStack>
      </CardBody>
    </Card>
  )
}

export default Color