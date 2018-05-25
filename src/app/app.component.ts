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
  hobbies : string [] ;
  showhobbies: Boolean;

  constructor (){
    console.log ('constructor works');
    this.name = "Rodrigo";
    this.showhobbies=false;
    this.hobbies = ['run', 'read', 'write'];
  }
toggleHobies(){
  this.showhobbies= !this.showhobbies;  
}
newhobby (hobby){
  this.hobbies.push(hobby.value);
  return false;
}
}
