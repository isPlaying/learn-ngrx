import { ShoppingItem } from './shopping-item.model';

export interface Appstate {
  readonly shopping: Array<ShoppingItem>;
}
