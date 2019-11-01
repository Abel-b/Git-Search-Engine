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

  constructor() { }
}
