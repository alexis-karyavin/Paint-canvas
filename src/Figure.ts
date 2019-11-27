export abstract class Figure {
  protected ctx: any;
  public x: any;
  public y :any;
  public width: any;
  public height: any;
  public colorFill: String;

  protected canvas: any;
  constructor(canvas: any) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.width = 50;
    this.height = 50;
    this.x = 0;
    this.y = 0;
    this.colorFill = '#'+Math.round(0xffffff * Math.random()).toString(16);
  }

  public redraw() {
    this.ctx.fillStyle = this.colorFill;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export class Rect extends Figure {
  constructor(canvas: any){
    super(canvas);
    // this.init(canvas);
  }

  public draw(x: any, y: any) {
    // canvas.addEventListener('click', this.addRect.bind(this));
    this.x = x - this.canvas.offsetLeft,
    this.y = y - this.canvas.offsetTop;
    this.ctx.fillStyle = this.colorFill;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  

  // private addRect(e: any) {
  //   console.log(e.pageX)
  //   let x = e.pageX - this.canvas.offsetLeft,
  //       y = e.pageY - this.canvas.offsetTop;
  //   this.ctx.fillStyle = this.colorFill;
  //   this.ctx.fillRect(x, y, this.width, this.height);
  // }
}