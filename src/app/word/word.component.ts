import { Component } from "@angular/core";

@Component({
  templateUrl : './word.component.html',
  styleUrls : ['./word.component.css'],
  selector : 'app-word'
})
export class WordComponent{
  en = "Hello";
  vn = "Xin chào";
  imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  forgot = true;
  toggleForgot(){
    this.forgot = !this.forgot;
  }
}
