import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ToastrService } from 'ngx-toastr';
import * as fitler_mock from '../mock/worklist.json';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css'],
})
export class FilterSearchComponent {
  originalData: any = (fitler_mock as any).default;
  displayData: any = (fitler_mock as any).default;
  filterObject: any = {};

  bsConfig?: Partial<BsDatepickerConfig> = Object.assign(
    {},
    { containerClass: 'theme-blue' }
  );

  @Output() filterFormValue: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public datepipe: DatePipe,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.displayData = this.originalData.display_filter.sort(
      (p1: any, p2: any) =>
        p2.priority < p1.priority ? 1 : p2.priority > p1.priority ? -1 : 0
    );

    let getKeys = this.displayData.map((v: any) => v.filter_field);
    if (getKeys && getKeys.length > 0) {
      for (let i = 0; i < getKeys.length; i++) {
        Object.assign(this.filterObject, { [getKeys[i]]: null });
      }
    }
  }

  getSelectedTo(event: any, type: any) {
    if (event._bsValue?.[0]) {
      console.log('event._bsValue', event._bsValue);
      let formatDateTo = this.datepipe.transform(
        event._bsValue[0],
        'dd/MM/yyyy'
      );
      let formatDateFrom = this.datepipe.transform(
        event._bsValue[1],
        'dd/MM/yyyy'
      );
      let newFormat = [formatDateTo, formatDateFrom];

      if (this.filterObject?.[type] == null) {
        this.filterObject[type] = newFormat;
      } else {
        if (this.filterObject?.[type]) {
          this.filterObject[type] = newFormat;
        }
      }
    } else {
      let formatDate = this.datepipe.transform(event._bsValue, 'dd/MM/yyyy');
      if (!event._bsValue) {
        return;
      }
      if (this.filterObject?.[type] == null) {
        this.filterObject[type] = formatDate;
      } else {
        if (this.filterObject?.[type]) {
          this.filterObject[type] = formatDate;
        }
      }
    }

    console.log('filterObject', this.filterObject);
  }

  inputUpdate(data: any, type: any) {
    if (this.filterObject?.[type] == null) {
      this.filterObject[type] = data.target.value;
    } else {
      if (this.filterObject?.[type]) {
        this.filterObject[type] = data.target.value;
      }
    }

    console.log('filterObject', this.filterObject);
  }

  searchData() {

    let searchPayload =  this.filterObject;
    let newPayload = {};

    if (searchPayload) {
      console.log('searchPayload early', searchPayload);

      delete searchPayload.position;
      delete searchPayload.view_history;

      console.log('searchPayload', searchPayload);

      this.displayData.forEach((el: any) => {
        console.log('el', el);
        if (searchPayload?.[el.filter_field]) {
          // New Payload

          Object.assign(newPayload, 
            {
              [el.filter_field]: {
                value: searchPayload[el.filter_field],
                operator: el?.operator,
              },
            }
            );

          // newPayload = {
          //   [el.filter_field]: {
          //     value: searchPayload[el.filter_field],
          //     operator: el?.operator,
          //   },
          // };
          // New Payload
        }
      });
      console.log('newPayload', newPayload);

      this.filterFormValue.emit(newPayload);
      this.http.post('/search', newPayload).subscribe({
        next: (v) => {
          console.log('v', v);
        },
        error: (e) => {
          console.log('e', e);
        },
      });
    }

   
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
