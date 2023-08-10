import { atom } from 'recoil';
import lineDatas from '../data/lineDatas';
import stationNameDatas from '../data/stationDatas';

export const lineAtom = atom({
  key: 'lineAtom',
  default: lineDatas,
});

export const currentStationAtom = atom({
  key: 'currentStationSelect',
  default: '',
});

export const lineSelectAtom = atom({
  key: 'lineSelect',
  default: '',
});

export const stationNameAtom = atom({
  key: 'stationNameAtom',
  default: stationNameDatas,
});

export const isDropdownAtom = atom({
  key: 'isDropdownAtom',
  default: false,
});

export const stationInfoAtom = atom({
  key: 'stationInfoAtom',
  default: [],
});
