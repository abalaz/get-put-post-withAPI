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
  public blog: Blog[]=[];
  editNumber = '';
  isEditing = false;
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

    const data = {
      title: this.title,
      content: this.content,
      img: "http://loremflickr.com/640/480/food",
      thumbnail: "http://loremflickr.com/640/480/city",
      createdAt: "2022-05-23T10:49:51.622Z",
      description: "description 6"
    };


    this.postServiceService.postBlogItem(data).subscribe(res =>{
      console.log(res);
    })
    }
    edit(item:Blog, id:string):void{
      this.editNumber = item.id;
      this.listBlog.forEach((elm:Blog) =>{
        if(elm.id === id){
          this.isEditing = true;
        }
      })


    }
    done(item:Blog):void{
      this.listBlog.forEach((elm:Blog) =>{
        if(elm.id === item.id){
          this.isEditing = false;
          const title = item.title;
          const content = item.content;
          console.log(this.isEditing)
        }
      })
      this.postServiceService.putBlogItem(item).subscribe(res=>{
        console.log(res);
      })
    }
}
