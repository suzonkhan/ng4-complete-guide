import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  ingredientName:string = "Suzon";
  @ViewChild('inputIngredientName') inputNameRef: ElementRef;
  @ViewChild('inputIngredientPrice') inputPriceRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  addIngredienToShop(){
      const ingName = this.inputNameRef.nativeElement.value;
      const ingPrice =  this.inputPriceRef.nativeElement.value;
      const ingBundel = new Ingredient(ingName, ingPrice);
      this.ingredientAdded.emit(ingBundel);
      // console.log(this.ingBundel);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
