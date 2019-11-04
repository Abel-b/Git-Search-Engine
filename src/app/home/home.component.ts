import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile: any = {
    avatar_url: ''
  };
  user: any;
  username:string;
  repos: any = [];

  constructor(private GitSearchService: GitSearchService) {
    this.GitSearchService.getProfileInfo().subscribe(user => {
      this.user = user;
      this.username = "";
    });
    this.GitSearchService.getProfileInfo().subscribe(profile => {
      this.profile = profile
    })
    this.GitSearchService.getProfileRepos().subscribe(repos => {
      this.repos = repos;
    });

  }
  ngOnInit() {
  }

}
