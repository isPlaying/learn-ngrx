import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  DEL_ITEM = '[SHOPPING] Del Item',
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: ShoppingItem) {}
}
export class DelItemAction implements Action {
  readonly type = ShoppingActionTypes.DEL_ITEM;
  constructor(public payload: string) {}
}

export type ShoppingAction = AddItemAction | DelItemAction;
