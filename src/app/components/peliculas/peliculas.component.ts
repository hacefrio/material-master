import { Component, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, catchError, tap } from 'rxjs';
import { PeliculasService } from './peliculas.service';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { DialogAddComponent } from './dialog-add/dialog-add.component';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.sass']
})
export class PeliculasComponent {

  private _peliculasSrv = inject(PeliculasService);
  private _subscription: Subscription = new Subscription();
  products: any[] = [];
  public displayedColumns: string[] = ['nombre', 'director', 'duracion', 'imagen', 'actions'];
  public displayedColumnsRegister: string[] = ['nombre', 'director', 'duracion', 'imagen', 'actions'];
  public dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 


  constructor(
    private matDialog: MatDialog,

  
  ) { }



  ngOnInit() {
    //call this method on component load
    this.geMovies();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'impleme  nts OnDestroy' to the class.

    this._subscription.unsubscribe();
  }
  geMovies() {
    this._subscription.add(
      this._peliculasSrv.getPeliculas().pipe(
        tap(res => {
          console.log(res);
          this.dataSource = new MatTableDataSource<any>(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
      ).subscribe()
    )
  }
  onDelete(id: any) {
    this._subscription.add(
      this._peliculasSrv.deleteMovie(id).subscribe(res => {
        console.log(res);
        this.geMovies();
        alert('PELICULA ELIMINADA');
      })
    )
  }
  onUpdate(id: any, movie: any) {
    console.log(movie);
    this._subscription.add(
      this._peliculasSrv.updateMovie(id,movie).pipe(
        tap(res => {
          console.log('wea'+res);
          this.geMovies();
        })
      ).subscribe()
    )
  }

  onEdit(id: any) {
    console.log(id);
    this._subscription.add(
      this._peliculasSrv.getMovieById(id).pipe(
        tap(res => {
          console.log(res);
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.data = {
            id:id,
            nombre: res.nombre,
            director: res.director,
            duracion: res.duracion,
            imagen: res.imagen

          };
          
          const dialogRef = this.matDialog.open(DialogComponent, dialogConfig);
          dialogRef.afterClosed().subscribe((res:any) => {
            if (res) {
            console.log('respuesta del Dialog', res);
            this.onUpdate(id,res)
            }
          }
          
          //respuesta del formulario
          
          )}),
        catchError(err => {
          console.log(err);
          return err;
        })
      ).subscribe()
    )

  }
  onSaveUser(movie: any) {
    console.log(movie);
    this._subscription.add(
      this._peliculasSrv.createMovie(movie).pipe(
        tap(res => {
          console.log(res);
        })
      ).subscribe()
    )
    this.geMovies();
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.matDialog.open(DialogAddComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res:any) => {
      if (res) {
      console.log('respuesta del Dialog', res);
      this.onSaveUser(res)
      }
    }
    
    )
    this.geMovies();
  }

}
