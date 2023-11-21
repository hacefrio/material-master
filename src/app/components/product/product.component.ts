import { Component,  OnInit, ViewChild, inject } from '@angular/core';
import { ProductService } from './product.service';
import { tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  private _productSvc=inject(ProductService);
  displayedColumns: string[] = ['_id', 'name', 'description', 'price','createrAt','updatedAt','actions'];
  dataSource:any=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
   // private _productSvc: ProductService
  ) { }
  ngOnInit(): void {
    this.getProducts(); 
  }

  getProducts() {
    this._productSvc.getProducts().pipe(
      tap( products => {
        this.dataSource = new MatTableDataSource(products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }) 
    ).subscribe();
  }

  onDelete(_id: string) {
    console.log('delete',_id);
    this._productSvc.deleteProduct(_id).pipe(
      tap( () => this.getProducts() )
    ).subscribe()
  }
  

}
