import { Component, OnInit } from '@angular/core';
import { Blog, PostServiceService } from './post-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public listBlog: Blog[] = [];
  public content = '';
  public id ='';
  public title='';
  public blog:Blog[]=[];
url = `https://628c5bd03df57e983ecd72ea.mockapi.io/api/v1/blog/`;
  isEdited = false;
  constructor(private postServiceService: PostServiceService ) {
  }

  ngOnInit(): void {
      this.postServiceService.getListBlog().subscribe((res) =>{
        this.listBlog = res;
        console.log('this.listBlog',this.listBlog);

      })
  }

  deleteMe(id: string): void {
    this.postServiceService.deleteBlogItem(id).subscribe(res =>{
      console.log(res);
      window.location.reload();
    })
  }
  add(): void{
    this.postServiceService.postBlogItem(blog).subscribe(res =>{
      console.log(res);
    })
    }
  }

