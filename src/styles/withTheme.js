import { withThemeCreator } from '../theme/withTheme';
import defaultTheme from './defaultTheme';

const withTheme = withThemeCreator({
  defaultTheme,
});

export default withTheme;
