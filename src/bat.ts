import { BAT_H, BAT_V, SCALE } from "./constants";
import { Position } from "./position";

export class Bat {
  position: Position;
  constructor(position: Position) {
    this.position = position;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      BAT_H * SCALE,
      BAT_V * SCALE
    );
    ctx.restore();
  }

  moveProcess() {
    this.position.y += 0;
  }
}
