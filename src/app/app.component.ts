import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular Calculator';
  firstNumber = '';
  secondNumber = '';
  finalresult ='';
  sign ='';
  onClickMe(val){
    console.log(val);
      this.finalresult = String(parseInt(this.firstNumber) + parseInt(this.secondNumber));
      this.sign ='+';
  }
  onClickMinus(){
      this.finalresult = String(parseInt(this.firstNumber) - parseInt(this.secondNumber));
      this.sign ='-';
  }

}
