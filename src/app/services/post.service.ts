import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;
  post: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) { }

  getPosts() {
    return this.af.database.list('/posts');
  }

  // Firebase remove method.
  // const itemObservable = af.database.object('/item');
  // itemObservable.remove();
  removePost(key) {
    const post = this.af.database.object('/posts/'+key);
    post.remove();
  }

  addPost(postData) {
    this.af.database.list('/posts').push(postData);
  }

}
