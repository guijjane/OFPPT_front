import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-processus',
  templateUrl: './processus.component.html',
  styleUrls: ['./processus.component.css']
})
export class ProcessusComponent implements OnInit {



  selectedFile!: File
  fileForm!:FormGroup
  responseDTO!:ExcelFileDTO
  fileChecksum:string=""
  fileSize:number=0
  fileName:string=""
  errorMessage:string=""
  //jsonValue!:Map<string,Array<Map<string,string>>>
  jsonValue!:Map<string,string>
  constructor(private _formBuilder:FormBuilder,
              private http:HttpClient) { }

  ngOnInit(): void {
    this.fileForm=this._formBuilder.group({
      file:['',Validators.required]
    })
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    this.fileChecksum=""
    this.fileSize=0
    this.fileName=""
    this.errorMessage=""
    //this.jsonValue=""
    const formData = new FormData();

    formData.append('file', this.selectedFile,this.selectedFile.name);
    console.log("form data")
    console.log(formData)
    return this.http.post<ExcelFileDTO>('http://localhost:8083/calculChecksum',formData).
    subscribe(response => {
      //console.log("response ok")
      console.log(response);
      this.fileName=response.fileName
      this.fileSize=response.fileSize
      this.fileChecksum=response.fileChecksum
      this.jsonValue=response.jsonValue
      this.responseDTO=response
    }, error => {
      //console.log("response error")
      this.errorMessage=error.error.message
      //alert()
    });
  }

  data!: any[][];
  displayedColumns!: string[];
  pageSize = 10;
  pageIndex = 0;
  length = 0;
  fetchData(pageEvent?: any) {
    const formData = new FormData();

    formData.append('file', this.selectedFile,this.selectedFile.name);
    /*const params = {
      page: (pageEvent ? pageEvent.pageIndex : this.pageIndex).toString(),
      size: this.pageSize.toString()
    };*/
    this.http.post<any[][]>('http://localhost:8083/calculChecksum',formData).subscribe(response => {
      //this.data = response;
      this.displayedColumns = Object.keys(this.data[0][0]);
      this.length = this.data.reduce((sum, sheetData) => sum + sheetData.length, 0);
      this.pageIndex = pageEvent ? pageEvent.pageIndex : this.pageIndex;

    });
  }
  onSubmit2() {
    const formData = new FormData();

    formData.append('file', this.selectedFile,this.selectedFile.name);
    this.http.post<any[][]>('http://localhost:8083/calculChecksum',formData).subscribe(response=>{
      console.log("data from new controller")
      console.log(response)
      this.data = response;
      this.displayedColumns = Object.keys(this.data[0][0]);
      this.length = this.data.reduce((sum, sheetData) => sum + sheetData.length, 0);
      console.log("displayedColumns")
      console.log(this.displayedColumns)
    })

  }

}
export interface ExcelFileDTO{
  fileChecksum:string
  fileSize:number
  fileName:string
  jsonValue:Map<string,string>
}
