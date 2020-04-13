import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {
  prefix: Number;
  cost: Number;
  prefixcostform: FormGroup;
  constructor(
    public services: BackendService,
    private formBuilder: FormBuilder
  ) {
    this.prefixcostform = this.formBuilder.group({
      prefix: ['', Validators.required],
      cost: ['', Validators.required],
      operator: ['', Validators.required]
    });
   }

  insertDialCode(){
    let data = this.prefixcostform.value;
    console.log("data", data);
    this.services.operatorupdate(data).subscribe(res=>{
      console.log("new json response ", res); 
      localStorage.setItem("operator", JSON.stringify(res));
      this.prefixcostform.reset();
    })
  }
}
