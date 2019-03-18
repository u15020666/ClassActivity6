import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Chart} from 'chart.js';
import {ReportingService} from "./reporting.service";
import {mergeMap, groupBy,map,reduce} from 'rxjs/operators';
import {of} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng7-pre';
}

constructor(private reporting: ReportingService){}

random_rgba(){
  var o = Math.round, r = Math.round, s = 255;
  return 'rgba('+ o(r()*s) + ',' +  o(r()*s) + ',' + o(r()*s) + ', 0.7)';
}

submitRequest(){
  this.reporting.getReportingData().subscribe(response =>{
    console.log(response);
    
    
    
    this.Chart = new Chart('canvas'),{
      type:'bar',
      data: {
        labels: keys,
        datasets: [
          {
          data: values,
          borderColor: '#3cba9f',
          fill: false,
          backgroundColor : [
            this.random_rgba(),
            this.random_rgba(),
            this.random_rgba()
          ]
        }
        ]
      }
    }
  }
}


