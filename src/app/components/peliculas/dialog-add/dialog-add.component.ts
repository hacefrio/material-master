import { Component } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.sass']
})
export class DialogAddComponent {


  constructor(
    private _peliculasSrv: PeliculasService,
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<Component>
  ) { }
  peliculaForm = this._fb.group({
    nombre: ['',[Validators.required]],
    director: ['',[Validators.required]],
    duracion: ['',[Validators.required]],
    imagen: [, [Validators.required],],
  });

  ngOnInit(): void {
  }

onSaveUser() {
  const peliculaValue = this.peliculaForm.value;
  // add imagen to peliculaValue¿;
  this._peliculasSrv.createMovie(peliculaValue).subscribe((res: any) => {
    console.log(res);
  });
  this.dialogRef.close();
  
}

close(){
  this.dialogRef.close();
}
}