import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from '../../models/recipe';
import { mockRecipesList } from './recipes.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any> {
    return this.http.get<Recipe[]>(this.url + '/recipes');
  }

  getRecipesMock(): Observable<Recipe[]> {
    return of(mockRecipesList);
  }
}
