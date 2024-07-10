import { BAT_H, BAT_SPEED, BAT_V, SCALE } from "../constants";
import { Position } from "../position";

export class Bat {
  position: Position;
  constructor(position: Position) {
    this.position = position;
  }

  getYTopPosition() {
    return this.position.y;
  }

  getYHalfPosition() {
    return this.position.y + BAT_V * SCALE * 0.5;
  }

  getYBottomPosition() {
    return this.position.y + BAT_V * SCALE;
  }

  getXLeftPosition() {
    return this.position.x;
  }

  getXRightPosition() {
    return this.position.x + BAT_H * SCALE;
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

  moveUp(canvasLimit: number) {
    if (this.getYTopPosition() - BAT_SPEED <= canvasLimit) {
      this.position.y = canvasLimit;
    } else {
      this.position.y -= BAT_SPEED;
    }
  }
  moveDown(canvasLimit: number) {
    if (this.getYBottomPosition() + BAT_SPEED >= canvasLimit) {
      this.position.y = canvasLimit - BAT_V * SCALE;
    } else {
      this.position.y += BAT_SPEED;
    }
  }
}
