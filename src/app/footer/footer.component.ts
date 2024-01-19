import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contact: string = "Contato: (37) 99828-9628 / franciscosanamaral@hotmail.com";

  constructor() { }

  ngOnInit(): void {
  }

}
