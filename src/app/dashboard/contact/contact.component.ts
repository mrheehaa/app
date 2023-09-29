import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy{


  public contactForm: FormGroup = this.formBuilder.group({
    name:['', Validators.required],
    email:['', Validators.required],
    message:['', Validators.required]
  })


  constructor(private formBuilder: FormBuilder){
  }


 ngOnInit(): void {
    this.edit()
 }

 ngOnDestroy(): void {
  
 }
 public save(): void {
  if (this.contactForm.valid) {

    let messages:Array<any> = []

      if (localStorage.getItem('messages')) {
        messages = JSON.parse( localStorage.getItem('messages') ?? '' )
      }

    let message = {
      name: this.contactForm.get('name')?.value,
      email:this.contactForm.get('email')?.value,
      message:this.contactForm.get('message')?.value,
      read:false
    }
    messages.unshift(message)
    localStorage.setItem('messages', JSON.stringify(messages))
    
    this.contactForm.patchValue({
      name: '',
      email:'',
      message:''
    })
    Swal.fire({title:'Success!', text:'Message saved!', icon:'success'})

  }else{
    Swal.fire({title:'Warning!', text:'Fields missing', icon:'warning'})
  }
  


 }
 public clear():void {
  this.contactForm.patchValue({
    name:'',
    email: '',
    message:''
  })
 }
 public edit() {
  if (localStorage.getItem('edit')) {
    let messageToEdit = JSON.parse(localStorage.getItem('edit')??'')
    this.contactForm.patchValue(messageToEdit)
    localStorage.removeItem('edit')
  }

 }
}
