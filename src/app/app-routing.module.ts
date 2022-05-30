import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/jsutloader/jsutloader.module').then( m => m.JsutloaderPageModule)
  },
  {
    path: 'input-item',
    loadChildren: () => import('./input-item/input-item.module').then( m => m.InputItemPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./page/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'user-page',
    loadChildren: () => import('./page/user-page/user-page.module').then( m => m.UserPagePageModule)
  },
  {
    path: 'jsutloader',
    loadChildren: () => import('./page/jsutloader/jsutloader.module').then( m => m.JsutloaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
