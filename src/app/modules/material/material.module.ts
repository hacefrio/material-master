import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//modulos de material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

//forms
import {  ReactiveFormsModule,FormsModule } from '@angular/forms';
const MATERIAL=[
  ReactiveFormsModule,
  FormsModule,
  //material
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL
  ],
  exports:[
    MATERIAL
  ] 
})
export class MaterialModule { }
