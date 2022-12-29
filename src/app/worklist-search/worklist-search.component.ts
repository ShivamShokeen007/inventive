import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-worklist-search',
  templateUrl: './worklist-search.component.html',
  styleUrls: ['./worklist-search.component.css'],
})
export class WorklistSearchComponent implements OnInit {
  toDateForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.toDateForm = this.formBuilder.group({
      to_date: [null],
      from_date: [null],
    });
    this.toDateForm.reset();
  }
  getSelectedTo(event: any, type: string) {
    if (type == 'to') {
      this.toDateForm?.controls['to_date'].patchValue(event.value);
    } else {
      this.toDateForm?.controls['from_date'].patchValue(event.value);
    }
  }
}
