import { atom } from 'recoil';

export const hamburgerState = atom<boolean>({
  key: 'hamburgerState',
  default: false,
});
