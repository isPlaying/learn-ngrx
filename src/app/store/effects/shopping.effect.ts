import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {
  LoadShoppingAction,
  ShoppingActionTypes,
  LoadShoppingSuccessAction,
  LoadShoppingFailureAction,
  AddItemAction,
  AddItemActionSuccessAction,
  AddItemActionFailureAction,
  DelItemAction,
  DelItemActionSuccessAction,
  DelItemActionFailureAction,
} from '../actions/shopping.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ShoppingService } from 'src/app/services/shopping.service';
import { of } from 'rxjs';

@Injectable()
export class ShoppingEffects {
  @Effect() loadShopping$ = this.actions$.pipe(
    ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
    mergeMap(() =>
      this.shoppingService.getShoppingItems().pipe(
        map(
          data => new LoadShoppingSuccessAction(data),
          catchError(error => of(new LoadShoppingFailureAction(error)))
        )
      )
    )
  );

  @Effect() addShoppingItem$ = this.actions$.pipe(
    ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
    mergeMap(data =>
      this.shoppingService.addShoppingItem(data.payload).pipe(
        map(
          () => new AddItemActionSuccessAction(data.payload),
          catchError(error => of(new AddItemActionFailureAction(error)))
        )
      )
    )
  );

  @Effect() delShoppingItem$ = this.actions$.pipe(
    ofType<DelItemAction>(ShoppingActionTypes.DEL_ITEM),
    mergeMap(data =>
      this.shoppingService.delShoppingItem(data.payload).pipe(
        map(
          () => new DelItemActionSuccessAction(data.payload),
          catchError(error => of(new DelItemActionFailureAction(error)))
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}
}
