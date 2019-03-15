import useTheme from '../styles/useThemeWithoutDefault';
import getThemeProps from '../styles/getThemeProps';
import useMediaQuery from './useMediaQuery';

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
