import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from "@angular/forms";

const ERROR_MESSAGES: any = {
  email: () => 'invaid email',
  required: () => 'the field are required',
  minlength: (minlength: any) => `the field should be at least ${minlength.requiredLength}`,
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;
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
      name: this.formBuilder.control('', [Validators.required]),
      date: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
    })
  }

}