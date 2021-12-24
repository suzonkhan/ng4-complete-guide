import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeSingleItem: Recipe;
  @Output() viewDetails = new EventEmitter<void>();
  viewItemDetails(){
    this.viewDetails.emit() 
    // console.log(this.viewDetails);
    
    }
  constructor() { }

  ngOnInit(): void {
  }

}
