import { Paint } from "./Paint";
import { Rect } from './Figure';
document.body.innerHTML = `
  <div class="paint">
  <div class="containerMenu"></div>
  <canvas width="500" height="500"><canvas>
  </div>`;

let paint = new Paint(document.querySelector('.paint'));

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
      let rect = new Rect(paint.canvas);
      rect.draw(e.pageX, e.pageY);
      paint.listFigure.push(rect);
    }
  }
})

paint.createButton({
  title: "Ellipse",
  onClick: function() {

  }
})
