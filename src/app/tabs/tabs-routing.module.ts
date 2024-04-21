import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../views/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../views/history/history.module').then(m => m.HistoryPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../views/about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
