import { makeAutoObservable } from 'mobx';

import { RootStore } from './root';

/**
 * See the [mobx docs](https://mobx.js.org/defining-data-stores.html#ui-stores) for more on UI stores.
 */
export class UIStore {
  constructor(readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }
}
