import { TextSegmentStore } from './text-segments';
import { UIStore } from './ui';

/**
 * The root data store where all domain and ui stores are instantiated
 * See the [mobx docs](https://mobx.js.org/defining-data-stores.html#combining-multiple-stores) for more
 */
export class RootStore {
  readonly uiStore = new UIStore(this);
  readonly textSegmentStore = new TextSegmentStore(this);
}
