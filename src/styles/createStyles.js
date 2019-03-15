// import warning from 'warning';
import { createStyles as createStylesOriginal } from '../theme/createStyles';

// let warnOnce = false;

// To remove in v5
export default function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return createStylesOriginal(styles);
}
