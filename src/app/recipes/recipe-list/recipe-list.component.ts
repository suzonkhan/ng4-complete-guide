import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  // data source https://recipes.timesofindia.com/recipes/chicken-recipes/61545604?curpg=3
  recipys: Recipe[] = [
    new Recipe('Frinch Fry', 'If you love crunchy potato snacks, then you have to try this super quick and easy French Fries recipe.', 'https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=700&height=500'),
    new Recipe('Ghee Roast Chicken', 'Ghee Roast Chicken is a Mangalorean recipe that has succulent chicken pieces cooked in ground spices gravy.', 'https://static.toiimg.com/thumb/84546166.cms?imgsize=402427&width=700&height=500'),
    new Recipe('BBQ Chicken', 'Why go all the way to the restaurant, when you can savour the same taste at home!', 'https://static.toiimg.com/thumb/83330410.cms?imgsize=498236&width=700&height=500'),
    new Recipe('Chicken Veggie Broth Recipe', 'Chicken Veggie Broth is a delicious soup recipe that you can prepare at home for your loved ones in winter and monsoon season.', 'https://static.toiimg.com/thumb/64207335.cms?imgsize=272882&width=700&height=500'),
    new Recipe('Tibetan Chicken Broth Recipe', 'Craving for a delicious and hot chicken soup? Tibetan Chicken Broth recipe is perfect for a chilly winter night when you want something hot and wholesome.', 'https://static.toiimg.com/thumb/62380244.cms?imgsize=272882&width=700&height=500'),
  ];
  @Output() selectedRecipeWas = new EventEmitter<Recipe>();

  onRecipeSelected(recipyItem: Recipe){
    console.log(recipyItem);
    this.selectedRecipeWas.emit(recipyItem);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
