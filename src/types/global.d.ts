export { };

declare global {
  interface SchemeColor {
    name: string,
    hex: string,
    rgb?: string,
    hsl?: string
  }

  interface ColorSchemeVariant {
    name: string
    colors: Array<SchemeColor>
  }

  interface ColorScheme {
    name: string,
    details: Array<SchemeColor> | Array<ColorSchemeVariant>
  }
}