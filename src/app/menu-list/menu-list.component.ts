import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Menu } from 'src/app/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit, OnDestroy{
  imgStyles = {
    'width.px':200,
    'height.px':200,
  };

  menu: Menu[] = [];

  filteredMenu: Menu[] = this.menu;

  private _filterBy= '';
  get filterBy(): string {
    return this._filterBy;
  }
  set filterBy(fb: string) {
    this._filterBy= fb;
    this.filterMenu(this._filterBy);
  }

  showImage = true;

  menu$!: Observable<Menu[]>;
  errorMessage = null;
  loading = false;

  constructor(private ms: MenuService)  {}

  ngOnInit(): void {
    this.loading = true;
    this.menu$=this.ms.getMenu()
    .pipe(
      tap(menu =>{
        this.loading = false;
        this.menu = menu;
        this.filteredMenu = menu;
        this.errorMessage = null
      }),
      catchError(err => {
        this.loading = false;
        this.errorMessage =err;
        return of ([]);
      })
      );
    }

  addItem(event:MouseEvent, menu: any) {
    this.ms.increment();
  }

  filterMenu(searchValue: string) {
    this.filteredMenu=this.menu.filter(menu => {
      return menu.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
  onRatingClicked(rating:number):void {
    alert(`Clicked rating is ${rating}`)
  }

  ngOnDestroy(): void {}



}
