import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-label',
  templateUrl: './car-label.component.html',
  styleUrls: ['./car-label.component.css']
})
export class CarLabelComponent implements OnInit{
  
  @Input()
  gameLabel:String = ''

  constructor(){}
  
  ngOnInit(): void {
  }
}
