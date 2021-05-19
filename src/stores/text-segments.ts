import { makeAutoObservable } from 'mobx';

import { TextSegment } from '../api';
import { RootStore } from './root';

export class TextSegmentStore {
  textSegments: TextSegment[] = [];

  constructor(readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  processText = async (text: string) => {
    // fake loading to display indeterminate loader
    await new Promise(resolve => setTimeout(resolve, 500));
  };
}
