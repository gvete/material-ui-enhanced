import useThemeWithoutDefault from './useThemeWithoutDefault';
import defaultTheme from './defaultTheme';

export default function useTheme() {
  return useThemeWithoutDefault() || defaultTheme;
}
