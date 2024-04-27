var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

const drawCanvas = (ctx: CanvasRenderingContext2D) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  // Fill the background
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, width, height);

  // Draw circle
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.arc(width / 2, height / 2, height / 2, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.closePath();
};

window.addEventListener("resize", () => drawCanvas(ctx));
window.onload = () => {
  let container = document.createElement("div");
  container.id = "container";
  container.className = "container";
  canvas = document.createElement("canvas");
  canvas.id = "game";
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  container.appendChild(canvas);
  document.body.appendChild(container);
  ctx = canvas.getContext("2d");
  drawCanvas(ctx);
};
