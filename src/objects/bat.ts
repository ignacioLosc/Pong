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

  moveUp(type: string) {
    if (type === "LEFT") {
      if (this.getYTopPosition() - BAT_SPEED <= 0) {
        this.position.y = 0;
      } else {
        this.position.y -= BAT_SPEED;
      }
    } else {
      if (this.getYTopPosition() - BAT_SPEED <= 0) {
        this.position.y = 0;
      } else {
        this.position.y -= BAT_SPEED;
      }
    }
  }
  moveDown(type: string, canvas: any) {
    if (type === "LEFT") {
      if (this.getYBottomPosition() + BAT_SPEED >= canvas.height) {
        this.position.y = canvas.height - BAT_V * SCALE;
      } else {
        this.position.y += BAT_SPEED;
      }
    } else {
      if (this.getYBottomPosition() + BAT_SPEED >= canvas.height) {
        this.position.y = canvas.height - BAT_V * SCALE;
      } else {
        this.position.y += BAT_SPEED;
      }
    }
  }
}
