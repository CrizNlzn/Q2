import { Component, OnInit } from '@angular/core';
import { PicRotatorComponent } from './pic-rotator/pic-rotator.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string | undefined;

  constructor() { }

  ngOnInit(): void {
      this.title = "Q2"
  }
}
