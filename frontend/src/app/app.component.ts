import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient}    from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  title = 'frontend';
  input = '5,3,2,1,4';
  Baseurl = "http://localhost:8080";
  result = "";
  sort() {
    this.http.get(this.Baseurl + "/sort.json?input=" + this.input + "&sort_type=1&value_type=2")
    .subscribe(data => {
        var info = data['result'];
        console.log(info);
        this.result = info;
        
      },
      err => console.log(err)
    );
  }

}
