import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Patato', 10), 
    new Ingredient('Oil', 250),
    new Ingredient('Salt', 10),
    new Ingredient('Flower', 250),
    new Ingredient('Egg', 4),
  ];

  constructor() { }


  ngOnInit(): void {
  }
  onAddedIngredient(recivedData:Ingredient){
      this.ingredients.push(recivedData)
  }
}
