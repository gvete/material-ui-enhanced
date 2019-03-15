import withStylesWithoutDefault from '../theme/withStyles';
import defaultTheme from './defaultTheme';

function withStyles(stylesOrCreator, options) {
  return withStylesWithoutDefault(stylesOrCreator, {
    defaultTheme,
    ...options,
  });
}

export default withStyles;
