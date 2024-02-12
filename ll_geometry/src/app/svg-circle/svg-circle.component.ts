import { Component, OnInit } from '@angular/core';


interface SVGCircle {
  x:number,
  y:number,
  r:number
}

@Component({
  selector: 'app-svg-circle',
  templateUrl: './svg-circle.component.html',
  styleUrls: ['./svg-circle.component.css']
})
export class SvgCircleComponent implements OnInit {

  circles:SVGCircle[] =[];

  constructor() { }

  ngOnInit(): void {
  }


  addCircle(event: MouseEvent) {
      const x = event.clientX;
      const y = event.clientY;

      const svgRect = (event.target as SVGElement).getBoundingClientRect();
      const svgX = x - svgRect.left;
      const svgY = y - svgRect.top;
    
  
      let c:SVGCircle = {x:svgX,y:svgY,r:15};
      this.circles.push(c); 
  }


}
