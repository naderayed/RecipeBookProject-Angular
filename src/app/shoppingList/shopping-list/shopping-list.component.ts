import {Component, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';




@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  toDelete:Ingredient;
  ingredients:Ingredient[]=[
    new Ingredient("Apples",2),
    new Ingredient("Tomatoes",5),
    new Ingredient("Orange",2),

  ]

  constructor() { }

  ngOnInit(): void {
  }

  doAddOrClearOrDelete(event: any) {
    if (event.order==='add'){
      this.ingredients.push(event.ing);
    }
    if (event.order==='clear'){
      this.ingredients.splice(0,this.ingredients.length);
    }
    if(event.order==="delete"){
     // this.ingredients.indexOf(this.toDelete);
      console.log(this.ingredients.indexOf(this.toDelete))
      this.ingredients.splice(this.ingredients.indexOf(this.toDelete),1)

    }


  }


}
