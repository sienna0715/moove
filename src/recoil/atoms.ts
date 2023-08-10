import { atom } from 'recoil';
import lineDatas from '../data/lineDatas';

export const lineAtom = atom({
  key: 'lineAtom',
  default: lineDatas,
});

export const currentAtom = atom({
  key: 'currentAtom',
  default: '',
});

export const stationInfoAtom = atom({
  key: 'stationInfoAtom',
  default: {},
});
