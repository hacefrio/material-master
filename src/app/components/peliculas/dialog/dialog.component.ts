import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent {
  form = this.fb.group({
    nombre: ['', Validators.required],
    director: ['', Validators.required],
    duracion: ['',  Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<Component>,
    private peliculasService: PeliculasService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngOnInit(): void {
    this.initForm(this.data);
  }
  //load dialog with data

  save(){
    this.dialogRef.close();
  }
  close(){
    this.dialogRef.close();
  }
  initForm(data:any) {
    const dialogConfig = new MatDialogConfig();
    this.data=this.peliculasService.getMovieById(data.id);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "60%";
    this.form.patchValue({
      nombre: data.nombre,
      director: data.director,
      duracion: data.duracion

    });

  }


}

