import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getLocation(): Observable<string[]>{
    return  of(['Nigeria', 'Ghana', 'London']);
    locations:''
  };

  constructor() { }
}
