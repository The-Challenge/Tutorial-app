import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserprofileService } from '../services/userprofile.service'
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  private storage;
  constructor(
    private route: ActivatedRoute,
    private userprofileService: UserprofileService
    ) { }

  ngOnInit() {
    this.storage = this.route.queryParams.subscribe(params =>{
      console.log('@@@@@@@userpage//params',params)
      let username =params['username'];
      console.log('@@@@@@@userpage//username',username)
      this.userprofileService.getProfile(username)
    })
  }

}
