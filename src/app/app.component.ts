import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'gened1004-cf-project';
  section_title = '';

  setSectionTitle(newTitle: string) {
    this.section_title = newTitle;
  }
}
