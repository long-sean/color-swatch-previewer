import Scheme from './component/Scheme'
import Header from './component/Header'
import SchemeVariant from './component/SchemeVariant'
import { Box } from '@chakra-ui/react'

const isThemeVariant = (toBeDetermined: Array<ColorSchemeVariant> | Array<SchemeColor>): toBeDetermined is Array<ColorSchemeVariant> => {
  return (toBeDetermined as Array<ColorSchemeVariant>)[0].colors != undefined
}

const App = ({ name, details }: ColorScheme) => {
  return (
    <div>
      <Header title={name} />
      {isThemeVariant(details)
        ? <SchemeVariant variants={details} />
        : <Box m='0 2rem'><Scheme colors={details} /></Box>
      }
    </div>
  );
}

export default App
