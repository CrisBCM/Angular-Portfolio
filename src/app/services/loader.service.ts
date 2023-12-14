import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  get isLoadingAsObservable(){
    return this.isLoading.asObservable();
  }
  set setIsLoading(isLoading:boolean){
    this.isLoading.next(isLoading);
  }
}
