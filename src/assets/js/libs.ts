export function removeAllListeners(elem:any): any {
  let new_element = elem.cloneNode(true);
  elem.parentNode.replaceChild(new_element, elem);
}
export let getMousePosition = (x: number, y: number, svg: any): any => {
  let CTM = svg.getScreenCTM();
  return {
    x: (x - CTM.e) / CTM.a,
    y: (y - CTM.f) / CTM.d
  };
}

export let getPointsCanvas = (x:any, y: any, canvas: any): any => {
  return {
    x: x - canvas.offsetLeft,
    y: y - canvas.offsetTop
  };
}