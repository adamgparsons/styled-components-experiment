export const borders = [0, "1px solid"];

export const borderWidths = [
  "0",
  ".063rem",
  ".125rem",
  ".25rem",
  "5rem",
  "1rem",
  "2rem"
];

export const breakpoints = {
  ns: "screen and (min-width: 48rem)",
  m: "screen and (min-width: 48rem) and (max-width: 64rem)",
  l: "screen and (min-width: 64rem)"
};
export const colors = {
  heritageBlue: "#004b88",
  heritageBlue40: "#97a8cc",
  heritageYellow40: "#fde5c4",
  blueDark: "#229cff",
  bluePrimary: "#8ac4ff",
  blueMid: "#caeaff",
  blueLight: "#f2f8ff",
  turquoiseDark: "#5cc0b5",
  turquoisePrimary: "#81cec6",
  turquoiseMid: "#b8e3df",
  turquoiseLight: "#eaf9f7",
  redLight: "#fae1e1",
  black: "#000000",
  darkGrey: "#333333",
  midGrey: "#606060",
  grey: "#9f9f9f",
  lightGrey: "#dfdfdf",
  paleGrey: "#f2f2f2",
  white: "#ffffff",
  heritageYellow: "#fcbb69",
  redPrimary: "#df3034"
};

export const fontSizes = ["14px", "16px", "20px", "28px", "36px"];

export const heights = [4, 8, 12, 16, 24, 32, 40];

export const space = [
  "0px",
  "4px",
  "8px",
  "12px",
  "16px",
  "24px",
  "32px",
  "40px"
];

export const lineHeights = ["20px", "24px", "28px", "36px", "48px"];

export const letterSpacings = [0.8, 1.6, 4];

export const fonts = ["Open Sans", "helvetica neue", "Arial"];

export const fontWeights = {
  regular: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 800
};

export const radii = [
  "0",
  ".063rem",
  ".125rem",
  ".25rem",
  "5rem",
  "1rem",
  "2rem"
];

export const textStyles = {
  heading1: {
    fontSize: fontSizes[4],
    fontWeight: fontWeights.extraBold,
    lineHeight: lineHeights[4],
    color: colors.heritageBlue,
    marginBottom: space[7]
  },
  heading2: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights[3],
    color: colors.heritageBlue,
    marginTop: space[7],
    marginBottom: space[4]
  },
  heading3: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights.semiBold,
    lineHeight: lineHeights[2],
    color: colors.heritageBlue,
    marginTop: space[7],
    marginBottom: space[4]
  },
  paragraph: {
    fontSize: fontSizes[1],
    lineHeight: lineHeights[1],
    marginBottom: space[4]
  }
};

export const widths = {
  charWidth2: "7.2ex",
  charWidth4: "10.8ex",
  charWidth8: "18ex+3ex",
  charWidth20: "38.4ex+3ex"
};

export const zIndices = [100, 200, 300, 400, 500];

const theme = {
  borders,
  breakpoints,
  colors,
  fontSizes,
  heights,
  space,
  lineHeights,
  letterSpacings,
  fonts,
  fontWeights,
  radii,
  textStyles,
  widths,
  zIndices
};

export default theme;
