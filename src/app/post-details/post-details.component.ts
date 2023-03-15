import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {

  postDetails:any = ''
  PostComments:any = []
  activebuttonData:any = 'Comments'
  id:any = ''
  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute,public router:Router) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getPostDetails(this.id);
    this.getPostComments(this.id)
  }

  // Created the 'getPostDetails' function to retrieve post details based on the post ID
  async getPostDetails(id: any) {
    this.postDetails = await this.http.get('https://jsonplaceholder.typicode.com/posts/' + id).toPromise()
  }

  // Created the 'getPostComments' function to retrieve comments based on the post ID
  async getPostComments(id: any) {
    this.PostComments = await this.http.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments').toPromise()
  }


 async activeButton(data:any)
  {
    this.activebuttonData = data

    // When we click on the 'comments' button, it calls the getPostComments API, and when we click on the 'All comments' button, it calls the All comments API
    if (data == 'AllComments') {
    this.PostComments = await this.http.get('https://jsonplaceholder.typicode.com/comments').toPromise()
    return
    }
    this.getPostComments(this.id)
  }


  backToPosts()
  {
    this.router.navigate(['posts'])
  }


}
