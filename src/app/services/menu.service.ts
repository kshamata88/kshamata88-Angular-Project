import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,catchError,delay,interval,Observable, of, retry, Subject, Subscription, throwError} from 'rxjs';
import { Menu } from '../menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

 private addCount = 0;
addCount$ = new BehaviorSubject<number>(0);



myObservable$ = new Observable(observer => {
  observer.next(10);
  throw new Error ('Some error occurred!');
});

myNumbers$ = of(1,2,3,4,5);

myInterval$ = interval(1000);

subscription$!: Subscription;

mySubject$ = new Subject<number>();


constructor(private http: HttpClient) { }

getMenu(): Observable<Menu[]> {
  return this.http.get<Menu[]>(`http://localhost:3000/menu`)
  .pipe(
    delay(1000),
    retry(2),
    catchError(this.handleError)
  );
}

getMenuById(id:number): Observable<Menu> {
  return this.http.get<Menu>(`http://localhost:3000/menu/${id}`)
  .pipe(
    retry(3),
    catchError(this.handleError)
  );
 }

handleError(error:HttpErrorResponse) {
  let errorMessage = '';
  if (error.status==0){
    errorMessage = `Some error occurred at client: ${error}`;
  } else {
    errorMessage = `Some error occurred at server with status:- ${error.status} and message - ${error.message}`;
  }
  return throwError(() => errorMessage);

}

increment(): void {
  this.addCount += 1;
  this.addCount$.next(this.addCount);

}

decrement(): void {
  this.addCount -= 1;
  this.addCount$.next(this.addCount);
}
}
