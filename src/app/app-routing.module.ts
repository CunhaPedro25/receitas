import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  // Added both these paths for the recipe and restaurant pages, that need an id param
  {
    path: 'recipe/:id',
    loadChildren: () => import('./views/recipe/recipe.module').then(m => m.RecipePageModule)
  },
  {
    path: 'restaurant/:id',
    loadChildren: () => import('./views/restaurant/restaurant.module').then(m => m.RestaurantPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
