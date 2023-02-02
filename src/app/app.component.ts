import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  input: string = '';
  result: string = '';

  constructor() {}

  clickNumber(number: string) {
    this.input = this.input + number;
  }
  
  clickOperator(operator: string) {
    this.input = this.input + operator;
  }

  clearInput() {
    if (this.input != '') {
      this.input = this.input.substring(0, this.input.length - 1);
    }
  }
  clickAllClear() {
    this.input = '';
    this.result = '';
  }

  getResultAnswer() {
    this.input = this.result;
    if (this.input == '0'){
      this.input = '';
    }
  }

  ngOnInit(): void {}
}
