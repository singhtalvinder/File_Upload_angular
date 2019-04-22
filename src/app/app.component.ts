import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFileUpload';
  selectedFile: File = null;

  constructor(private http: HttpClient) {

  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile= <File>event.target.files[0];
  }
  // for button click
  OnUpload() {
    // upload the file here .
    const fd = new FormData();
   fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8080/uploadFile', fd, 
      {
        headers:
          {'Access-Control-Allow-Origin': '*'//,
            //'Access-Control-Allow-Methods': 'POST'
          }
   
      }).subscribe(res=> {
      console.log(res);
    });

  }
}
