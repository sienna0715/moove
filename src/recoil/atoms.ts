import { atom } from 'recoil';
import lineDatas from '../data/lineDatas';

export const lineAtom = atom({
  key: 'lineAtom',
  default: lineDatas,
});

export const lineSelect = atom({
  key: 'lineSelect',
  default: '',
});

export const stationSelect = atom({
  key: 'stationSelect',
  default: '',
});
