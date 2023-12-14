import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit, OnDestroy{
  isLoading:boolean = false;
  onDestroy$:Subject<boolean> = new Subject();
  contactForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    name : ['',Validators.required],
    message : ['', Validators.required]
  })
  isMessageSent:boolean = false;
  @ViewChild('contactMeSection') contactMeSection!:ElementRef;

  constructor(private fb:FormBuilder, private http:HttpClient, private loaderService:LoaderService){
    
  }
  ngOnInit(): void {
    this.loaderService.isLoadingAsObservable.pipe(takeUntil(this.onDestroy$)).subscribe((isLoading:boolean)=>{
      this.isLoading = isLoading;
    })
  }
  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }

  get email(){
    return this.contactForm.get('email') as FormControl;
  }
  get name(){
    return this.contactForm.get('name') as FormControl;
  }
  get message(){
    return this.contactForm.get('message') as FormControl;
  }

  onSubmit(event:any){
    event.preventDefault();
    console.log(this.contactForm.value);
    this.http.post('https://formspree.io/f/xvojjzbj', this.contactForm.value).subscribe({
      complete:(()=>{
        this.isMessageSent = true;
      })
    });
  }
}
