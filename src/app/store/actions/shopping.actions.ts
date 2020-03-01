import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
  LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  DEL_ITEM = '[SHOPPING] Del Item',
  DEL_ITEM_SUCCESS = '[SHOPPING] Del Item Success',
  DEL_ITEM_FAILURE = '[SHOPPING] Del Item Failure',
}
export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;
}
export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;
  constructor(public payload: Array<ShoppingItem>) {}
}
export class LoadShoppingFailureAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;
  constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: ShoppingItem) {}
}
export class AddItemActionSuccessAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
  constructor(public payload: ShoppingItem) {}
}
export class AddItemActionFailureAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;
  constructor(public payload: Error) {}
}
export class DelItemAction implements Action {
  readonly type = ShoppingActionTypes.DEL_ITEM;
  constructor(public payload: string) {}
}
export class DelItemActionSuccessAction implements Action {
  readonly type = ShoppingActionTypes.DEL_ITEM_SUCCESS;
  constructor(public payload: string) {}
}
export class DelItemActionFailureAction implements Action {
  readonly type = ShoppingActionTypes.DEL_ITEM_FAILURE;
  constructor(public payload: Error) {}
}

export type ShoppingAction =
  | LoadShoppingAction
  | LoadShoppingSuccessAction
  | LoadShoppingFailureAction
  | AddItemAction
  | AddItemActionSuccessAction
  | AddItemActionFailureAction
  | DelItemAction
  | DelItemActionSuccessAction
  | DelItemActionFailureAction;
