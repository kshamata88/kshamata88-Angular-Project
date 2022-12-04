import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit{

  imgStyles = {
    'width.px':250,
    'height.px':250,
  };
  menu$!: Observable<Menu>;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private ms: MenuService,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.id = Number(params.get('id'));

        if (!isNaN(this.id)) {
          this.menu$=this.ms.getMenuById(this.id);
         }
      })
    }
    goBack():void{
      setTimeout(() => {
      this.router.navigate(['/menu']);
     },2000);
    }

    prevMenu(): void {
      this.id -=1;
      this.router.navigate(['/menu',this.id]);
    }
    nextMenu(): void {
      this.id +=1;
      this.router.navigate(['/menu',this.id]);
    }

}
