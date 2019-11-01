import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  private username:string;
  user:User;
  repo:Repo;

  constructor() { 
    this.user = new User ("","","","","",0,0,0,new Date());
    this.repo = new Repo ("","","")
    this.username = '';
  }
}

