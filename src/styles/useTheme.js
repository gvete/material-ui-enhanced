import { useTheme as useThemeWithoutDefault } from '../theme/useTheme';
import defaultTheme from './defaultTheme';

export default function useTheme() {
  return useThemeWithoutDefault() || defaultTheme;
}
