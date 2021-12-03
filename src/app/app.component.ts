import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gened1004-cf-project';
  tabTitle = 'GENED 1004 - CF'

  // Used to set a new tab title if needed
  public constructor(private titleService: Title) { }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
