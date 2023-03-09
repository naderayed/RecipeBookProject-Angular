import { Component, OnInit } from '@angular/core';
import { RecipeModel } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:RecipeModel[] =[
 new RecipeModel(
   "recipeOne",
   "Description for RecipeOne",
   "https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg"),
    new RecipeModel(
      "recipeTwo",
      "Description for recipeTwo",
      "https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipes.values());
  }

}
