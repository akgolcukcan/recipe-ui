import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{

  constructor(private recipeService: RecipeService){

  }

  recipes: any;

  /*
  recipes = [
    { id: 1, name: 'Chocolate Chip Cookies', description: 'Sugar, glour, chocolate chips, etc.'},
    { id: 2, name: 'Wheat Bread', description: 'Yeast, flour, water, etc.'},
    { id: 3, name: 'Apple Pie', description: 'Apple pie filling, pie crust, water etc.'}
  ];
  */

  selectedRecipe?: any;

  ngOnInit(): void {
    this.recipeService.getRecipeList().
      subscribe({next: r => this.recipes = r, error: e => console.log(e)});
  }

  onSelect(recipe: any): void{
    this.selectedRecipe = recipe;
  }

  onDelete(recipe: any): void{

    //this.recipes = this.recipes.filter(obj => obj.id != recipe.id);

    this.recipeService.deleteRecipe(recipe.id).
      subscribe({next: r => this.ngOnInit(), error: e => console.log(e)});
  }

}
