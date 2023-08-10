import { atom } from 'recoil';
import lineDatas from '../data/lineDatas';

export const lineAtom = atom({
  key: 'lineAtom',
  default: lineDatas,
});

export const currentStationAtom = atom({
  key: 'currentStationAtom',
  default: '',
});

export const stationInfoAtom = atom({
  key: 'stationInfoAtom',
  default: [],
});
