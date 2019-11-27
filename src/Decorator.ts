import { Figure, Rect } from "./Figure";

import { canvas } from './index';


abstract class Decorator extends Figure {
  protected figure: Figure;

  constructor(figure: Figure) {
    super(canvas)
    this.figure = figure;
  }

  abstract init(e:any): void;
}

export class DecoratorRect extends Decorator {
  constructor(figure: Figure) {
    super(figure) 
    console.log("Decorator create")
    // this.canvas.addEventListenner('click', this.init.bind(this))
    
  }
  
  public init(e: any) {
    this.ctx.fillRect(this.figure.x, this.figure.y, this.figure.width, this.figure.height);
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth   = 3;
  }
}