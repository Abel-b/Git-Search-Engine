import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { User } from '../user';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  user:User;
  username:string;

  constructor(private GitSearchService:GitSearchService) { }

    findProfile() {
      console.log('username')
    }
  ngOnInit() {
  }
}

