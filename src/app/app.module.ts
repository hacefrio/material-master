import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//compoenente
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './modules/material/material.module';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './components/auth/auth.component';
import { CrmComponent } from './components/crm/crm.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { DialogComponent } from './components/peliculas/dialog/dialog.component';
import { DialogAddComponent } from './components/peliculas/dialog-add/dialog-add.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    AuthComponent,
    CrmComponent,
    PeliculasComponent,
    DialogComponent,
    DialogAddComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatDialogModule,
    NgxMatFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
