import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  sampleData = [
    {
      id: 1,
      name: 'test1',
    },
    {
      id: 2,
      name: 'test2',
    },
    {
      id: 3,
      name: 'test3',
    },
    {
      id: 4,
      name: 'test4',
    },
    {
      id: 5,
      name: 'test5',
    },
    {
      id: 6,
      name: 'test6',
    },
    {
      id: 7,
      name: 'test7',
    },
    {
      id: 8,
      name: 'test8',
    },
    {
      id: 9,
      name: 'test9',
    },
    {
      id: 10,
      name: 'test10',
    },
    {
      id: 11,
      name: 'test10',
    },
  ];
  originalData = this.sampleData;
  pageStart = 1;
  dataLimit = 5;
  pageNewLimit = 0;
  paginationNumber: any[] = [];

  ngOnInit(): void {
    let pageNumber = Math.ceil(this.originalData.length / this.dataLimit);
    for (let i = 0; i < pageNumber; i++) {
      this.paginationNumber.push(i + 1);
    }
  }

  nextPage() {
    this.pageNewLimit += 5;
    this.pageStart += 1;
    this.sampleData = this.originalData.slice(
      this.pageNewLimit,
      this.originalData.length
    );
  }

  prevPage() {
    if (this.pageStart == 1) return;
    this.pageNewLimit -= 5;
    this.pageStart -= 1;
    this.sampleData = this.originalData.slice(
      this.pageNewLimit,
      this.originalData.length
    );
  }

  onPage(VALUE: number, index: number) {
    this.pageStart = VALUE;
    let newPage = index * this.dataLimit;
    this.pageNewLimit = newPage;
    this.sampleData = this.originalData.slice(
      newPage,
      this.originalData.length
    );
  }
}
