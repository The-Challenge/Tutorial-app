import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MainpageService } from '../services/mainpage.service';
import { HttpModule} from '@angular/http';


@Component({
  selector: 'app-mainpage',
  templateUrl:'./mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers:[MainpageService,HttpModule]
})
//./mainpage.component.html
export class MainpageComponent implements OnInit {
  loading = false;
  public  Tutorials : any;

  constructor(
    private router: ActivatedRoute,
    private mainpageService: MainpageService

  ) { }

  ngOnInit() {
    console.log('!!!!!!!!!!!!!!Tutorials');
    this.loading = true;
        this.mainpageService.gettutorials()
            .subscribe(
                data => {
                  this.Tutorials = data;
                  console.log('!!!!!!!!!!!!!!singup',this.Tutorials);
                   // this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                });
  }

} 
