import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LahtealumineComponent } from '../lahtealumine/lahtealumine.component';

//import { products } from '../products';

@Component({
  selector: 'yld6-component',
  templateUrl: './yld6.component.html',
  styleUrls: ['./yld6.component.scss'],
  standalone: true,
  imports: [CommonModule, LahtealumineComponent]
})
export class Yld6Component {

ReadMore:boolean = true
visible:boolean = false

onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
    //alert("lgaj");
  }
  
}