import { Injectable, signal } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from '../../models/recipe';
import { mockRecipesList } from './recipes.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url: string = 'http://localhost:3000';

  readonly recipes = signal<Recipe[]>([]);

  // readonly recipesResource = httpResource<Recipe[]>(() => );

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any> {
    return this.http.get<Recipe[]>(this.url + '/recipes');
  }

  getRecipesMock(): Observable<Recipe[]> {
    return of(mockRecipesList);
  }
}
