import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import { Repo } from './repo';
import { User } from './user';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  private username: string;
  user: User;
  repo: Repo;

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", "", "", 0, 0, 0, new Date());
    this.repo = new Repo("", "", "")
    this.username = '';
  }
  userRequest() {
    interface ApiResponse {
      avatar_url: string;
      name: string;
      url: string;
      bio: string;
      location: string;
      followers: number;
      following: number;
      creation: Date;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiurl + this.username + environment.apiKey).toPromise().then(response => {
        this.user.avatar_url = response.avatar_url
        this.user.name = response.name
        this.user.url = response.url
        this.user.bio = response.bio
        this.user.location = response.location
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.creation = response.created_at

        resolve()
      },
        error => {
          this.user.name = "Oops! Unable to get user.Sorry try again"
          reject(error)
        }
      )
    })
    return promise
  }
  repoRequest() {
    interface ApiResponse {
      name: string;
      description: string;
      html_url: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl + this.username + environment.apiRepos).toPromise().then(response => {
        this.repo.name = response.name
        this.repo.description = response.description
        this.repo.html_url = response.html_url

        resolve()
      },
        error => {
          this.repo.name = "Oops! Unable to get repositories. Try again!"
          reject(error)
        }
      )
    })
    return promise
  }
  updateProfile(username: string) {
    this.username = username;
  }
}



