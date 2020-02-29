import { Component, OnInit } from '@angular/core';
import { Appstate } from './store/models/app-state.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AddItemAction, DelItemAction } from './store/actions/shopping.actions';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };
  constructor(private store: Store<Appstate>) {}
  ngOnInit(): void {
    this.shoppingItems$ = this.store.pipe(select('shopping'));
  }

  addItem() {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: '', name: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(new DelItemAction(id));
    this.newShoppingItem = { id: '', name: '' };
  }
}
