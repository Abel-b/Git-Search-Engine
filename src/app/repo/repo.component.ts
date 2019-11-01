import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { GitSearchService } from '../git-search.service'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  username:string;
  repo: Repo;
  constructor(private GitSearchService:GitSearchService) {
  }
findProfile(){
this.GitSearchService.updateProfile(this.username);
this.GitSearchService.repoRequest();
this.repo=this.GitSearchService.repo
}

ngOnInit() {
}

}
