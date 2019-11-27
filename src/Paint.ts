import { getPointsCanvas } from './assets/js/libs'
import { Button } from "./Button";
import { removeAllListeners } from "./assets/js/libs";
import { Figure } from "./Figure";
import { DecoratorRect } from './Decorator';

export class Paint {
  public listFigure: Array<Figure>;
  public container: any;
  public containerMenu: any;
  public canvas: any;
  public ctx: any;
  public buttons: any = [];
  public currentElement: any;
  public activeButton: any; 

  constructor(container: any) {
    this.container = container;
    this.listFigure = [];
    this._init();
  }

  private _init(): void {
    this.containerMenu = this.container.querySelector('.containerMenu');
    this.canvas = this.container.querySelector('canvas');
    this.ctx = this.container.querySelector('canvas').getContext('2d');
  }

  createButton(param: any): void {
    let button = new Button(param, this.containerMenu)
      button.elemDom.addEventListener('click', () => {
        this.disactiveAllButtons()
        button.active();
      });
    this.buttons.push(button);
  }

  disactiveAllButtons(): void {
    this.buttons.forEach((item: any)=>{
      item.disactive();
    })
  }

  public searchFigure(x: any, y: any): any {
    let figure = null;
    let points = getPointsCanvas(x, y, this.canvas)

    // console.log(this.listFigure);
    
    let index = this.listFigure.findIndex(item => {
      return (points.x >= item.x && points.x <= item.x + item.width && points.y >= item.y && points.y <= item.y + item.height)
    })
    if (index != -1) {
      figure = this.listFigure.slice(0)[index];
      this.listFigure.splice(index,1);
      return figure;
    }
  }

  public figureAdd(figure: Figure) {
    this.listFigure.push(figure);
  }

  private clearCanvas(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public redrawFigure() {
    this.clearCanvas();

    this.listFigure.forEach(item => {
      item.redraw();
    });
  }

  public initDrag() {
    this.canvas.onmousedown = startDrag;
    let elemDrag: any = null,
        self = this;
    function startDrag(evt: MouseEvent): void{
      console.log("start drag")

      
      elemDrag = self.searchFigure(evt.pageX, evt.pageY);
      console.log(elemDrag);
      if(elemDrag) {
        self.canvas.onmousemove = drag;
        self.canvas.onmouseup = endDrag;
        self.canvas.onmouseleave = endDrag;
      }
    }
    function drag(evt: MouseEvent): void {
      console.log("drag");

      self.redrawFigure();

      let points = getPointsCanvas(evt.pageX, evt.pageY, self.canvas)
      elemDrag.x = points.x;
      elemDrag.y = points.y;

      elemDrag.redraw();
    }
    function endDrag(evt: MouseEvent  ): void {
      // debugger
      self.figureAdd(elemDrag);
      console.log(self.listFigure)
      elemDrag = null;
      self.canvas.onmousemove = null;
      self.canvas.onmouseup = null;
      self.canvas.onmouseleave = null;
    }
  }
}