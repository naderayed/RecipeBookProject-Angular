import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../../recipeBook/recipe.model";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
@Output() recipeEmitter = new EventEmitter<{ing:any,order:string}>();


  constructor() { }

  ngOnInit(): void {
  }

  addRecipe(name: HTMLInputElement, amount: HTMLInputElement) {
    this.recipeEmitter
      .emit({ing:new Ingredient(name.value,Number.parseFloat(amount.value)),order:'add'})
  }

  clearRecipe() {
    this.recipeEmitter.emit({ing:null,order:'clear'});
  }

  deleteRecipe() {
    this.recipeEmitter.emit({ing:null,order:'delete'});
  }
}
