import { Figure, Rect } from "./Figure";

import { canvas, paint } from './index';
import { Paint } from "./Paint";


abstract class DecoratorFigure extends Figure {
  protected figure: Figure;

  constructor(figure: Figure) {
    super(canvas)
    this.figure = figure;
  }
}

export class DecoratorPaint extends Paint {
  protected paint: Paint;

  constructor(paint: Paint) {
    super(paint.container);
    this.paint = paint;
    this.buttons = paint.buttons;
  }

  public initDrag() {
    this.paint.initDrag();
    this.canvas.onclick = this.initDecorator.bind(this)
  }

  public searchFigure(x: any, y: any) {
    return this.paint.searchFigure(x, y);
  }

  public figureAdd(figure: Figure) {
    this.paint.figureAdd(figure);
    this.listFigure = this.paint.listFigure;
  }

  private initDecorator(e: any) {
    let figure = this.searchFigure(e.pageX, e.pageY);
    if (figure) figure = new DecoratorRect(figure);
  }
}

export class DecoratorRect extends DecoratorFigure {
  constructor(figure: Figure) {
    super(figure) 
    this.figure = figure;
    this.init();
  }
  
  private init() {
    console.log("init decorator")
    this.drawStroke();
    this.drawCircleResize();

  }

  private drawStroke() {
    this.ctx.strokeStyle = "black";
    this.ctx.strokeRect(this.figure.x, this.figure.y, this.figure.width, this.figure.height);
    this.ctx.lineWidth = 3;
  }

  private initPoints() {
    let points = [];
    
    points.push({
      x: this.figure.x,
      y: this.figure.y
    })

    points.push({
      x: this.figure.x + this.figure.width,
      y: this.figure.y
    })

    points.push({
      x: this.figure.x,
      y: this.figure.y + this.figure.height
    })

    points.push({
      x: this.figure.x + this.figure.width,
      y: this.figure.y + this.figure.height
    })

    return points;
  }

  private drawCircleResize(){

    let points = this.initPoints();
    
    points.forEach(item => {
      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.beginPath();
      this.ctx.arc(item.x, item.y, 5, 0, 2 * Math.PI, false);
      this.ctx.stroke();
      this.ctx.fill();
    })
  }
}