import React from 'react'
import ReactDOM from 'react-dom/client'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'
import App from './App'
import { variants } from '@catppuccin/palette'

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: 'default',
        bg: '#F5F5F5',
      },
    }),
  }
});

const displayTheme = getColorScheme();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={true}>
      <App name={displayTheme.name} details={displayTheme.details} />
    </ChakraProvider>
  </React.StrictMode>
)

function getColorScheme(): ColorScheme {
  let details: Array<ColorSchemeVariant> = [];

  for (const k in variants) {
    let colors: Array<SchemeColor> = [];

    for (const color in variants[k]) {
      let variantColour = variants[k][color];
      colors.push({
        name: color,
        hex: variantColour.hex,
        rgb: variantColour.rgb,
        hsl: variantColour.hsl
      });
    }

    details.push({ name: k, colors: colors })
  }

  // return { name: 'Sean Bad Theme', details: [{ name: 'not red', hex: '#FFFF45', rgb: 'asda', hsl: 'asda' }] }
  return { name: 'Catppuccin', details: details }
};
