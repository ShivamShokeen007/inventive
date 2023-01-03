import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as fitler_mock from '../mock/filter.json';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css'],
})
export class FilterSearchComponent {
 
  originalData: any = (fitler_mock as any).default; 
  displayData: any = (fitler_mock as any).default;
  toDateForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.toDateForm = this.formBuilder.group({
      to_date: [null],
      from_date: [null],
      search: [null],
    });
    this.toDateForm.reset();

    this.displayData = this.originalData.display_data.sort((p1: any, p2: any) =>
    p2.priority < p1.priority ? 1 : p2.priority > p1.priority ? -1 : 0
  );

    console.log('display', this.displayData);
  }

  getSelectedTo(event: any, type: string) {
    if (type == 'to') {
      this.toDateForm?.controls['to_date'].patchValue(event.value);
    } else {
      this.toDateForm?.controls['from_date'].patchValue(event.value);
    }
  }

  searchData() {
    console.log('data', this.toDateForm.value);

    this.http.post('test', this.toDateForm.value).subscribe({
      next: (v) => {
        console.log('data---> ', v);
      },
      error: (e) => {
        console.log('e---->', e);
      },
    });

    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe({
      next: (v) => console.log('Response', v),
      error: (e) => console.error('error', e),
    });
  }

  leftDisplayData(value: any) {
    return value.filter((v: any) => v.position == 'left');
  }

  rightDisplayData(value: any) {
    return value.filter((v: any) => v.position == 'right');
  }

  centerDisplayData(value: any) {
    return value.filter((v: any) => v.position == 'center');
  }
}
