import { Rect, Figure } from "./Figure";
import { canvas } from './index';
import { DecoratorRect } from "./Decorator";

export abstract class Creator {
  protected x: any;
  protected y: any;
  constructor(x: any, y: any) {
    this.x = x;
    this.y = y;
  }

  public abstract init() : Figure;
}

export class CreatorRect extends Creator {
  private figure: any;
  constructor(x: any, y: any) {
    super(x, y);
    this.figure = new Rect(canvas);
    // let decorator = new DecoratorRect(this.figure);
  }
  public init() {
    this.figure.draw(this.x, this.y);
    return this.figure;
  }
}