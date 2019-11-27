import { getMousePosition } from "./assets/js/libs";
import { Button } from "./Button";
import { removeAllListeners } from "./assets/js/libs";
import { Figure } from "./Figure";

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
}