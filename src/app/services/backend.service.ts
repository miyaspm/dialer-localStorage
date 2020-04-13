import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  operator: any;
  constructor(public http: HttpClient) {
    this.operator = {"operator1":[{"prefix":"1","cost":0.9,"operator":"A"},{"prefix":"268","cost":5.1,"operator":"A"},{"prefix":"46","cost":0.17,"operator":"A"},{"prefix":"4620","cost":0.0,"operator":"A"},{"prefix":"468","cost":0.15,"operator":"A"},{"prefix":"4631","cost":0.15,"operator":"A"},{"prefix":"4673","cost":0.9,"operator":"A"},{"prefix":"46732","cost":1.1,"operator":"A"},],"operator2":[{"prefix":"1","cost":0.92,"operator":"B"},{"prefix":"44","cost":0.5,"operator":"B"},{"prefix":"46","cost":0.2,"operator":"B"},{"prefix":"467","cost":1.0,"operator":"B"},{"prefix":"48","cost":1.2,"operator":"B"},]};
  }

  operatorsearch(): Observable<any> {
    const operators = localStorage.getItem("operator");
    return of(JSON.parse(operators)); 
  }

  operatorinsert(){
    if (localStorage.getItem("operator") === null) {
      localStorage.setItem("operator", JSON.stringify(this.operator));
    }
    else{
      console.log("Already local storage Exists");
    } 
  }

  operatorupdate(data:any){
    let storageOperator = localStorage.getItem("operator");
    let storageOperJson = JSON.parse(storageOperator);
    console.log("existing localstorage json ", JSON.parse(storageOperator));
    if(data.operator === "A")
    storageOperJson.operator1.push(data);
    else if(data.operator === "B")
    storageOperJson.operator2.push(data);
    console.log("new json", storageOperJson);
    return of(storageOperJson);
  }
}
