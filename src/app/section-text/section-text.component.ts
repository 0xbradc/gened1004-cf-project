import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-section-text',
  templateUrl: './section-text.component.html',
  styleUrls: ['./section-text.component.css'],
  providers: [ AppComponent ]
})
export class SectionTextComponent implements OnInit {

  section_title = this.service.section_title;
  section_text = '';

  constructor(private service: AppComponent) { }

  @Input('input_text') input_text: any;
  ngOnInit(): void { 
    this.section_title = this.service.section_title;
  }

  ngOnChanges() {
    this.section_title = this.input_text;
  }

  setSectionTitle(newTitle: string) {
    this.section_title = newTitle;
  }

}
