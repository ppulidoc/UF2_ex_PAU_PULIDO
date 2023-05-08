import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-comp-proves',
  templateUrl: './comp-proves.component.html',
  styleUrls: ['./comp-proves.component.css']
})
export class CompProvesComponent {
  constructor(private http: HttpClient) {
    //this.signeZ();
    this.afegirDept();
  }

  //ex1
  llistarAssigInfo(){
    this.http.post("http://localhost:3080/dades", {}).subscribe();
  }

  //ex2
  signeZ(){
    this.http.post('http://localhost:3080/ex2', {} ).subscribe();
  }

  //ex4
  afegirDept(){
    this.http.post("http://localhost:3080/api/afegirDept",
      {nom: 'NouDEPT'}).subscribe((data) => {
      console.log(data);
    });
  }
}
