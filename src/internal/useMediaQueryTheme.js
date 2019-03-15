
import useMediaQuery from './useMediaQuery';
import useTheme from '../theme/useTheme';
import getThemeProps from '../theme/getThemeProps';


function useMediaQueryTheme(query, options) {
  const theme = useTheme();
  const props = getThemeProps({
    theme,
    name: 'MuiUseMediaQuery',
    props: {},
  });

  return useMediaQuery(query, { ...props, ...options });
}

export default useMediaQueryTheme;
