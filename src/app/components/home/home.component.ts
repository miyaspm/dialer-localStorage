import {Component, OnInit} from '@angular/core';
import {BackendService} from 'src/app/services/backend.service';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dialInput: any;
  apiResponse: any;
  dialerform: FormGroup;
  dialer: any;
  finalResult: any;
  dialnum: any;
  constructor(
    public service: BackendService,
    private formBuilder: FormBuilder
    ) {
    this.dialerform = this.formBuilder.group({
      dialnum: ['', [Validators.required,Validators.minLength(1)]]
    });
    this.apiResponse = [];
    this.dialer = [];
    this.dialnum = '';
  }

  ngOnInit() {
    this.service.operatorinsert();
  }

  click2Call() {
    const payload = this.dialerform.value;
    let finalData: any = [];
    const inputdial = payload.dialnum.toString();
    this.service.operatorsearch().subscribe((res: any) => {
      const response = res;
      const temp = inputdial;
      for (let i = 1; i < temp.length + 1; i++) {
        const tempData = inputdial.slice(0, i);
        const filteredData: any = [];
        for (const key in response) {
          let operator = key;
          let operatordata = response[operator];
          operatordata.forEach((result: any) => {
            if (result.prefix === tempData) {
              filteredData.push(result);
              finalData = filteredData;
            }
          });
        }
      }
      finalData.sort((a: any, b: any) => parseFloat(a.cost) - parseFloat(b.price));
      console.log('final array', finalData);
      if (finalData.length > 0) {
        this.finalResult = `Operator ${finalData[0].operator.toString()} is cheapest and Rate $${finalData[0].cost.toString()}/min`;
      } else if (finalData.length == 0) {
        this.finalResult = "No Operator found";
      }
    });
  }

  virtualKeyClick(data){
    this.dialnum += data;
    console.log("dialled num", this.dialnum);
    this.dialerform.patchValue({dialnum: this.dialnum});
  }

  clearInput(){
    this.dialerform.reset();
    this.dialnum = '';
  }

}
