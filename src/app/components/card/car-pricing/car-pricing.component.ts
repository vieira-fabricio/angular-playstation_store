import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-pricing',
  templateUrl: './car-pricing.component.html',
  styleUrls: ['./car-pricing.component.css']
})
export class CarPricingComponent implements OnInit{

  @Input()
  gamePrice:String = ''
  @Input()
  gameType:String = ''



  constructor(){}
  
  ngOnInit(): void {
  }

}
