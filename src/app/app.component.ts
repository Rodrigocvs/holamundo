import { Component } from '@angular/core';

import {PostService} from './post.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title = 'Rodrigo';
  name:string;
  email = "nicolas@hgmail.com";
  webside = "www.twitter.com";
  hobbies : string [] ;
  showhobbies: Boolean;

  constructor (private postservice: PostService){
    console.log ('constructor works');
    this.name = "Rodrigo";
    this.showhobbies=false;
    this.hobbies = ['run', 'read', 'write'];
    this.postservice.getPost().subscribe(posts=> {
      console.log(posts);
    });
  }
toggleHobies(){
  this.showhobbies= !this.showhobbies;  
}
newhobby (hobby){
  this.hobbies.push(hobby.value);
  hobby.value= '';
  return false;
}
}
