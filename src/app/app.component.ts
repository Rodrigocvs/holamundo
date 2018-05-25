import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rodrigo';
  name:string;
  email = "nicolas@hgmail.com";
  webside = "www.twitter.com";
  hobbies = ['run', 'read', 'write'];
  showhobbies: boolean;

  constructor (){
    console.log ('constructor works');
    this.name = "Rodrigo"
    this.showhobbies=false;
  }
toggleHobies(){
  this.showhobbies= !this.showhobbies;  
}
}
