import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { User } from '../user';
import { Repo } from '../repo';
import { RepoComponent } from '../repo/repo.component'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  profile: any = {
    avatar_url: ''
  };
  repos: any = [];
  username: string;
  user: any;;



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

  findProfile() {
    this.GitSearchService.updateProfile(this.username);
    this.GitSearchService.userRequest()
    this.GitSearchService.updateProfile(this.username);
    this.GitSearchService.getProfileInfo().subscribe(profile => {
      this.GitSearchService.userRequest()
      this.user = this.GitSearchService.user
      this.profile = profile
    });
    this.GitSearchService.getProfileRepos().subscribe(repos => {
      this.repos = repos;
    });
  }


  ngOnInit() {
  }
}

