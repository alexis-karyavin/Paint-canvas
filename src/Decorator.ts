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
  private selectedFigure: any;

  constructor(paint: Paint) {
    super(paint.container);
    this.paint = paint;
    this.buttons = paint.buttons;
    this.selectedFigure = null;
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

  public redrawFigure() {
    this.paint.redrawFigure();
  }

  private initDecorator(e: any) {
    this.selectedFigure = this.searchFigure(e.pageX, e.pageY);
    if (this.selectedFigure) {
      this.selectedFigure = new DecoratorRect(this.selectedFigure);
      this.figureAdd(this.selectedFigure);
    } else {
      this.redrawFigure();
    }
  }
}

export class DecoratorRect extends DecoratorFigure {
  constructor(figure: Figure) {
    super(figure)
    this.x = figure.x;
    this.y = figure.y;
    this.width = figure.width;
    this.height = figure.height;
    this.colorFill = figure.colorFill;
    this.figure = figure;
    this.init();
  }
  
  private init() {
    console.log("init decorator")
    // this.drawStroke();
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