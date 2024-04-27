// const canvas: HTMLCanvasElement = document.getElementById(
//   "game"
// ) as HTMLCanvasElement;
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// const ctx = canvas.getContext("2d");
// if (!ctx) {
//   throw Error;
// }
// const draw = (ctx: CanvasRenderingContext2D) => {
//   // ctx.scale(1, -1);
//   ctx.beginPath();
//   ctx.fillStyle = "#4286f4";
//   ctx.arc(1000, 500, 500, 0, Math.PI * 2, true);
//   ctx.stroke();
//   ctx.closePath();
//   console.log("Ball is drawing self!");
//   ctx.fillStyle = "black";
//   ctx.beginPath();
//   ctx.arc(0, 63, 9, 0, 2 * Math.PI);
//   ctx.moveTo(-3.5, 70);
//   ctx.fill();
//   ctx.fillStyle = "black";

//   // Draw the Body of the Gorilla
//   ctx.beginPath();
//   ctx.moveTo(-68, 72);
//   ctx.lineTo(-80, 176);

//   ctx.lineTo(-44, 308);
//   ctx.lineTo(0, 336);
//   ctx.lineTo(+44, 308);

//   ctx.lineTo(+80, 176);
//   ctx.lineTo(+68, 72);
//   ctx.fill();

//   ctx.beginPath();
//   ctx.moveTo(-20, 230);
//   ctx.quadraticCurveTo(0, 245, 20, 230);
//   ctx.stroke();
// };
// draw(ctx);
var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
let width = window.innerWidth;
let height = window.innerHeight;
let maxCircles = 250;
let maxSquares = 250;
let spawnX = width / 2;
let spawnY = height / 2;
window.onload = () => {
  let container = document.createElement("div");
  container.id = "container";
  canvas = document.createElement("canvas");
  canvas.id = "game";
  canvas.width = width;
  canvas.height = height;
  container.appendChild(canvas);
  document.body.appendChild(container);
  ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle = "#4286f4";
  ctx.arc(1000, 500, 500, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.closePath();
};
