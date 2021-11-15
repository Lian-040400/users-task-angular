import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Validators } from "@angular/forms";

const ERROR_MESSAGES: any = {
  email: () => 'invaid email',
  required: () => 'the field are required',
  minlength: (minlength: any) => `the field should be at least ${minlength.requiredLength}`,
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  title = '';
  form!: FormGroup;
  editMode = false;
  addUser = new EventEmitter();
  editUser = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  getControlError(control: any) {
    if (!control.touched) {
      return ''
    }
  
    for(const [key, value] of Object.entries(control.errors || {})) {
      return ERROR_MESSAGES[key](value);
    }
  
    return '';
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control('', [Validators.required]),
      lastName: this.formBuilder.control('', [Validators.required]),
      date: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
    })
  }

  addNewUser(){
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const newUser = this.form.value;
      newUser.date = newUser.date.getTime();
      this.addUser.emit(newUser);
    }
  }
  editUserData(){
  this.form.markAllAsTouched();
  if (this.form.valid) {
    const newUser = this.form.value;
    newUser.date = newUser.date.getTime();
    this.editUser.emit(newUser);
  }
 
}}
 

