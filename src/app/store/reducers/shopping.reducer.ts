import { ShoppingItem } from '../models/shopping-item.model';
import {
  ShoppingAction,
  ShoppingActionTypes,
} from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [];

export function ShoppingReducer(
  state: Array<ShoppingItem> = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ShoppingActionTypes.DEL_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
