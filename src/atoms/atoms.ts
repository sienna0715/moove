import { atom } from 'recoil';
import lineDatas from '../data/lineDatas';

const lineAtom = atom({
  key: 'lineAtom',
  default: lineDatas,
});

export default lineAtom;
