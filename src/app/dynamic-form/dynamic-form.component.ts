import { Component } from '@angular/core';
import * as dynamicJson from '../mock/dynamic-form.json';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent {
  dynamicJSON = (dynamicJson as any).default;

  dynamicForm: FormGroup = this.formBuilder.group({
    firstName: [''],
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.get();
  }

  async get() {
    // Create form dynamically
    if (this.dynamicJSON?.length > 0) {
      for (let i = 0; i < this.dynamicJSON.length; i++) {
        this.dynamicForm.addControl(
          this.dynamicJSON[i].control_name,
          new FormControl('', Validators.required)
        );
      }
    }

    this.dynamicForm.removeControl('firstName');

    // Crete form control dynamically

    // Get data from URL OPTIONS

    this.dynamicJSON.forEach(async (v: any) => {
      if (v.options_url && v.type == "select") {
        v['options'] = await this.asyncData(v.options_url);
      }
    });

    // Get data from URL OPTIONS

    console.log("dynamicJSON",this.dynamicJSON);
  }

  onSubmit() {
    console.log('form data', this.dynamicForm.value);
  }

  asyncData(URL: string) {
    return new Promise((resolve) => {
      this.http.get(URL).subscribe((v) => {
        resolve(v);
      });
    });
  }
}
