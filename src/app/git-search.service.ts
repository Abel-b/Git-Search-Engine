import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import { Repo } from './repo';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  username: string;
  user: User;
  repo: Repo;
  clientid = '57725135f46b31a5c0a3';
  clientsecret = 'c3f792ac19155004cdb9bc035aa9c579dc01f50c';


  constructor(private http: HttpClient) {
    this.user = new User("", "", "", "", "", 0, 0, new Date());
    this.repo = new Repo("", "", "")
    this.username = 'Abel-b';

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
      this.http.get<ApiResponse>(environment.apiUrl + this.username + environment.apiKey).toPromise().then(response => {
        this.user.avatar_url = response.avatar_url
        this.user.name = response.name
        this.user.url = response.url
        this.user.bio = response.bio
        this.user.location = response.location
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.creation = response.creation

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
  getProfileInfo() {
    interface ApiResponse {
      login: string;
    }
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  }

  getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  }

  updateProfile(username: string) {
    this.username = username;
  }
}



