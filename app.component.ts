
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public num1 : any;
  public num2: any;
  public oper : number=0;
  public result : any;

  constructor() {}

  ngOnInit(): void {}

     public calculate() {
      // if(this.num1==0  || this.num2 ==0 || this.oper == 0){
      //   // alert("Please fill the fields")
      // }
      // else{
    let num1 = this.num1;
    let num2 = this.num2;
    let operation = this.oper;

    switch (operation){
      case 1:
        this.result = num1 + num2;
        break;
      case 2:
        this.result = num1 - num2;
        break;
      case 3:
        this.result = num1 * num2;
        break;
      case 4:
        this.result = num1 / num2;
        break;
      case 5:
        this.result = num1 % num2;
        break;
      default:
        alert("Invalid choice!");
        break;
    }
  // }
}
}