import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { AuthenticationService } from './services/authentication.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, PostService]
})
export class AppComponent implements OnInit {
  title = 'Angular Firebase Blog!';
  posts: FirebaseListObservable<any[]>;//Array<Post>;
  
  constructor(public authService: AuthenticationService, private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  logout() {
     this.authService.logout();
  }

  login() {
    this.authService.login();
  }

  anonLogin() {
    this.authService.anonLogin();
  }

  getPosts() {
    this.posts = this.postService.getPosts();
  }

  removePost(key) {
    this.postService.removePost(key);
  }

  addPost() {
    const uid = this.authService.getCurrentUser();
    const postData = {
      author: uid,
      avatar: "img.jpg",
      body: "<b>Body</b> del post",
      date: "",
      title: "Título del post",
    }
    console.log(postData);

    //this.postService.addPost(postData);
  }
}