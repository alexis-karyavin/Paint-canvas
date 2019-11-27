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
   
  }
})

paint.createButton({
  title: "Rect",
  onClick: function (e: any) {
    // paint.listFigure.push(new Rect(paint.canvas));
    // console.log(paint.listFigure);
    paint.canvas.onclick = function (e:any) {
      console.log('click');
      let rect = new Rect(paint.canvas);
      rect.init(e.pageX, e.pageY);
      paint.listFigure.push(rect);
    }
    // paint.ctx.fillStyle = '#'+Math.round(0xffffff * Math.random()).toString(16);
    // paint.ctx.fillRect(10, 10, 55, 50);
    
  }
})

paint.createButton({
  title: "Ellipse",
  onClick: function() {

  }
})
