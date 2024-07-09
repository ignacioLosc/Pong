import { BAT_H, BAT_SPEED, BAT_V, SCALE } from "./constants";
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

  moveUp(type: string) {
    if (type === "LEFT") {
      if (this.position.y - BAT_SPEED <= 0) {
        this.position.y = 0;
      } else {
        this.position.y -= BAT_SPEED;
      }
    } else {
      if (this.position.y - BAT_SPEED <= 0) {
        this.position.y = 0;
      } else {
        this.position.y -= BAT_SPEED;
      }
    }
  }
  moveDown(type: string, canvas: any) {
    if (type === "LEFT") {
      if (this.position.y + BAT_SPEED + BAT_V * SCALE >= canvas.height) {
        this.position.y = canvas.height - BAT_V * SCALE;
      } else {
        this.position.y += BAT_SPEED;
      }
    } else {
      if (this.position.y + BAT_SPEED + BAT_V * SCALE >= canvas.height) {
        this.position.y = canvas.height - BAT_V * SCALE;
      } else {
        this.position.y += BAT_SPEED;
      }
    }
  }
}
