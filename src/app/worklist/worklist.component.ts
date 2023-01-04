import { Component, ViewChild } from '@angular/core';
import type { OnInit, DoCheck } from '@angular/core';
import * as mock from '../mock/worklist.json';
import * as old_mock from '../mock/old_worklist.json';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiRequestService } from '../request-filter/api-request.service';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.css'],
})
export class WorklistComponent implements OnInit, DoCheck {
  menuToggle: any;
  // mockArray = (old_mock as any).default;
  mockArray = (mock as any).default;
  arraykey: any;

  originalData = this.mockArray.data;
  pageStart = 1;
  dataLimit = 5;
  pageNewLimit = 0;
  paginationNumber: any[] = [];
  toDate?: Date = new Date();
  userDetail: any;
  Object = Object;

  data: any = (mock as any).default;
  displayData: any = [];
  mainData: any[] = [];

  display_data: any[] = [
    {
      id: 'erp_id',
      value: 'ERP ID',
      priority: 0,
    },
    {
      id: 'id',
      value: 'ID',
      priority: 1,
    },
    {
      id: 'invoice_no',
      value: 'Invoice Number',
      priority: 2,
    },
    {
      id: 'digitally_signed',
      value: 'Digitally Signed',
      priority: 3,
    },

    {
      id: 'date',
      value: 'Date',
      priority: 4,
    },
    {
      id: 'operating_circle',
      value: 'Operating Circle',
      priority: 5,
    },
    {
      id: 'supplier_name',
      value: 'Supplier Name',
      priority: 6,
    },
    {
      id: 'receipt_number',
      value: 'Receipt Number',
      priority: 7,
    },
    {
      id: 'po_number',
      value: 'PO Number',
      priority: 8,
    },
    {
      id: 'received_date',
      value: 'Received Date',
      priority: 9,
    },
    {
      id: 'uploaded_date',
      value: 'Uploaded Date',
      priority: 10,
    },
    {
      id: 'expiring_date',
      value: 'Expiring Date',
      priority: 11,
    },
  ];

  default_display_data: any[] = [
    {
      id: 'erp_id',
      value: 'ERP ID',
      priority: 0,
    },
    {
      id: 'id',
      value: 'ID',
      priority: 1,
    },
    {
      id: 'invoice_no',
      value: 'Invoice Number',
      priority: 2,
    },
    {
      id: 'digitally_signed',
      value: 'Digitally Signed',
      priority: 3,
    },

    {
      id: 'date',
      value: 'Date',
      priority: 4,
    },
    {
      id: 'operating_circle',
      value: 'Operating Circle',
      priority: 5,
    },
    {
      id: 'supplier_name',
      value: 'Supplier Name',
      priority: 6,
    },
    {
      id: 'receipt_number',
      value: 'Receipt Number',
      priority: 7,
    },
    {
      id: 'po_number',
      value: 'PO Number',
      priority: 8,
    },
    {
      id: 'received_date',
      value: 'Received Date',
      priority: 9,
    },
    {
      id: 'uploaded_date',
      value: 'Uploaded Date',
      priority: 10,
    },
    {
      id: 'expiring_date',
      value: 'Expiring Date',
      priority: 11,
    },
  ];

  lengthOfRight: number = 0;
  toDateForm: FormGroup;

  testVariable: string = 'Parent call';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private api_request: ApiRequestService
  ) {}

  ngOnInit(): void {
    let pageNumber = Math.ceil(this.originalData.length / this.dataLimit);
    for (let i = 0; i < pageNumber; i++) {
      this.paginationNumber.push(i + 1);
    }

    this.toDateForm = this.formBuilder.group({
      to_date: [null],
      from_date: [null],
      search:[null]
    });
    this.toDateForm.reset();

    this.displayData = this.data.display_data;

    this.mockArray = this.originalData;

    this.displayData = this.data.display_data.sort((p1: any, p2: any) =>
      p2.priority < p1.priority ? 1 : p2.priority > p1.priority ? -1 : 0
    );

    let getRightLength: any[] = this.displayData.filter(
      (v: any) => v.position == 'center'
    );
    this.lengthOfRight = getRightLength.length;
    this.mainData = this.data.data;

        // document.cookie = "user_name='1';expires=Sun, 20 Aug 2000 12:00:00 UTC" delete cookie

    let cookiePayload = {
      token : 'xyz',
      domain: window.location.host
    }


    document.cookie = "token='xyz';domain=window.location.host";


    console.log("cc",document.cookie);

    // console.log("cookie",JSON.parse(JSON.stringify(document.cookie)))


    console.log("dns",window.location.host)
    // let domain = (new URL());

    // this.modifyDisplayData();
  }

  ngDoCheck(): void {
    this.menuToggle = localStorage.getItem('menu_toggle');
  }

  processF() {



    let headerCustom = [];
    headerCustom = [
      {
        key : 'name',
        value:'Shivam'
      },
      {
        key : 'name',
        value:'Abhishek'
      },
      {
        key : 'name',
        value:'Surbhi'
      },
      {
        key : 'name',
        value:'Muskan'
      },
      {
        key : 'age',
        value:'23'
      },
    ]
    // learnify-api.demoserver.in11/api11/
    this.api_request
      .postReq(
        'https://test/',
        'register124',
        { id: 1 },
        'testjson',
        
      )
      .subscribe((res) => {
        console.log('res', res);
      });
  }

  modifyDisplayData() {
    console.log('display_data', this.display_data);
    console.log('default_display_data', this.default_display_data);

    let checkErp = this.displayData.find((v: any) => v.key == 'erp_id');

    if (checkErp != -1) {
      let new_pro = 9;
      let getNumbers = this.displayData.map((v: any) => v.priority);
      let n: number = this.displayData.length;
      console.log('n', n);

      let rdom = Math.floor(Math.random() * (20 - n)) + n;

      console.log('rdom', rdom);
      console.log('getNumbers', getNumbers);
      console.log('random', Math.floor(Math.random() * 100));
      console.log('new_pro', new_pro);
      this.displayData.push({
        key: 'erd_id',
        value: 'ERP ID',
        priority: new_pro,
        position: 'left',
        data_type: 'string',
      });
    }
    // this.displayData.forEach((el:any) => {
    //   if(el.key != 'erp_id'){
    //   this.displayData.push({key :"erd_id",value:"ERP ID",priority:9,position:"left",data_type:"string"});
    //   }

    //   if(el.key == 'id'){

    //   }

    // });

    console.log('this.displayData', this.displayData);
  }

  getKey(data: object) {
    console.log('data', data);
    console.log('Object.keys(data)', Object.keys(data));
    return Object.keys(data);
  }

  // pagination
  nextPage() {
    if (this.pageStart < this.paginationNumber.length) {
      this.pageNewLimit += 5;
      this.pageStart += 1;
      this.mockArray = this.originalData.slice(
        this.pageNewLimit,
        this.originalData.length
      );
    } else {
      return;
    }
  }

  prevPage() {
    if (this.pageStart == 1) return;
    this.pageNewLimit -= 5;
    this.pageStart -= 1;
    this.mockArray = this.originalData.slice(
      this.pageNewLimit,
      this.originalData.length
    );
  }

  onPage(VALUE: number, index: number) {
    this.pageStart = VALUE;
    let newPage = index * this.dataLimit;
    this.pageNewLimit = newPage;
    this.mockArray = this.originalData.slice(newPage, this.originalData.length);
  }
  // pagination

  openDatePicker() {}

  getSelectedTo(event: any, type: string) {
    if (type == 'to') {
      this.toDateForm?.controls['to_date'].patchValue(event.value);
    } else {
      this.toDateForm?.controls['from_date'].patchValue(event.value);
    }
  }

  getAll() {
    this.http.post('xyz', { name: 'test' }).subscribe((responseDate) => {
      console.log('respose', responseDate);
    });
  }

  checkKey(KEY: string, priority: number) {
    let check = this.display_data.find((v) => v.id == KEY);
    // Will check the prority as the key will be for position 0 or 1
    if (check) {
      if (check.priority == priority) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  displayValue(KEY: string) {
    let check = this.display_data.find((v) => v.id == KEY);
    if (check) {
      return check.value;
    } else {
      return 'N/A';
    }
  }

  ifExist(priority: number, INDEX: number) {
    let checkDisplay = this.display_data.find((v) => v.priority == priority);

    if (checkDisplay) {
      let object = this.mockArray[INDEX];
      object.hasOwnProperty(checkDisplay.id);

      if (
        object.hasOwnProperty(checkDisplay.id) &&
        this.mockArray[INDEX][checkDisplay.id]
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  centerDataFilter(data: any) {
    return data.filter((v: any) => v.position == 'center');
  }
}
