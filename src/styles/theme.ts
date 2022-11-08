import {
  colors,
  fonts,
  borders,
  spacings,
  zIndices,
  transitions,
  sizes,
} from './tokens';

export default {
  grid: sizes,
  border: borders.radius,
  font: {
    families: fonts.families,
    weights: fonts.weights,
    sizes: fonts.sizes,
    lineHeights: fonts.lineHeights,
    letterSpacings: fonts.letterSpacings,
  },
  colors: colors,
  spacings: spacings,
  indices: zIndices,
  transition: transitions,
} as const;
