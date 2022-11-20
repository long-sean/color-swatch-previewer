import Scheme from './component/Scheme'
import Header from './component/Header'
import SchemeVariant from './component/SchemeVariant'

const isThemeVariant = (toBeDetermined: Array<ColorSchemeVariant> | Array<SchemeColor>): toBeDetermined is Array<ColorSchemeVariant> => {
  return (toBeDetermined as Array<ColorSchemeVariant>)[0].colors != undefined
}

const App = ({ name, details }: ColorScheme) => {
  return (
    <div>
      <Header title={name} />
      {isThemeVariant(details)
        ? <SchemeVariant variants={details} />
        : <Scheme colors={details} />
      }
    </div>
  );
}

export default App
