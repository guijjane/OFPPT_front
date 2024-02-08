import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExcelFileDTO,} from "../processus/processus.component";
import {Observable} from "rxjs";
import {FlatIndexGenerator} from "@angular/compiler-cli/src/ngtsc/entry_point";

@Component({
  selector: 'app-excel-table',
  templateUrl: 'excel-table.component.html',
  styleUrls: ['./excel-table.component.css'],
})
export class ExcelTableComponent implements OnInit {

  //jsonData: Map<string, Array<Map<string, string>>> | undefined
  jsonData!:Map<string,string>
  columns:string[]=[]
  rows:any[]=[]
  constructor(private http:HttpClient) {
    this.fetchData();
  }
  ngOnInit(): void {

  }
  fetchData(){
    console.log("hello from excelTable")
    /*this.getData().subscribe(data=>
    {
      this.jsonData=JSON.parse(data.jsonValue)
      console.log(this.jsonData)
      //this.columns=Object.keys(this.jsonData[0])
      this.rows=this.jsonData
      console.log(this.rows)
    })*/
    this.getData().subscribe(data=>{
      console.log("object data")
      console.log(data)
      console.log("all data")
      console.log(data.jsonValue)
      this.jsonData=data.jsonValue
      console.log("json data"+this.jsonData)
      //this.jsonData=JSON.parse(data.jsonValue)
      //this.columns=Object.keys(this.jsonData)
      //this.jsonData=data.jsonValue
      //console.log(JSON.parse(data.jsonValue))
      //this.jsonData=JSON.parse(data.jsonValue)
      //let object:Object=JSON.parse(data.jsonValue)
    })
  }
  getData():Observable<ExcelFileDTO>
  {
    return this.http.get<ExcelFileDTO>('http://localhost:8083/jsonvalue');
  }



}


