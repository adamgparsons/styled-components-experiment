import {
  compose,
  alignContent,
  alignItems,
  alignSelf,
  background,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  borderBottom,
  borderColor,
  borderLeft,
  borderRadius,
  borderRight,
  borders,
  borderStyle,
  borderTop,
  bottom,
  boxShadow,
  color,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  lineHeight,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  order,
  overflow,
  position,
  right,
  size,
  space,
  top,
  verticalAlign,
  width,
  zIndex
} from "styled-system";

export const colors = compose(color);

export const common = compose(
  color,
  space
);

export const backgroundProp = compose(
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat
);

export const border = compose(
  borders,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  boxShadow,
  borderRadius,
  borderStyle
);

export const typography = compose(
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color
);

export const layout = compose(
  display,
  size,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  overflow,
  verticalAlign
);

export const positioning = compose(
  position,
  zIndex,
  top,
  right,
  bottom,
  left
);

export const spacing = compose(space);

export const flexContainer = compose(
  // flex container props (display: flex)
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  order
);

export const flexItem = compose(
  flex,
  justifySelf,
  alignSelf
);

export default (colors,
common,
backgroundProp,
border,
typography,
layout,
positioning,
spacing,
flexContainer,
flexItem);
