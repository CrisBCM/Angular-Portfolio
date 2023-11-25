import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  contactForm = this.fb.group({
    name : [''],
    message : ['']
  })

  constructor(private fb:FormBuilder, private http:HttpClient){
  }

  onSubmit(event:any){
    event.preventDefault();
    console.log(this.contactForm.value);
    this.http.post('https://formspree.io/f/xvojjzbj', this.contactForm.value).subscribe(()=>{
      console.log('Funciono!');
    });
  }
}
