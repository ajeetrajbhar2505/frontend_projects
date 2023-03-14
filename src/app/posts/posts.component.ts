import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
   posts:any = []
   constructor(public http:HttpClient,public router:Router){}

  ngOnInit(): void {
      this.getPosts()
  }

  // Calling the GET API to retrieve posts data
  async getPosts() {
  this.posts = await this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise()
  }

  // Navigate to the post details page with the ID
  showPostDetails(id:any){
   this.router.navigate(['post-details/' + id])
  }
}
