import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Scheme from "./Scheme";


const SchemeVariant = ({ variants }: { variants: Array<ColorSchemeVariant> }) => {
  return (
    <Tabs variant='soft-rounded' colorScheme='blue'>
      <TabList ml='1rem'>
        {variants.map(variant => <Tab>{variant.name}</Tab>)}
      </TabList>
      <TabPanels>
        {variants.map(variant =>
          <TabPanel>
            <Scheme colors={variant.colors} />
          </TabPanel>)}
      </TabPanels>
    </Tabs>
  )
}

export default SchemeVariant