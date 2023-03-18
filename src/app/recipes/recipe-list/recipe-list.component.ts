import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Test','https://media.istockphoto.com/id/1439228262/photo/delicious-fried-oyster-mushrooms-and-shiitake-mushrooms-with-vegetables-in-a-spicy-sauce.jpg?s=1024x1024&w=is&k=20&c=1ZXhHkyaa5EKO6n-TMhXfyJBWPKpA30UkYM8w0vpDcM='),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
