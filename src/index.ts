import { Paint } from "./Paint";
import { Rect } from './Figure';
import { Creator, CreatorRect } from "./Creator";
document.body.innerHTML = `
  <div class="paint">
  <div class="containerMenu"></div>
  <canvas width="500" height="500"><canvas>
  </div>`;

export let paint = new Paint(document.querySelector('.paint'));
export let canvas = document.querySelector('canvas');

paint.createButton({
  title: "Select",
  onClick: function () {
    paint.canvas.onclick = null;
    paint.initDrag();
  }
})

paint.createButton({
  title: "Rect",
  onClick: function (e: any) {
    paint.canvas.onmousedown = null;
    paint.canvas.onclick = function (e:any) {
      let creator = new CreatorRect(e.pageX, e.pageY)
      paint.listFigure.push(creator.init())
    }
  }
})

paint.createButton({
  title: "Ellipse",
  onClick: function() {

  }
})
