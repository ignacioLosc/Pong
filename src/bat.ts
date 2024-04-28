import { BAT_H, BAT_V } from "./constants";
import { Position } from "./position";

export class Bat {
  position: Position;
  constructor(position: Position) {
    this.position = position;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(this.position.x, this.position.y, BAT_H * 10, BAT_V * 10);
    ctx.restore();
  }

  moveProcess() {
    this.position.y += 0;
  }
}
