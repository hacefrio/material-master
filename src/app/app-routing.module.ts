import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { AuthComponent } from './components/auth/auth.component';
import { CrmComponent } from './components/crm/crm.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component : AuthComponent},
  { path: 'peliculas', component : PeliculasComponent},
  {
    path: 'crm', component: CrmComponent, 
    children: [
      { path: 'product', component: ProductComponent },
    ]
  },

 // { path: '**', redirectTo: '/crm/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
