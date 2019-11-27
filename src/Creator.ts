import { Rect } from "./Figure";
import { canvas } from './index';

export abstract class Creator {
  protected x: any;
  protected y: any;
  constructor(x: any, y: any) {
    this.x = x;
    this.y = y;
  }
}

export class CreatorRect extends Creator {
  private figure: any;
  constructor(x: any, y: any) {
    super(x, y);
    this.figure = new Rect(canvas);
  }
  public init() {
    this.figure.draw(this.x, this.y);
    return this.figure;
  }
}