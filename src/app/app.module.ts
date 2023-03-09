import {NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListEditComponent } from './shoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeBook/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from "./recipeBook/recipe-detail/recipe-detail.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListComponent } from './shoppingList/shopping-list/shopping-list.component'
import { RecipesComponent } from "./recipeBook/recipes.component";


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
