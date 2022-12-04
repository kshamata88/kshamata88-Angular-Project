import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Restaurant';



  addCount$ = this.ms.addCount$;



  constructor(private ms: MenuService) {}


    getaddCount():void{}

    ngOnInit(): void {}

    ngOnDestroy(): void {}
}
