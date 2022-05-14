import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-regalos',
  templateUrl: './regalos.component.html',
  styleUrls: ['./regalos.component.css']
})
export class RegalosComponent implements OnInit {
  @Input() regalos: string;
  constructor() { }

  ngOnInit(): void {
  }

}
