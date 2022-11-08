import { violet, cyan, gray, blackA, whiteA } from '@radix-ui/colors';

const base = {
  'black-01': blackA.blackA1,
  'black-02': blackA.blackA2,
  'black-03': blackA.blackA3,
  'black-04': blackA.blackA4,
  'black-05': blackA.blackA5,
  'black-06': blackA.blackA6,
  'black-07': blackA.blackA7,
  'black-08': blackA.blackA8,
  'black-09': blackA.blackA9,
  'black-10': blackA.blackA10,
  'black-11': blackA.blackA11,
  'black-12': blackA.blackA12,

  'white-01': whiteA.whiteA1,
  'white-02': whiteA.whiteA2,
  'white-03': whiteA.whiteA3,
  'white-04': whiteA.whiteA4,
  'white-05': whiteA.whiteA5,
  'white-06': whiteA.whiteA6,
  'white-07': whiteA.whiteA7,
  'white-08': whiteA.whiteA8,
  'white-09': whiteA.whiteA9,
  'white-10': whiteA.whiteA10,
  'white-11': whiteA.whiteA11,
  'white-12': whiteA.whiteA12,
};

const text = {
  'text-contrast-high': gray.gray12,
  'text-contrast-low': gray.gray11,
  'text-black': blackA.blackA12,
  'text-white': whiteA.whiteA12,
};

const primary = {
  'primary-01': violet.violet1,
  'primary-02': violet.violet2,
  'primary-03': violet.violet3,
  'primary-04': violet.violet4,
  'primary-05': violet.violet5,
  'primary-06': violet.violet6,
  'primary-07': violet.violet7,
  'primary-08': violet.violet8,
  'primary-09': violet.violet9,
  'primary-10': violet.violet10,
  'primary-11': violet.violet11,
  'primary-12': violet.violet12,
};

const secondary = {
  'secondary-01': cyan.cyan1,
  'secondary-02': cyan.cyan2,
  'secondary-03': cyan.cyan3,
  'secondary-04': cyan.cyan4,
  'secondary-05': cyan.cyan5,
  'secondary-06': cyan.cyan6,
  'secondary-07': cyan.cyan7,
  'secondary-08': cyan.cyan8,
  'secondary-09': cyan.cyan9,
  'secondary-10': cyan.cyan10,
  'secondary-11': cyan.cyan11,
  'secondary-12': cyan.cyan12,
};

const colors = {
  ...base,
  ...primary,
  ...secondary,
  ...text,
};

export { colors };
