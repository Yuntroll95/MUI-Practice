import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const useClick = atom({
  key: 'click',
  default: 'true',
});

export { useClick };
