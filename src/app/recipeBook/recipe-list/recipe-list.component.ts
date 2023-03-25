import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RecipeModel } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes:RecipeModel[] =[
 new RecipeModel(
   "recipeOne",
   "Description for RecipeOne",
   "https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg"),
    new RecipeModel(
      "recipeTwo",
      "Description for recipeTwo",
      "https://www.cookipedia.co.uk/wiki/images/3/39/Shrimp_cakes_-_prawn_balls_recipe.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeEl: RecipeModel) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
