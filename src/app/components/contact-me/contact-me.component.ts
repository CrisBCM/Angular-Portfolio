import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  contactForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    name : ['',Validators.required],
    message : ['', Validators.required]
  })

  constructor(private fb:FormBuilder, private http:HttpClient){
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
    this.http.post('https://formspree.io/f/xvojjzbj', this.contactForm.value).subscribe(()=>{
      console.log('Funciono!');
    });
  }
}
