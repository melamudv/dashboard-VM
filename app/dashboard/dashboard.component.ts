import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import { MODAL_DIRECTIVES  } from 'ng2-bs3-modal/ng2-bs3-modal';



@Component({
  selector: 'my-dashboard',
  directives: [MODAL_DIRECTIVES],
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private http: Http) {
    this.http = http;
  }
  data: any;
  result: Object;
  VCenter: Array<Object>[];
  ngOnInit() {
    this.data = {};
    // this.http.get('/app/dashboard/data.json').toPromise()
    //     .then((res: Response) => {
    //       this.data = res.json();
    //       () => console.log('done',res.json())
    //     });
    this.http.get(`/app/dashboard/data.json`)
        .map(response => response.json().VCenter) // <------
        .subscribe(
            data => this.VCenter = data,
            error => console.log(error)
        );
  }
  onSelect() {
    // let link = ['/dashboard'];
    // this.router.navigate(link);
  }
}

