import { makeAutoObservable } from 'mobx';

import { TextSegment, processText } from '../api';
import { RootStore } from './root';

export class TextSegmentStore {
  textSegments: TextSegment[] = [];
  loading: Boolean = false;
  mobText: string = ""
  constructor(readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }
  back = () =>{this.loading = false};
  processText = async (text: string) => {
    this.mobText = text
    let test = await processText({text});
    this.textSegments = test
    await new Promise(resolve => setTimeout(resolve, 500));
    setTimeout(() => {
      this.loading = true
    }, 500);
  };
}
