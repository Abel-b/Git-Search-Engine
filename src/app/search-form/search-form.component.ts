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

  user:User;
  repo:Repo;
  username:string;

  constructor(private GitSearchService:GitSearchService) { }

    findProfile() {
      this.GitSearchService.updateProfile(this.username);
      this.GitSearchService.userRequest()
      this.user = this.GitSearchService.user
    }
    findProfile1(){
      this.GitSearchService.updateProfile(this.username);
      this.GitSearchService.repoRequest();
      this.repo=this.GitSearchService.repo
      }
      
  ngOnInit() {
  }
}

