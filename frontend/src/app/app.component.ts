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
  url = "http://localhost:8080/sort.json?input=1,2,3,4,6&sort_type=1&value_type=2";
  result = "";
  sort() {
    this.http.get(this.url)
    .subscribe(data => {
        var info : string = data['result'];
        this.result = info;
        
      },
      err => console.log(err)
    );
  }

}
